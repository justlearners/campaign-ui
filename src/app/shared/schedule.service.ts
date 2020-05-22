import { Injectable, OnDestroy } from '@angular/core';
import { Schedule } from './schedule.model';
import { UserBookingService } from './userBooking.service'
import { Subject, Subscription } from 'rxjs';
import { UserBooking } from './userBooking.model';
import {CampaignHttpService} from '../shared/campaign.http.service'

@Injectable()
export class ScheduleService implements OnDestroy {

    scheduleAdded = new Subject<Schedule[]>()
    iChangeUser : Subscription;
    schedule: Schedule;

    scheduleList: Schedule[] = [];

    constructor(private userBooking: UserBookingService, private httpService : CampaignHttpService ) {

        this.iChangeUser = userBooking.userAdded.subscribe(
            (userList: UserBooking[]) => {
                this.scheduleList = userList.filter(
                    (user) => {
                        this.schedule = new Schedule('user.campaignName', 'user.date', 'user.timeSlot', 'user.name', 'user.city');
                        this.scheduleList.push(this.schedule);
                        this.scheduleAdded.next(this.scheduleList);
                        
                    }
                )

            }
        )
    }


  


    // getUserData(){
    //     this.httpService.getBookingData().subscribe(
    //         (responseData)=>{
                
    //             // this.userAdded.next(this.users.slice());

    //             console.log( JSON.parse('responseData'));
        
    //         }
    //     )
    // }
    
  
    ngOnDestroy(){
        this.iChangeUser.unsubscribe();
    }



}