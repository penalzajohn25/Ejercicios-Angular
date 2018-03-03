import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemNgforObjetosComponent } from './ejem-ngfor-objetos.component';

describe('EjemNgforObjetosComponent', () => {
  let component: EjemNgforObjetosComponent;
  let fixture: ComponentFixture<EjemNgforObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemNgforObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemNgforObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
