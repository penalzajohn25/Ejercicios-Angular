import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemDirectiveNgStyleComponent } from './ejem-directive-ng-style.component';

describe('EjemDirectiveNgStyleComponent', () => {
  let component: EjemDirectiveNgStyleComponent;
  let fixture: ComponentFixture<EjemDirectiveNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemDirectiveNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemDirectiveNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
