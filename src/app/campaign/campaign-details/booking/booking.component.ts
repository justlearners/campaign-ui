import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Campaign } from 'src/app/shared/campaign.model';
import { CampaignService } from 'src/app/shared/campaign.service';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { UserBookingService } from '../../../shared/userBooking.service';
import { Booking, User } from './booking.model';
import { ConfigService } from '../../../app-config/config.service';
import { SlotModel } from '../../../app-config/config.model';
import { NavbarService } from 'src/app/navbar/navbar.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  cid: number;
  booking: Booking=new Booking();
  selectedCampaign : Campaign=null;
  slotList: SlotModel[];
  allBookings: Booking[];

  constructor(public nav: NavbarService,private userBooking: UserBookingService, private route: ActivatedRoute, private campaignService: CampaignService,
    private schedule: ScheduleService,private configService: ConfigService) {
      
    // schedule.scheduleAdded.subscribe((schedule)=>{
    //   console.log(schedule);
    // })
  }

  ngOnInit(): void {
    this.nav.hide();
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
          this.configService.getMasterSlotList().subscribe(
            response => {
              
              this.slotList = response;
              console.log('this.slotList --',this.slotList);
              }
            );
            this.campaignService.getAllBookings(this.cid).subscribe(
              response => {                
                this.allBookings = response;
                console.log('this.allBookings --',this.allBookings);
                }
              );

      }
    )

  }

  dateChanged(): void {
    console.log("date changed--");
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
