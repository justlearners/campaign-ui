import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../navbar/navbar.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navDisplay:boolean;

  constructor(private navService: NavbarService) { }

  ngOnInit(): void {
 this.navDisplay = this.navService.visible;
  }

}
