import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledtradesComponent } from './filledtrades.component';

describe('FilledtradesComponent', () => {
  let component: FilledtradesComponent;
  let fixture: ComponentFixture<FilledtradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledtradesComponent]
    });
    fixture = TestBed.createComponent(FilledtradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
