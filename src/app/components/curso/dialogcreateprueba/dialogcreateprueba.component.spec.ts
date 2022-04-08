import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcreatepruebaComponent } from './dialogcreateprueba.component';

describe('DialogcreatepruebaComponent', () => {
  let component: DialogcreatepruebaComponent;
  let fixture: ComponentFixture<DialogcreatepruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcreatepruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcreatepruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
