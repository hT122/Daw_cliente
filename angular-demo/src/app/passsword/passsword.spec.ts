import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passsword } from './passsword';

describe('Passsword', () => {
  let component: Passsword;
  let fixture: ComponentFixture<Passsword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passsword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passsword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
