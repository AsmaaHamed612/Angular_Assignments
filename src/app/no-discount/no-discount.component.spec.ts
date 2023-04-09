import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscountComponent } from './no-discount.component';

describe('NoDiscountComponent', () => {
  let component: NoDiscountComponent;
  let fixture: ComponentFixture<NoDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
