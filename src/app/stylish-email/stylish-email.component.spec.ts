import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylishEmailComponent } from './stylish-email.component';

describe('StylishEmailComponent', () => {
  let component: StylishEmailComponent;
  let fixture: ComponentFixture<StylishEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylishEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylishEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
