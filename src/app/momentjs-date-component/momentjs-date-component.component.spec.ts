import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentjsDateComponentComponent } from './momentjs-date-component.component';

describe('MomentjsDateComponentComponent', () => {
  let component: MomentjsDateComponentComponent;
  let fixture: ComponentFixture<MomentjsDateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentjsDateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentjsDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
