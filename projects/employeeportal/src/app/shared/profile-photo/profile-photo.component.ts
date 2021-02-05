import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent {

  @Input() photo = '/images/people/avatar.jpg';
  @Input() width = 45;
  @Input() height = 45;

}
