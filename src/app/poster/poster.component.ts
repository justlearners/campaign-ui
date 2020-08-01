import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ConfigService } from '../app-config/config.service';
import html2canvas from 'html2canvas';
import {DataService} from '../shared/service/data.service'
import { PosterModel } from './posterform/posterform.model'

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  providers:[ConfigService]
})
export class PosterComponent implements OnInit {

  posterModel: PosterModel;

  apiRootUrl: String;
  @ViewChild('cnvrtToImage') myDiv: ElementRef;

  constructor(private configService: ConfigService,private dataService: DataService) { }

  ngOnInit(): void {
    this.posterModel=new PosterModel();
    this.apiRootUrl=this.configService.api.url.apiRootUrl;
   // console.log('this.apiRootUrl--',this.apiRootUrl);

    this.dataService.getPosterModel().subscribe(posterModel => {
      this.posterModel = posterModel;
      console.log('posterModel in poster component--',posterModel);
    }, err => {
      console.log(err);
    });


  }

convertToImage(){
    console.log('--image--',this.myDiv.nativeElement);
    html2canvas(this.myDiv.nativeElement).then(function(canvas) {
      console.log('canvas.toDataURL()',canvas.toDataURL());
    canvas.toBlob(function(blob){
      // To download directly on browser default 'downloads' location
      let link = document.createElement("a");
      link.download = "poster.png";
      link.href = URL.createObjectURL(blob);
      link.click();
    },'image/png');
    }); 
  }
}
