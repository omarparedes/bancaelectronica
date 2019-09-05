import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarPagarComponent } from './quitar-pagar.component';

describe('QuitarPagarComponent', () => {
  let component: QuitarPagarComponent;
  let fixture: ComponentFixture<QuitarPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuitarPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
