import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulojuegoComponent } from './modulojuego.component';

describe('ModulojuegoComponent', () => {
  let component: ModulojuegoComponent;
  let fixture: ComponentFixture<ModulojuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulojuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
