import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignComponent } from './campaign/campaign.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { BookingComponent } from './campaign/campaign-details/booking/booking.component';
import { ScheduleComponent } from './campaign/campaign-details/schedule/schedule.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { CampaignStartComponent } from './campaign/campaign-start/campaign-start.component';
import { PosterComponent } from './poster/poster.component';
import { PosterformComponent } from './poster/posterform/posterform/posterform.component';
import { LoginComponent } from './login/login.component';
import { DirectAccessGuard } from './shared/service/access.guard';

const routes: Routes = [
  {
    path: 'campaign', component: CampaignComponent,  canActivate: [DirectAccessGuard], children: [
     // {path : '' , component : PageNotFoundComponent},
      { path: ':id', component: CampaignDetailsComponent },
      { path: ':id/booking', component: BookingComponent },
      { path: ':id/schedule', component: ScheduleComponent }
     
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent,  canActivate: [DirectAccessGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: 'poster', component: PosterComponent,  canActivate: [DirectAccessGuard] },
  { path: 'posterform', component: PosterformComponent,  canActivate: [DirectAccessGuard] },
 // { path: '', redirectTo: "/campaign", pathMatch: 'full' },
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
