import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreraResultatComponent } from './registrera-resultat.component';

describe('RegistreraResultatComponent', () => {
  let component: RegistreraResultatComponent;
  let fixture: ComponentFixture<RegistreraResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistreraResultatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistreraResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
