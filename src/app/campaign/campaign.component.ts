import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {  
    this.nav.show();
  }
}
