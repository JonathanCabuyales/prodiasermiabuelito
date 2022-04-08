import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcursosComponent } from './dialogcursos.component';

describe('DialogcursosComponent', () => {
  let component: DialogcursosComponent;
  let fixture: ComponentFixture<DialogcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
