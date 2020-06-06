import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  temp = [];
  formDisplay: boolean;


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

            this.startDate = this.formatDate(this.selectedCampaign.startdate);
            this.endDate = this.formatDate(this.selectedCampaign.enddate);
            console.log('start date is - ' + this.startDate);
            console.log('end date is - ' + this.endDate);
          },
          error => {
            console.log('error in campaign details--', error);
            this.router.navigate(['404']);
            //this.showError(error);
          }

        );
        this.configService.getMasterSlotList().subscribe(
          response => {

            this.slotList = response;
            // this.displaySlots = [];
            // this.slotList.filter((slot) => {
            //   this.displaySlots.push(slot.config_value)
            // });
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
    this.temp = this.allBookings.filter((booking) => {
      return this.formatDate(booking.booking_date) == ev
    }).map((resp) => {
      return resp.slot
    });
    console.log("Booked lot id [temp]  --  " + this.temp)

    //  to display available slots
    this.slotList.filter(
      (slot) => {
        if (this.temp.length == 0) {
          this.displaySlots.push(slot.config_value)
        }
        else if (this.temp.length == this.slotList.length) {
          console.log("No slot available")
        }
        else {
          for (let i = 0; i<this.temp.length; i++) {
          console.log(typeof(this.temp[i]))
            if ((this.temp[i]) == slot.id) {
            }
            else
              {
                this.displaySlots.push(slot.config_value)
              }
          }
        }
      });
    console.log("dispalySlots  ---  " + this.displaySlots)
  }

  onSubmit(f: NgForm) {
    //User user=new User(f.name,f.email,f.phone,f.address,f.city,f.country,'admin');
    //Booking booking=new Booking(cid,); 
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

  onExistingUser() {
    this.formDisplay = false;
  }

  onNewUser() {
    this.formDisplay = true;
  }




}
