import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelbalkComponent } from './titelbalk.component';

describe('TitelbalkComponent', () => {
  let component: TitelbalkComponent;
  let fixture: ComponentFixture<TitelbalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitelbalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitelbalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
