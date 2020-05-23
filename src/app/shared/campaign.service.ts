import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../app-config/config.service';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';

@Injectable()
export class CampaignService{

    campaigns : Campaign[] = [];

    constructor(
        private http: Http,
        private configService: ConfigService
       ) {
        console.log(this);
    }


    getCampaign(){
        return this.campaigns.slice();        
    }

    getCampaignList(): Observable<Campaign[]> {
        let apiUrl = this.configService.api.url.campaignListUrl;
        //let apiUrl = 'assets/json/dashboard_list_resp.json';
        return this.http.get(apiUrl).pipe(map(res => {
            console.log('res1--',res);
            return res.json();
                }));
    }

    getCampaign1(index:number){
        return this.campaigns[index];
    }

    
}





