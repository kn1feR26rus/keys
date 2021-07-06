import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecKeyComponent } from './elec-key.component';

describe('ElecKeyComponent', () => {
  let component: ElecKeyComponent;
  let fixture: ComponentFixture<ElecKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
