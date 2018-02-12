import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximalistTableComponent } from './maximalist-table.component';

describe('MaximalistTableComponent', () => {
  let component: MaximalistTableComponent;
  let fixture: ComponentFixture<MaximalistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximalistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximalistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
