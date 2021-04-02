import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StastistiqueComponent } from './stastistique.component';

describe('StastistiqueComponent', () => {
  let component: StastistiqueComponent;
  let fixture: ComponentFixture<StastistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StastistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StastistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
