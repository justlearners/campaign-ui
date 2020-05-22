import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/shared/campaign.model';


@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.css']
})
export class CampaignItemComponent implements OnInit {

  @Input('camp') myCampaign:Campaign;
  @Input() index;


  id: number;

  constructor() { }

  ngOnInit(): void {

 this.id = this.index;
  }

}
