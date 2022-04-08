import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmiscursosComponent } from './dialogmiscursos.component';

describe('DialogmiscursosComponent', () => {
  let component: DialogmiscursosComponent;
  let fixture: ComponentFixture<DialogmiscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogmiscursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmiscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
