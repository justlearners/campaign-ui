import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { ApiModel } from './config.model';

@Injectable()
export class ConfigService {
    public api: ApiModel = new ApiModel();
   
    constructor(private http: Http, private router: Router) {
    }

}
