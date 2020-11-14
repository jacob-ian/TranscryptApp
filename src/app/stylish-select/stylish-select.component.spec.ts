import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishSelectComponent } from './stylish-select.component';

describe('StylishSelectComponent', () => {
  let component: StylishSelectComponent;
  let fixture: ComponentFixture<StylishSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
