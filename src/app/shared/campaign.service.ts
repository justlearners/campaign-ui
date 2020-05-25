import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';
import { Booking } from '../campaign/campaign-details/booking/booking.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../app-config/config.service';
import { Http, Response, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable()
export class CampaignService{

    campaigns : Campaign[] = [];

    constructor(
        private http: Http,
        private httpClient: HttpClient,
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

    getCampaignDetails(cid){
        let apiUrl = this.configService.api.url.campaignDetailsUrl;
        apiUrl = apiUrl.replace('{cid}', cid);
        //let apiUrl = 'assets/json/dashboard_list_resp.json';
        return this.http.get(apiUrl).pipe(map(res => {
            console.log('res1--',res);
            return res.json();
                }));       
    }

    saveBooking(booking: Booking){
        let apiUrl = this.configService.api.url.saveBookingUrl;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })};       
      console.log('booking--',JSON.stringify(booking));
       const formData = new FormData();
       formData.append('booking', JSON.stringify(booking));
       return this.httpClient.post(apiUrl,JSON.stringify(booking),httpOptions).pipe(map(res => {
            console.log('res1--',res);
            return res;
                }));       
    }

    getApiRootUrl(){
        return this.configService.api.url.apiRootUrl;        
    }

    getCampaign1(index:number){
        return this.campaigns[index];
    }

    
}





