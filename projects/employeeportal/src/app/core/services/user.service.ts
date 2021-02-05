import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Address } from '../models/address';
import { User } from '../models/user';
import { Config } from '../config/api.config';
import { UserConfigService } from '../config/user.config.service';
import { UserConfig } from '../models/user.config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addressEndpoint = '/user/address/';
  private userEndpoint =  '/user/';
  private supervisorEndpoint =  '/user/supervisor/';
  private addressChangeEndpoint = '/user/address/change';
  user: UserConfig;

  constructor(
    private http: HttpClient,
    private userConfigService: UserConfigService
  ) {
    this.user = this.userConfigService.getUserConfig();
    this.addressEndpoint += this.user._LOGGEDINUSER;
    this.userEndpoint += this.user._LOGGEDINUSER;
    this.supervisorEndpoint += this.user._LOGGEDINUSER;
  }

  // NOTICE: Address interface is allowed here because
  // the response is in array format
  public getAddress(): Observable<any> {
    return this.http.get<any>(Config.url + this.addressEndpoint)
    .pipe(
      map( (response) => {
        // TODO: to avoid mapping each property api user properties should
        // be named the same as the User interface.
        return {
          address:  response[0].CA_STREET1,
          address2: response[0].CA_STREET2,
          city:     response[0].CA_CITY,
          state:    response[0].CA_STATE,
          zipconde: response[0].CA_ZIP
        };
      }),
      shareReplay(1)
    );
  }

  public getUserinfo(): Observable<any> {
    return this.http.get<any>(Config.url + this.userEndpoint)
      .pipe(
        map( (response) => {
          return {
            userid: response.data.CB_EMP_N,
            email: response.data.CB_EMAIL,
            firstname: response.data.CB_FNAME,
            lastname: response.data.CB_LNAME,
            cellnumber: response.data.CB_CELL,
            photo: response.data.PHOTOPATH,
            birthday: response.data.CB_DOB,
            anniversary: response.data.CB_DOH,
            office: response.data.O_NAME,
            department: response.data.D_NAME,
            jobtitle: response.data.JOBTITLE,
            group: response.data.CB_GROUP
          };
        }),
        shareReplay(1)
      );
    }

  public getActiveUser(firstname: string = '', lastname: string = ''): Observable<any> {
    const payload = {firstname, lastname};
    return this.http.post<any>(Config.url + '/user/byfullname/', payload )
      .pipe(
        shareReplay(1)
      );
  }

  public getSupervisor(): Observable<any> {
    return this.http.get<any>(Config.url + this.supervisorEndpoint)
      .pipe(
        map( (response) => {
          return {
            userid: response.data.CB_EMP_N,
            firstname: response.data.CB_FNAME,
            lastname: response.data.CB_LNAME
          };
        }),
        shareReplay(1)
      );
  }

  public addAddressChangeRequest(newaddress: Address): Observable<any>{
    const payload = { address: newaddress, employeenumber: this.user._LOGGEDINUSER };
    return this.http.post<any>( Config.url + this.addressChangeEndpoint, payload );
  }

  public updateUserPassword(user: User): Observable<any>{
    return this.http.post<any>(Config.url + this.userEndpoint, user);
  }

}
