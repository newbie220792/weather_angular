import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUserChangeComponent } from './confirm-user-change.component';

describe('ConfirmUserChangeComponent', () => {
  let component: ConfirmUserChangeComponent;
  let fixture: ComponentFixture<ConfirmUserChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmUserChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmUserChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
