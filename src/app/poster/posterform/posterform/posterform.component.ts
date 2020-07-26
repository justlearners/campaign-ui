import { Component, OnInit } from '@angular/core';
import { PosterModel } from '../posterform.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posterform',
  templateUrl: './posterform.component.html',
  styleUrls: ['./posterform.component.css']
})
export class PosterformComponent implements OnInit {
  posterModel: PosterModel;

  constructor() { }

  ngOnInit(): void {
    this.posterModel=new PosterModel();
  }

  onSubmit(f: NgForm) {
  }

}
