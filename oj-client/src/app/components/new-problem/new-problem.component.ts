import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { DataService } from '../../shared/services/shared/services/data/data.service';
import { Problem } from '../../shared/models/problem';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  difficulties = ['Easy', 'Medium', 'Hard']
  problem: Problem;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.problem = new Problem();
    
    // in order to let <select> placeholder to work, set problem.difficulty to null
    this.problem.difficulty = null;
  }

  /**
   * Add a new problem
   */
  addProblem() {
    this.dataService.addProblem(this.problem).subscribe((problem) => {
      this.problem = new Problem();
      this.problem.difficulty = null;
    });
    
  }

}
