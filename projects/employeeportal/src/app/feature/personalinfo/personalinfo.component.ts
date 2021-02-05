import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { Address } from '../../core/models/address';
import { User } from '../../core/models/user';
import { Supervisor } from '../../core/models/supervisor';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent {

  address: Observable<Address>;
  userinfo: Observable<User>;
  supervisor: Observable<Supervisor>;
  width: Observable<string>;
  photo: Observable<string>;

  constructor(
    private userService: UserService,
    private breakpoint: BreakpointObserver
  ) {
    this.address = this.userService.getAddress();
    this.userinfo = this.userService.getUserinfo();
    this.photo = this.userinfo.pipe(map(userinfo => userinfo.photo));
    this.supervisor = this.userService.getSupervisor();

    this.width = this.breakpoint
      .observe([
        '(min-width: 1280px)'
      ])
      .pipe(
        map(bp => (bp.matches) ? '400px' : '290px')
      );
  }

}
