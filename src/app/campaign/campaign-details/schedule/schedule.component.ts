import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScheduleService } from '../../../shared/schedule.service'
import { Schedule } from 'src/app/shared/schedule.model';
import{CampaignService} from '../../../shared/campaign.service'
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Booking } from '../booking/booking.model';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit,OnDestroy {

  
  iChangeSchedule: Subscription;
  cid : number; 
  allBookings : Booking[];
  date :string;


  constructor(private scheduleService: ScheduleService, private campaignService:CampaignService,
    private route:ActivatedRoute ,private nav:NavbarService) {} 
    
   

  ngOnInit(): void {
    this.nav.hide(); 

   this.route.params.subscribe(
     (param :Params) => {
      this.cid = param['id']
     });   

       this.iChangeSchedule = this.campaignService.getAllBookings(this.cid).subscribe(
        response => {
          this.allBookings = response;
          console.log('this.allBookings --', this.allBookings);
          this.allBookings.map((value)=>{
            value.booking_date = this.formatDate(value.booking_date)})
          
        });
   
      
      
   

  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),        
        day = '' + d.getDate(),
        year = d.getFullYear();

     return [day, month, year].join('-');
}
  ngOnDestroy(){
    this.iChangeSchedule.unsubscribe();
  }

}


    




