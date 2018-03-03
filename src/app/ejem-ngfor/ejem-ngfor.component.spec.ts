import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemNgforComponent } from './ejem-ngfor.component';

describe('EjemNgforComponent', () => {
  let component: EjemNgforComponent;
  let fixture: ComponentFixture<EjemNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
