import { Component, OnInit } from '@angular/core';
import { DataService } from '.././shared/service/data.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.dataService.setScreenName("aboutus");
  }
}
