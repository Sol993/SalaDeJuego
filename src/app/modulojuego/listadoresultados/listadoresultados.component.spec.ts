import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoresultadosComponent } from './listadoresultados.component';

describe('ListadoresultadosComponent', () => {
  let component: ListadoresultadosComponent;
  let fixture: ComponentFixture<ListadoresultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoresultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
