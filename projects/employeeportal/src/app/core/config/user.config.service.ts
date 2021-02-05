import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { sampleConfig } from '../config/user.config';
import { UserConfig } from '../models/user.config';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

    private readonly url: string = environment.userConfigURL;
    private config: UserConfig;

    constructor(private http: HttpClient) {}

    load(): any {
        console.log(environment);
        if ( environment.envName === 'mock' ){
            return this.config = sampleConfig;
        }else{
            return this.loadUserConfig();
        }
    }

    loadUserConfig(): Promise<any> {
        return this.http.get<UserConfig>(this.url)
            .toPromise()
            .then(
                config => {
                  this.config = config;
                  return config;
                }
            );
    }

    getUserConfig(): UserConfig {
        return this.config;
    }
}
