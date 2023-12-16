import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteMembreComponent } from './compte-membre.component';

describe('CompteMembreComponent', () => {
  let component: CompteMembreComponent;
  let fixture: ComponentFixture<CompteMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
