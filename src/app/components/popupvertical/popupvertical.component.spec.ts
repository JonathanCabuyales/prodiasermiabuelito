import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupverticalComponent } from './popupvertical.component';

describe('PopupverticalComponent', () => {
  let component: PopupverticalComponent;
  let fixture: ComponentFixture<PopupverticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupverticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
