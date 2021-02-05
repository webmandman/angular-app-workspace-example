import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressStaticmapComponent } from './address-staticmap.component';

describe('AddressStaticmapComponent', () => {
  let component: AddressStaticmapComponent;
  let fixture: ComponentFixture<AddressStaticmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressStaticmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressStaticmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
