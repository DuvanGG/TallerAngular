import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomiaComponent } from './momia.component';

describe('MomiaComponent', () => {
  let component: MomiaComponent;
  let fixture: ComponentFixture<MomiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
