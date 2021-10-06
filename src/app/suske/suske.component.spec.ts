import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuskeComponent } from './suske.component';

describe('SuskeComponent', () => {
  let component: SuskeComponent;
  let fixture: ComponentFixture<SuskeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuskeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
