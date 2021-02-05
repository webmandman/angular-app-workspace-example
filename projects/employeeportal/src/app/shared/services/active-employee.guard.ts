import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { UserService } from '../../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveEmployeeGuard implements CanLoad {
  dotFullname: string;
  firstname: string;
  lastname: string;

  constructor(
    private userService: UserService,
    private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
    this.dotFullname = segments[1].path;
    this.firstname = this.dotFullname.split('.')[0];
    this.lastname = this.dotFullname.split('.')[1];
    if ( this.firstname && this.lastname ){
      return this.userService.getActiveUser(this.firstname, this.lastname)
        .pipe(
          map( user => {
            if ( user.data.length === 1 ){
              return true;
            }else{
              this.redirect();
              return false;
            }
          } )
      );
    }else{
      this.redirect();
      return of(false);
    }
  }

  redirect(): void {
    this.router.navigate(['/personalinfo']);
  }
}
