import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemDirectiveNgifComponent } from './ejem-directive-ngif.component';

describe('EjemDirectiveNgifComponent', () => {
  let component: EjemDirectiveNgifComponent;
  let fixture: ComponentFixture<EjemDirectiveNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemDirectiveNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemDirectiveNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
