import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridShowTableComponent } from './ag-grid-show-table.component';

describe('AgGridShowTableComponent', () => {
  let component: AgGridShowTableComponent;
  let fixture: ComponentFixture<AgGridShowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridShowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
