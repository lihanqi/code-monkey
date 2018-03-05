import { Component, OnInit } from '@angular/core';
import { Problem } from "../../../shared/models/problem";
import { DataService } from "../../../services/data/data.service";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];          // All problems
  problemsDisplay: Problem[];   // Problems displayed 
  paginationPages: number[];    // Nums arrary [1,2,3,...,the_last_page]
  currentPage: number;
  rowPerPage: number;           // Pagination config: problems each page
  numOfPages: number;
  DEFAULT_NUM_OF_TAGS = 5;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    const DEFAULT_ROW_PER_PAGE = 20;
    this.currentPage = 1;
    this.rowPerPage = DEFAULT_ROW_PER_PAGE;
    this.problemsDisplay = [];
    this.getProblems();
    
  }

  getProblems() {
    this.dataService.getProblems().subscribe(problems => {
      this.problems = problems;
      this.numOfPages = Math.floor(this.problems.length / this.rowPerPage) + 1;
      // todo: should have one line solution:
      this.problemsDisplay = this.problems.slice(0, this.rowPerPage);
      // console.log(this.numOfPages);
      this.paginationPages = this.getPageNumberTabs(0, this.DEFAULT_NUM_OF_TAGS);
    });
  }

  showPage(page: number = 1) {
    if (page <= 0 || page > this.numOfPages) {
      return false;
    }
    this.currentPage = page;
    let startIndex = (page - 1) * this.rowPerPage;
    let endIndex = page * this.rowPerPage;
    this.problemsDisplay = this.problems.slice(startIndex, endIndex);
    this.paginationPages = this.getPageNumberTabs(page, this.DEFAULT_NUM_OF_TAGS);
    return false;
  }

  changeRowPerPage() {
    this.numOfPages = Math.floor(this.problems.length / this.rowPerPage) + 1;
    console.log(this.numOfPages);
    this.showPage();
  }

  /**
   * Helper: get the appropriate pagination tabs
   * @param currentPage the current page should be the center of tabs
   * @param maxPageTabs the maximum pag tabs showed
   * Example: when currentPage is 5 and the maxPageTabs is 3
   * - the tabs should be [4,5,6] where 5 is the center
   */
  private getPageNumberTabs(currentPage: number, maxPageTabs: number): number[] {
    let pages = [];
    let totalPages = this.numOfPages;
    let start = Math.max(1, currentPage - Math.floor(maxPageTabs / 2));
    let end = Math.min(start + maxPageTabs - 1, totalPages);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

}
