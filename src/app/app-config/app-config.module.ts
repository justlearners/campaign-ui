import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})
export class AppConfigModule {
    static forRoot() {
        return {
            ngModule: AppConfigModule,
            providers: [ ConfigService ]
        }
    }
}
