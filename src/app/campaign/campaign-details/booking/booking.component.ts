import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserBookingService } from '../../../shared/userBooking.service'
import { UserBooking } from 'src/app/shared/userBooking.model';
import { ActivatedRoute, Params } from '@angular/router';
import { CampaignService } from 'src/app/shared/campaign.service';
import { ScheduleService } from 'src/app/shared/schedule.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  sDate: string;
  eDate: string;
  index: number;


  constructor(private userBooking: UserBookingService, private route: ActivatedRoute, private campaignService: CampaignService,
    private schedule: ScheduleService) {
    // schedule.scheduleAdded.subscribe((schedule)=>{
    //   console.log(schedule);
    // })
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];

        this.sDate = this.campaignService.getCampaign1(this.index).startDate;
        this.eDate = this.campaignService.getCampaign1(this.index).endDate;
      }
    )

  }

  onSubmit(f: NgForm) {
    f.value.campaignName = this.campaignService.getCampaign1(this.index).name
    this.userBooking.addUser(f.value);
    f.onReset();
  }




}
