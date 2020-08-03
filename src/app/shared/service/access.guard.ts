import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from './data.service';

@Injectable()
export class DirectAccessGuard implements CanActivate {
  
  isUserLoggedIn: boolean=false;
  
  constructor(private router: Router,private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isUserLoggedin().subscribe(isUserLoggedIn => {
      this.isUserLoggedIn = isUserLoggedIn;
      //this.cd.detectChanges();
      console.log('isUserLoggedIn in DirectAccessGuard--',isUserLoggedIn);
    }, err => {
      console.log(err);
    });
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // If the previous URL was blank, then the user is directly accessing this page
    var loggedIn=sessionStorage.getItem('loggedin');
    console.log('loggedIn--',loggedIn);
    //if (this.router.url === '/') {
    if(loggedIn!='y') {
        this.router.navigate(['']); // Navigate away to some other page
        return false;
    }
    return true;
  }
}