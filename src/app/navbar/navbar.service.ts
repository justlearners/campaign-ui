import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class NavbarService {
  public visible: boolean;

  visibleOption = new Subject<boolean>()

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { 
    this.visible = true;
    this.visibleOption.next(this.visible);
   }

  toggle() { this.visible = !this.visible; }

}