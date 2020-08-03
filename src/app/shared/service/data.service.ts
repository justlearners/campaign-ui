import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { PosterModel } from "../../poster/posterform/posterform.model";

@Injectable()
export class DataService {
  

  private posterModelSource$ = new BehaviorSubject<PosterModel>(null);
  private screenNameSource$ = new BehaviorSubject<string>("login");

  constructor() { }
 

  getPosterModel(): Observable<PosterModel> {
    return this.posterModelSource$.asObservable();
 }

  setPosterModel(posterModel: PosterModel) {
    console.log('setting posterModel--',posterModel);
    this.posterModelSource$.next(posterModel);
}
getScreenName(): Observable<string> {
  return this.screenNameSource$.asObservable();
}

setScreenName(screenName: string) {
  console.log('setting screenName--',screenName);
  this.screenNameSource$.next(screenName);
}

}