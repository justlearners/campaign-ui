import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {


  protocol = window.location.protocol;
  hostname = window.location.hostname;


  constructor(public nav: NavbarService) { 
    
  }

  ngOnInit() {  
    this.nav.show();
    console.log("protocol is -- "+this.protocol);
    console.log("hostname is -- "+this.hostname)
  }


}
