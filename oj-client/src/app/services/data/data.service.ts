import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


import { Problem } from '../../models/problem';
import { PROBLEMS }from '../../models/mock-problems';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  problems: Problem[];
  private url = 'api/v1/problems';

  constructor(
    private http: HttpClient
  ) { }

  getProblems():  Observable<Problem[]> {
    return this.http.get<Problem[]>(this.url)
      .pipe(
        tap(problems => this.problems = problems)
      );
  }

  getProblemById(id: number): Observable<Problem> {
    return this.http.get<Problem>(`${this.url}/${id}`).pipe();
  }

  addProblem(problem: Problem): Observable<Problem> {
    console.log("data service received the request");
    console.log(problem);
    return this.http.post<Problem>(this.url, problem, httpOptions)
      .pipe(
        tap((problem) => {
          this.problems.push(problem);
        })
      );
  }

  // TODO: finished the handle error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
