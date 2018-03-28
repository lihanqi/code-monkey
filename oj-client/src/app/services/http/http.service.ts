import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { catchError, retry, map, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public get(url: string, headers: object = null): Observable<any> {
    let option: object = {};
    if (headers) {
      let header = new HttpHeaders;
      Object.keys(headers).forEach(key => header.set(key, headers[key]));
      option["headers"] = headers;
      // console.log(JSON.stringify(option["headers"]));
    }
    return this.http
      .get(url, option)
      .pipe(catchError(this.handleError));
  }

  // Http error handler
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
