import { Injectable } from '@angular/core';

import { Problem } from '../../models/problem';
import { PROBLEMS }from '../../models/mock-problems';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {
  problems: Problem[] = PROBLEMS

  constructor() { }

  getProblems():  Observable<Problem[]> {
    return of(PROBLEMS);
  }

  getProblemById(id: number): Observable<Problem> {
    return of(PROBLEMS.find(problem => problem.id === id));
  }

  addProblem(problem: Problem) {
    console.log("data service received the request");
    problem.id = this.problems.length + 1
    this.problems.push(problem);
  }

}
