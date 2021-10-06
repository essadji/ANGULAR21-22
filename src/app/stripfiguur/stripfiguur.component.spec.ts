import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripfiguurComponent } from './stripfiguur.component';

describe('StripfiguurComponent', () => {
  let component: StripfiguurComponent;
  let fixture: ComponentFixture<StripfiguurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripfiguurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripfiguurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
