import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcursoComponent } from './dialogcurso.component';

describe('DialogcursoComponent', () => {
  let component: DialogcursoComponent;
  let fixture: ComponentFixture<DialogcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
