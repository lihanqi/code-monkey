import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { DataService } from "../../services/data/data.service";
@Component({
  selector: "app-problem-list",
  templateUrl: "./problem-list.component.html",
  styleUrls: ["./problem-list.component.css"]
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  rowPerPage: number;
  paginationPages: number[];


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.rowPerPage = 20;``
    this.getProblems();
  }

  getProblems() {
    this.dataService.getProblems().subscribe(problems => {
      this.problems = problems;
      let numOfPages = (this.problems.length / this.rowPerPage) + 1;
      this.paginationPages.fill()
    });
  }
}
