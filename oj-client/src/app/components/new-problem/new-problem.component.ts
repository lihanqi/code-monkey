import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Problem } from '../../models/problem';

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
    this.problem.difficulty = null; // in order to let <select> placeholder to work, set problem.difficulty to null
  }

  addProblem() {
    this.dataService.addProblem(this.problem);
    this.problem = new Problem();
    this.problem.difficulty = null;
  }

}
