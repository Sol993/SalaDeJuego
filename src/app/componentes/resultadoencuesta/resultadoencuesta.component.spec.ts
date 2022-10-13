import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoencuestaComponent } from './resultadoencuesta.component';

describe('ResultadoencuestaComponent', () => {
  let component: ResultadoencuestaComponent;
  let fixture: ComponentFixture<ResultadoencuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoencuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoencuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
