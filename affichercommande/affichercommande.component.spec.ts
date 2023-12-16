import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichercommandeComponent } from './affichercommande.component';

describe('AffichercommandeComponent', () => {
  let component: AffichercommandeComponent;
  let fixture: ComponentFixture<AffichercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichercommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
