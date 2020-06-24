import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingChildComponent } from './landing-child.component';

describe('LandingChildComponent', () => {
  let component: LandingChildComponent;
  let fixture: ComponentFixture<LandingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
