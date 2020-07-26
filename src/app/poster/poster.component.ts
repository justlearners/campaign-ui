import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../app-config/config.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  providers:[ConfigService]
})
export class PosterComponent implements OnInit {


  apiRootUrl: String;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.apiRootUrl=this.configService.api.url.apiRootUrl;
    console.log('this.apiRootUrl--',this.apiRootUrl);
  }

}
