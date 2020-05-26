import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HombloboComponent } from './homblobo.component';

describe('HombloboComponent', () => {
  let component: HombloboComponent;
  let fixture: ComponentFixture<HombloboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HombloboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HombloboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
