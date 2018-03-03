import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemTwoWayBindingComponent } from './ejem-two-way-binding.component';

describe('EjemTwoWayBindingComponent', () => {
  let component: EjemTwoWayBindingComponent;
  let fixture: ComponentFixture<EjemTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
