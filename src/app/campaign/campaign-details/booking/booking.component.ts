import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserBookingService } from '../../../shared/userBooking.service'
import { UserBooking } from 'src/app/shared/userBooking.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CampaignService } from 'src/app/shared/campaign.service';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { Booking, User } from './booking.model';
import { Campaign } from 'src/app/shared/campaign.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  cid: number;
  booking: Booking=new Booking();
  selectedCampaign : Campaign=null;

  constructor(private userBooking: UserBookingService, private route: ActivatedRoute, private campaignService: CampaignService,
    private schedule: ScheduleService) {
      
    // schedule.scheduleAdded.subscribe((schedule)=>{
    //   console.log(schedule);
    // })
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.cid = params['id'];
        this.booking=new Booking();     
        var usr=new User();
        this.booking.usr=usr;
        this.booking.cid=this.cid;
        this.campaignService.getCampaignDetails(this.cid).subscribe(
          response => {
            console.log('campaign details--',response);
            this.selectedCampaign = response[0];
            console.log('this.selectedCampaign--',this.selectedCampaign);
            }
          );
      }
    )

  }

  onSubmit(f: NgForm) {
    //User user=new User(f.name,f.email,f.phone,f.address,f.city,f.country,'admin');
    //Booking booking=new Booking(cid,);
    console.log('this.booking--',this.booking);
    this.campaignService.saveBooking(this.booking).subscribe(
      response => {
        console.log('saveBooking--',response);
        }
      );

    f.onReset();
  }




}
