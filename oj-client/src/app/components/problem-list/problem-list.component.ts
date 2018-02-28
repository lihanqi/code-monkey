import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { DataService } from "../../services/data/data.service";
@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];          // All problems
  problemsDisplay: Problem[];   // Problems displayed 
  rowPerPage: number;           // Pagination config: problems each page
  paginationPages: number[];    // Nums arrary [1,2,3,...,the_last_page]
  currentPage: number;


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentPage = 1;
    this.rowPerPage = 10;
    this.problemsDisplay = [];
    this.getProblems();
    
  }

  getProblems() {
    this.dataService.getProblems().subscribe(problems => {
      this.problems = problems;
      let numOfPages = (this.problems.length / this.rowPerPage) + 1;
      // todo: should have one line solution:
      this.paginationPages = [];
      for (let i = 1; i <= numOfPages; i++) {
        this.paginationPages.push(i);
      }
      this.problemsDisplay = this.problems.slice(0, this.rowPerPage);
    });
  }

  showPage(page: number) {
    if (page < 1 || page > (this.problems.length / this.rowPerPage + 1)) {
      return false;
    }
    this.currentPage = page;
    let rpp = this.rowPerPage;
    let startIndex = (page - 1) * rpp;
    let endIndex = page * rpp;
    this.problemsDisplay = this.problems.slice(startIndex, endIndex);
    return false;
  }
}
