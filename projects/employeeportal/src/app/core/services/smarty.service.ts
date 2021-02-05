import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../../core/models/address';
import { SmartyResponse } from '../models/smarty.response';
import { SmartyConfig } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})

export class SmartyService {

  constructor(
    private http: HttpClient
  ) {}

  public getSingleAddress(address: Address): Observable<SmartyResponse[]> {
    const options = {
      params: new HttpParams()
        .set('key', SmartyConfig.key)
        .set('street', address.address)
        .set('street2', address.address2)
        .set('city', address.city)
        .set('state', address.state)
        .set('zipcode', address.zipcode)
    };
    return this.http.get<SmartyResponse[]>(SmartyConfig.url, options);
  }
}
