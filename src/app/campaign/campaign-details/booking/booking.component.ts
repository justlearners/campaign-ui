import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Campaign } from 'src/app/shared/campaign.model';
import { CampaignService } from 'src/app/shared/campaign.service';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { UserBookingService } from '../../../shared/userBooking.service';
import { Booking, User } from './booking.model';
import { ConfigService } from '../../../app-config/config.service';
import { SlotModel, StateModel } from '../../../app-config/config.model';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  cid: number;
  booking: Booking = new Booking();
  selectedCampaign: Campaign = null;
  slotList: SlotModel[];
  stateList: StateModel[];
  allBookings: Booking[];
  startDate: string;
  endDate: string;
  displaySlots = [];
  formDisplay: boolean;
  currentDate: Date;




  constructor(
    private toastr: ToastrService,
    public nav: NavbarService, private userBooking: UserBookingService,
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private schedule: ScheduleService, private configService: ConfigService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.nav.hide();
    this.formDisplay = false;
    this.currentDate = new Date();
    this.route.params.subscribe(
      (params: Params) => {
        this.cid = params['id'];
        this.booking = new Booking();
        var usr = new User();
        this.booking.usr = usr;
        this.booking.cid = this.cid;
        this.campaignService.getCampaignDetails(this.cid).subscribe(
          response => {
            console.log('campaign details--', response);
            this.selectedCampaign = response[0];
            console.log('this.selectedCampaign--', this.selectedCampaign);

            //to get start and end date
            this.startDate = this.onMinDate(this.selectedCampaign.startdate, this.currentDate);
            this.endDate = this.formatDate(this.selectedCampaign.enddate);
            console.log('start date is - ' + this.startDate);
            console.log('end date is - ' + this.endDate);
          },
          error => {
            console.log('error in campaign details--', error);
            this.router.navigate(['404']);

          }

        );
        this.configService.getMasterSlotList().subscribe(
          response => {

            this.slotList = response;
            console.log('this.slotList --', this.slotList);
          }
        );
        this.configService.getStateList().subscribe(
          response => {
            this.stateList = response;
            console.log('this.stateList --', this.stateList);
          }
        );
        this.campaignService.getAllBookings(this.cid).subscribe(
          response => {
            this.allBookings = response;
            console.log('this.allBookings --', this.allBookings);
          }
        );
      }
    )
  }

  dateChanged(ev) {
    this.displaySlots = [];
    console.log("date changed -- " + ev);

    // to get id of booked slots
    var bookedSlots = this.allBookings.filter((booking) => {
      return this.formatDate(booking.booking_date) == ev
    }).map((resp) => {
      return resp.slot
    });
    console.log("Booked slots  --  " + bookedSlots)

    if (bookedSlots.length == this.slotList.length) {
      console.log("No slot available")
    } else {
      for (var indx in this.slotList) {
        var slot = this.slotList[indx];
        if (!this.chkIfSlotBooked(slot.id, bookedSlots)) {
          this.displaySlots.push(slot.config_value);
        }
      }
    }
    console.log("dispalySlots  ---  " + this.displaySlots)
  }
  // to display available slots
  chkIfSlotBooked(slotId, slotArry) {
    var slotExists = false;
    for (var indx in slotArry) {
      if (slotArry[indx] == slotId) {
        slotExists = true;
      }
    }
    return slotExists;
  }




  onSubmit(f: NgForm) {
    
    this.booking.slot = this.slotList.filter(
      slot => {
        return slot.config_value == this.booking.slot
      })[0].id;

    console.log('this.booking--', this.booking);
    this.campaignService.saveBooking(this.booking).subscribe(
      response => {
        console.log('saveBooking--', response);
        this.showSuccess('Booking Saved');
        f.onReset();
        this.router.navigate(["/campaign", this.cid], { relativeTo: this.route });
      },
      error => {
        console.log('error in save--', error);
        this.showError(error);
      }
    );


  }

  showError(error) {
    if (error.message.includes("DUP")) {
      this.toastr.error('Slot not available. Please select a new one.');
    } else {
      this.toastr.error(error.error);
    }

  }
  showSuccess(msg) {
    this.toastr.success(msg);
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (+month < 10) {
      month = '0' + month
    }
    if (+day < 10) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  onExistingUser(f: NgForm) {
    f.onReset();
    this.formDisplay = false;
  }

  onNewUser() {
    this.formDisplay = true;
  }



  onMinDate(s, c) {
    let sDate = Date.parse(this.formatDate(s));
    let cDate = Date.parse(this.formatDate(c));
    let minDate = (cDate >= sDate) ? cDate : sDate;

    return this.formatDate(new Date(minDate))
  }




}
