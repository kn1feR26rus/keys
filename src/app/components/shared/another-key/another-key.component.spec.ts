import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherKeyComponent } from './another-key.component';

describe('AnotherKeyComponent', () => {
  let component: AnotherKeyComponent;
  let fixture: ComponentFixture<AnotherKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
