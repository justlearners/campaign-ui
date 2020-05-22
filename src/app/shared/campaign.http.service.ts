import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserBooking } from './userBooking.model';



@Injectable({ providedIn : "root"})
export class CampaignHttpService{


    baseUrl = "https://campaign-46cdc.firebaseio.com";

    constructor(private http: HttpClient){}


    postBookingData(data: UserBooking){
        this.http.post(this.baseUrl + '/campaign/0/booking.json',data)
        .subscribe(
            (responseData) => {
                console.log(responseData);
            }
        )
    }

    // to get user Data..Not called by any method 
    getBookingData(){
         this.http.get(this.baseUrl+'/campaign/0/booking.json').subscribe(
            (responseData)=>{
                console.log(responseData)
            }
            );        
        
    }

    
    
}