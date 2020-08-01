import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor( public nav: NavbarService,private router: Router ) {}

  openPosterInNewWindow() {
    const url = this.router.serializeUrl(
    this.router.createUrlTree([`/poster`])
  );
  window.open(url, '_blank');
}

openPosterForm() {
    this.router.navigate([`posterform`]);
}

openPosterFormInNewWindow() {
  const url = this.router.serializeUrl(
  this.router.createUrlTree([`/posterform`])
);
window.open(url, '_blank');
}

}