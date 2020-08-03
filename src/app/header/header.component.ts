import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {NavbarService} from '../navbar/navbar.service'
import { DataService } from '.././shared/service/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  headerBrand = "Quick Campaign";
  navDisplay:boolean = true;
  screenName: string;

  constructor(public nav: NavbarService, private dataService: DataService,private cd: ChangeDetectorRef) {

   }

  ngOnInit(): void {
    this.dataService.getScreenName().subscribe(screenName => {
      this.screenName = screenName;
      this.cd.detectChanges();
      console.log('screenName in HeaderComponent--',screenName);
    }, err => {
      console.log(err);
    });
  }

}

