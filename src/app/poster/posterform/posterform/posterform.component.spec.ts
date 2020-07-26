import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterformComponent } from './posterform.component';

describe('PosterformComponent', () => {
  let component: PosterformComponent;
  let fixture: ComponentFixture<PosterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
