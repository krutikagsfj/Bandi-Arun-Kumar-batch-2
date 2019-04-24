import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecomComponent } from './mobilecom.component';

describe('MobilecomComponent', () => {
  let component: MobilecomComponent;
  let fixture: ComponentFixture<MobilecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
