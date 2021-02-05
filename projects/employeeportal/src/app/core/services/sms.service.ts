import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Config } from '../config/api.config';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private endpoint = '/sms/send';

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(phonenumber: number, message: string): Observable<any>{
    const payload = {phonenumber, message};

    return this.http.post<any>(Config.url + this.endpoint, payload)
      .pipe(
        map( (result: ApiResponse) => result.data),
        map( data => data[0].statusCode === '201' ? true : false )
      );
  }
}
