import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { ApiModel } from './config.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
    public api: ApiModel = new ApiModel();
   
    constructor(private http: Http, private router: Router) {
    }

    getMasterSlotList(){
        let apiUrl = this.api.url.masterSlotListUrl;
        //let apiUrl = 'assets/json/dashboard_list_resp.json';
        return this.http.get(apiUrl).pipe(map(res => {
            console.log('res1--',res);
            return res.json();
                }));       
    }
    getStateList(){
        let apiUrl = this.api.url.stateListUrl;
        apiUrl = apiUrl.replace('{cntryId}', '91');
        //let apiUrl = 'assets/json/dashboard_list_resp.json';
        return this.http.get(apiUrl).pipe(map(res => {
            console.log('res1--',res);
            return res.json();
                }));       
    }
}
