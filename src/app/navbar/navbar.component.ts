import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor( public nav: NavbarService ) {}
}