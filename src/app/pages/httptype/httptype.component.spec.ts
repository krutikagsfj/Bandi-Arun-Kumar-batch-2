import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptypeComponent } from './httptype.component';

describe('HttptypeComponent', () => {
  let component: HttptypeComponent;
  let fixture: ComponentFixture<HttptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
