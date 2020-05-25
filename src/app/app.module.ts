import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CampaignComponent } from './campaign/campaign.component';
import { BookingComponent } from './campaign/campaign-details/booking/booking.component';
import { ScheduleComponent } from './campaign/campaign-details/schedule/schedule.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { CampaignItemComponent } from './campaign/campaign-list/campaign-item/campaign-item.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { CampaignService } from './shared/campaign.service';
import { ScheduleService } from './shared/schedule.service';
import { NavbarService } from './navbar/navbar.service';
import { CampaignStartComponent } from './campaign/campaign-start/campaign-start.component'
import { AppConfigModule } from './app-config/app-config.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampaignComponent,
    BookingComponent,
    ScheduleComponent,
    AboutUsComponent,
    CampaignListComponent,
    CampaignItemComponent,
    CampaignDetailsComponent,
    CampaignStartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppConfigModule.forRoot()
    
  ],
  providers: [CampaignService, ScheduleService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
