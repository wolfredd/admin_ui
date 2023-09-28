import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtradesComponent } from './pendingtrades.component';

describe('PendingtradesComponent', () => {
  let component: PendingtradesComponent;
  let fixture: ComponentFixture<PendingtradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingtradesComponent]
    });
    fixture = TestBed.createComponent(PendingtradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
