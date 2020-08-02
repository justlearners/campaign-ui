import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PosterModel } from '../posterform.model';
import { NgForm } from '@angular/forms';
import {DataService} from '../../../shared/service/data.service'
import html2canvas from 'html2canvas';
import { NavbarService } from 'src/app/navbar/navbar.service';

@Component({
  selector: 'app-posterform',
  templateUrl: './posterform.component.html',
  styleUrls: ['./posterform.component.css']
})
export class PosterformComponent implements OnInit {
  posterModel: PosterModel;
  @ViewChild('cnvrtToImage') myDiv: ElementRef;
  imageErrMessageMain: string;
  imageErrMessageFooter: string;

  constructor(private dataService: DataService,private nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.posterModel=new PosterModel();
  }

  onSubmit(f: NgForm) {
    console.log('onsubmit invoked--',this.posterModel);
    //this.dataService.setPosterModel(this.posterModel);
  }


  convertToImage(){
    console.log('--image--',this.myDiv.nativeElement);
    html2canvas(this.myDiv.nativeElement, {scrollY: -window.scrollY}).then(function(canvas) {
    //console.log('canvas.toDataURL()',canvas.toDataURL());
    canvas.toBlob(function(blob){
      // To download directly on browser default 'downloads' location
      let link = document.createElement("a");
      link.download = "poster.png";
      link.href = URL.createObjectURL(blob);
      link.click();
    },'image/png');
    }); 
  }

  clear(){
    this.posterModel=new PosterModel();
  }


  loadImage(files,section) {
    console.log('loadImage--',section);
    if (files.length === 0)
      return;
     var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
     // this.imageErrMessageMain = "Only images are supported.";
      if(section=='main') 
          this.imageErrMessageMain="Only images are supported.";
        else 
          this.imageErrMessageFooter="Only images are supported.";
      return;
    } else {
      if(section=='main') 
        this.imageErrMessageMain="";
      else 
        this.imageErrMessageFooter="";
    } 
    var reader = new FileReader();
    //this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      if(section=='main')
        this.posterModel.mainImageUrl = reader.result; 
      else if(section=='footer')
        this.posterModel.footerImageUrl = reader.result; 
    }
  }

}
