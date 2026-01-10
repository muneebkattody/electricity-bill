import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintstatus } from './complaintstatus';

describe('Complaintstatus', () => {
  let component: Complaintstatus;
  let fixture: ComponentFixture<Complaintstatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintstatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaintstatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
