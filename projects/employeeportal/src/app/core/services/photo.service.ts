import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Config } from '../config/api.config';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private endpoint = '/user/savephoto';

  constructor(private http: HttpClient) {}

  saveCroppedImage(idnumber: number, imagedata: string): Observable<any> {
    const payload = { idnumber, imagedata };

    return this.http
      .post<any>(Config.url + this.endpoint, payload)
      .pipe(map((result: ApiResponse) => result.data));
  }
}
