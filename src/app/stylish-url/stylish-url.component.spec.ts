import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishUrlComponent } from './stylish-url.component';

describe('StylishUrlComponent', () => {
  let component: StylishUrlComponent;
  let fixture: ComponentFixture<StylishUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
