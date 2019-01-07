import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrarComponent } from './lista-registrar.component';

describe('ListaRegistrarComponent', () => {
  let component: ListaRegistrarComponent;
  let fixture: ComponentFixture<ListaRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
