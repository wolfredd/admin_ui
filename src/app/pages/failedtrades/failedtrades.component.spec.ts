import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedtradesComponent } from './failedtrades.component';

describe('FailedtradesComponent', () => {
  let component: FailedtradesComponent;
  let fixture: ComponentFixture<FailedtradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailedtradesComponent]
    });
    fixture = TestBed.createComponent(FailedtradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
