import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../.././shared/campaign.service'
import { Campaign } from 'src/app/shared/campaign.model';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaignList:Campaign[];

  constructor( private campaignService : CampaignService) { }

  ngOnInit(): void {
    this.campaignList = this.campaignService.getCampaign();
  }
}
