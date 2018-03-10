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


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ExecutionService {
  private url = "api/v1/execution";
  constructor(private http: HttpClient) { }

  execute(language: string, code: string): Promise<string> {
    let codeWithLanguage = {
      "code": code,
      "language": language
    }
    return this.http.post<any>(this.url, codeWithLanguage, httpOptions).toPromise();
  }
}
