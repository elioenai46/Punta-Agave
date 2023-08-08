import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKnownComponent } from './home-known.component';

describe('HomeKnownComponent', () => {
  let component: HomeKnownComponent;
  let fixture: ComponentFixture<HomeKnownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKnownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKnownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
