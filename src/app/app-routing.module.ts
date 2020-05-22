import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignComponent } from './campaign/campaign.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './campaign/campaign-details/booking/booking.component';
import { ScheduleComponent } from './campaign/campaign-details/schedule/schedule.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { CampaignStartComponent } from './campaign/campaign-start/campaign-start.component';


const routes: Routes = [
  {
    path: 'campaign', component: CampaignComponent, children: [
      {path : '' , component : CampaignStartComponent},
      { path: ':id', component: CampaignDetailsComponent },
      { path: ':id/booking', component: BookingComponent },
      { path: ':id/schedule', component: ScheduleComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', redirectTo: "/campaign", pathMatch: 'full' },
  { path: '**', component: CampaignComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
