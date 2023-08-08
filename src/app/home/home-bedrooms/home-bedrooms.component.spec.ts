import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBedroomsComponent } from './home-bedrooms.component';

describe('HomeBedroomsComponent', () => {
  let component: HomeBedroomsComponent;
  let fixture: ComponentFixture<HomeBedroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBedroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBedroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
