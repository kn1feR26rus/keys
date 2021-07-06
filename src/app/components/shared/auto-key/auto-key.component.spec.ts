import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoKeyComponent } from './auto-key.component';

describe('AutoKeyComponent', () => {
  let component: AutoKeyComponent;
  let fixture: ComponentFixture<AutoKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
