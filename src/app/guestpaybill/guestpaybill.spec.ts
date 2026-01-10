import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guestpaybill } from './guestpaybill';

describe('Guestpaybill', () => {
  let component: Guestpaybill;
  let fixture: ComponentFixture<Guestpaybill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guestpaybill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guestpaybill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
