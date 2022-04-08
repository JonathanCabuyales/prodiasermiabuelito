import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcreatecursoComponent } from './dialogcreatecurso.component';

describe('DialogcreatecursoComponent', () => {
  let component: DialogcreatecursoComponent;
  let fixture: ComponentFixture<DialogcreatecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcreatecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcreatecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
