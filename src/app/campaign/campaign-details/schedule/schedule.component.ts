import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScheduleService } from '../../../shared/schedule.service'
import { Schedule } from 'src/app/shared/schedule.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit,OnDestroy {

  scheduleList: Schedule[];
  iChangeSchedule: Subscription;

  constructor(private scheduleService: ScheduleService) {} 
    
   

  ngOnInit(): void {
   this.iChangeSchedule = this.scheduleService.scheduleAdded.subscribe(
     (schedule : Schedule[] )=>{
      this.scheduleList = schedule;
     }
   );
  }

  ngOnDestroy(){
    this.iChangeSchedule.unsubscribe();
  }

}


    




