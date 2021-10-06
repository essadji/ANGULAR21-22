import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiskeComponent } from './wiske.component';

describe('WiskeComponent', () => {
  let component: WiskeComponent;
  let fixture: ComponentFixture<WiskeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiskeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
