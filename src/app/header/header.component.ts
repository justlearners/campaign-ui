import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../navbar/navbar.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  headerBrand = "Quick Campaign";
  navDisplay:boolean = true;

  constructor(public nav: NavbarService) {

   }

  ngOnInit(): void {
    
  }

}

