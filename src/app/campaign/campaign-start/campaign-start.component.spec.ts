import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignStartComponent } from './campaign-start.component';

describe('CampaignStartComponent', () => {
  let component: CampaignStartComponent;
  let fixture: ComponentFixture<CampaignStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
