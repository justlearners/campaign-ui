import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/shared/campaign.service';
import { Campaign } from 'src/app/shared/campaign.model';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  selectedIndex : number;
  
  selectedCampaign : Campaign=null;
  apiRootUrl: String;
  startDate: string;
  endDate : string;

  constructor(public nav: NavbarService,private router:Router,private route : ActivatedRoute,private campaignService : CampaignService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.route.params.subscribe(
      (params)=>{
        this.selectedIndex = +params['id'];
        console.log('this.selectedIndex--',this.selectedIndex);
       // this.selectedCampaign = this.campaignService.getCampaign1(this.selectedIndex)
       this.campaignService.getCampaignDetails(this.selectedIndex).subscribe(
        response => {
          console.log('campaign details--',response);
          this.selectedCampaign = response[0];
          console.log('this.selectedCampaign--',this.selectedCampaign);
          this.startDate = this.formatDate(this.selectedCampaign.startdate);
          this.endDate = this.formatDate(this.selectedCampaign.enddate);
          },
          error => {
            console.log('error in campaign details--', error);
            this.router.navigate(['404']);
            //this.showError(error);
          }
        );
        this.apiRootUrl=this.campaignService.getApiRootUrl()+"/";
      }
    );
    
  }
 
  onBooking(){
    this.router.navigate(['booking'],{relativeTo:this.route});
    
  }

  onSchedule(){
    this.router.navigate(['schedule'],{relativeTo:this.route});
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),        
        day = '' + d.getDate(),
        year = d.getFullYear();

     return [day, month, year].join('-');
}
}
