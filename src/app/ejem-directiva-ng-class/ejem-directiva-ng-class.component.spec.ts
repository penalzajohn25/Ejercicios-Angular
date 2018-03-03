import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemDirectivaNgClassComponent } from './ejem-directiva-ng-class.component';

describe('EjemDirectivaNgClassComponent', () => {
  let component: EjemDirectivaNgClassComponent;
  let fixture: ComponentFixture<EjemDirectivaNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemDirectivaNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemDirectivaNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
