import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {LoginModel} from './login.model'


@Injectable()
export class LoginService {
    //private visionModel: VisionModel;

    constructor(
        private httpClient: HttpClient ) {
    }
    authenticateUser(loginModel: LoginModel){
        var uid=loginModel.loginId;
        var password=loginModel.password;
        var validLogin=true;
        if(uid=='yuvamahasabha@gmail.com' && password=='mahasabha') {
            validLogin=true;
        }else if(uid=='admin' && password=='adminq1w2e3') {
            validLogin=true;
        }else{
            validLogin=false;
        }
        return validLogin;
    }    
}