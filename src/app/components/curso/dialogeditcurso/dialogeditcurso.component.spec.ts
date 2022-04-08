import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditcursoComponent } from './dialogeditcurso.component';

describe('DialogeditcursoComponent', () => {
  let component: DialogeditcursoComponent;
  let fixture: ComponentFixture<DialogeditcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeditcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
