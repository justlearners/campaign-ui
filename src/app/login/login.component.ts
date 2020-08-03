import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { DataService } from '.././shared/service/data.service'
import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  errorMessage: string;

  constructor(private nav: NavbarService,private dataService: DataService
    ,private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.loginModel=new LoginModel();
  }
  
  ngAfterViewInit(){
    this.dataService.setScreenName("login");
  }
  onSignin(){
    console.log('onSignin--',this.loginModel);
    if(this.loginService.authenticateUser(this.loginModel)) {
      sessionStorage.setItem('loggedin', 'y');
      this.dataService.setIsUserLoggedIn(true);
      this.router.navigate(['campaign']);
    }
    else {
      this.errorMessage = 'Invalid Credentials';
    }
  }
}
