import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledtradesComponent } from './cancelledtrades.component';

describe('CancelledtradesComponent', () => {
  let component: CancelledtradesComponent;
  let fixture: ComponentFixture<CancelledtradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledtradesComponent]
    });
    fixture = TestBed.createComponent(CancelledtradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
