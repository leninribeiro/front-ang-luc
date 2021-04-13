import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeMealsComponent } from './lista-de-meals.component';

describe('ListaDeMealsComponent', () => {
  let component: ListaDeMealsComponent;
  let fixture: ComponentFixture<ListaDeMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
