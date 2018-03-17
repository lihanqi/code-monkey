import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Problem, DataService } from "./data/data.service";

@Injectable()
export class ProblemDetailResolver implements Resolve<Problem> {
    constructor(private data: DataService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Problem> {
        let id = +route.paramMap.get('id');
        return this.data.getProblemById(id).take(1).map(problem => {
            if (problem) {
                return problem;
            } else {
                this.router.navigate(['/']);
                console.log("problem does not exist");
                return null;
            }
        });
    }
}