import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';
import { PhotoService } from '../../../core/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnDestroy {

  croppedImage: any = '';
  user: any = {userid: 31310};
  userinfo: Observable<User>;
  subscription: Subscription;
  photo: Observable<string>;

  constructor(
    private userService: UserService,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.userinfo = this.userService.getUserinfo();
    this.photo = this.userinfo.pipe(map(userinfo => userinfo.photo));
   }

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }

  cancel(): void{
    this.router.navigateByUrl('/personalinfo');
  }

  saveCroppedImage(image: any): void{
    this.croppedImage = image;
    this.subscription = this.photoService.saveCroppedImage(this.user, this.croppedImage)
      .subscribe(
        data =>  {
          if (data.STATUS === 'ok'){
            this.router.navigateByUrl('/personalinfo');
          }else{
            console.log(data);
          }
        }
      );
  }

}
