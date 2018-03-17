import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/toPromise";
import { Injectable } from "@angular/core";

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

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<Problem> {
    let id = +route.paramMap.get("id");
    return this.data
      .getProblemById(id)
      .toPromise()
      .then(problem => {
        if (problem) {
          return problem;
        }
      })
      .catch(error => {
        this.router.navigate(["/"]);
        console.log("problem does not exist");
        return null;
      });
  }
}
