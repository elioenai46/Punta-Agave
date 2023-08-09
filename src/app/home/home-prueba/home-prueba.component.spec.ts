import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePruebaComponent } from './home-prueba.component';

describe('HomePruebaComponent', () => {
  let component: HomePruebaComponent;
  let fixture: ComponentFixture<HomePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
