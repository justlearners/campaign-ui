import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/shared/campaign.service';
import { Campaign } from 'src/app/shared/campaign.model';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  selectedIndex : number;
  
  selectedCampaign : Campaign;


  constructor(private router:Router,private route : ActivatedRoute,private campaignService : CampaignService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.selectedIndex = +params['id'];
      //  console.log(this.selectedIndex);
        this.selectedCampaign = this.campaignService.getCampaign1(this.selectedIndex)
        //console.log(this.selectedCampaign);
        
      }
    );
  }
 
  onBooking(){
    this.router.navigate(['booking'],{relativeTo:this.route});
    
  }

  onSchedule(){
    this.router.navigate(['schedule'],{relativeTo:this.route});
  }
}
