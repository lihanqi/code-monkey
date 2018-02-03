import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem';
import { PROBLEMS } from '../../models/mock-problems'

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  
  constructor() { 
    this.problems = PROBLEMS;
  }

  ngOnInit() {
    
  }

}
