import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import { Problem } from "../../shared/models/problem";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class DataService {
  problems: Problem[];
  private url = "api/v1/problems";

  constructor(private http: HttpClient) {}

  // todo: may be can optimized for tracking/ lazy-loding purpose;
  getProblems(): Observable<Problem[]> {
    //console.log("fetching");
    return this.http
      .get<Problem[]>(this.url)
      .pipe(tap(problems => (this.problems = problems)));
  }

  getProblemById(id: number): Observable<Problem> {
    return this.http
      .get<Problem>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addProblem(problem: Problem): Observable<Problem> {
    return this.http.post<Problem>(this.url, problem, httpOptions).pipe(
      tap(problem => {
        console.log("get called" + this.problems.length);
        this.problems.push(problem);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      "Something bad happened; please try again later."
    );
  }
}
