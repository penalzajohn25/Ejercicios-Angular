import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemEventBindigComponent } from './ejem-event-bindig.component';

describe('EjemEventBindigComponent', () => {
  let component: EjemEventBindigComponent;
  let fixture: ComponentFixture<EjemEventBindigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemEventBindigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemEventBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
