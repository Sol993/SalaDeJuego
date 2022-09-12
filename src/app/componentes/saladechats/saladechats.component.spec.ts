import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladechatsComponent } from './saladechats.component';

describe('SaladechatsComponent', () => {
  let component: SaladechatsComponent;
  let fixture: ComponentFixture<SaladechatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladechatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladechatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
