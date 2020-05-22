import { Injectable } from '@angular/core';
import { UserBooking } from './userBooking.model';
import { Subject } from 'rxjs';

import{CampaignHttpService} from '../shared/campaign.http.service'

@Injectable({
    providedIn: 'root',
})
export class UserBookingService {

    constructor(private httpService : CampaignHttpService){}

    userAdded = new Subject<UserBooking[]>();

    users: UserBooking[] = [
            //   new UserBooking('Namokar Path','Joe','GH902','Ghaziabad','joe@joe.com',9876,'2020-05-25','1'),
            //   new UserBooking('Namokar Path','tim','I902','Delhi','tim@tim.com',1234,'2020-05-22','2')
    ]


    addUser(user: UserBooking) {
        // this.users.push(user);
        // this.userAdded.next(this.users.slice());
        this.httpService.postBookingData(user);
        //this.httpService.getBookingData();
        //this.getUserData();
    }

    getUser() {
        return this.users.slice();
    }


   

    

}