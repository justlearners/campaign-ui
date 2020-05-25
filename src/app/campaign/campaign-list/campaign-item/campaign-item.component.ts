import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/shared/campaign.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {

  @Input('camp') myCampaign:Campaign;
  @Input() index;


  id: number;

  constructor(private router: Router) { 
     console.log(this) };

  ngOnInit(): void {

 this.id = this.index;
  }

  openCampaignInNewWindow(campaign) {
      const url = this.router.serializeUrl(
      this.router.createUrlTree([`/campaignd/${campaign.cid}`])
    );
    window.open(url, '_blank');
  }

}
