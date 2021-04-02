import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValidationDepotComponent } from './list-validation-depot.component';

describe('ListValidationDepotComponent', () => {
  let component: ListValidationDepotComponent;
  let fixture: ComponentFixture<ListValidationDepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListValidationDepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValidationDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
