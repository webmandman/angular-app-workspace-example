import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from '../../../shared/image-cropper/image-cropper.component';
import { PhotoComponent } from './photo.component';
import { PhotoRoutingModule } from './photo-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ImageCropperComponent, PhotoComponent ],
  imports: [
    CommonModule,
    ImageCropperModule,
    PhotoRoutingModule,
    FlexLayoutModule
  ]
})
export class PhotoModule { }
