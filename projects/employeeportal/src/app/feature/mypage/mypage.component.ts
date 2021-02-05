import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { User } from '../../core/models/user';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {
  dotFullname: string;
  firstname: string;
  lastname: string;
  employee: Observable<User>;

  constructor(
    private userService: UserService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.dotFullname = this.route.snapshot.paramMap.get('employeename');
    this.firstname = this.dotFullname.split('.')[0];
    this.lastname = this.dotFullname.split('.')[1];
    this.employee = this.userService.getActiveUser(this.firstname, this.lastname)
      .pipe(
        map( user => user.data[0] )
      );
   }

  ngOnInit(): void {
  }

}
