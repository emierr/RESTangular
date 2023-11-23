import { BackendService } from '../backend.service';
import { Ladok } from '../model/ladok.model';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ViewTransitionService } from '@ng-web-apis/view-transition';

@Component({
  selector: 'app-root',
  templateUrl: './registrera-resultat.component.html',
  styleUrl: './registrera-resultat.component.css',
})
export class RegistreraResultatComponent {
  private viewTransitionService: ViewTransitionService;

  constructor(
    private cdr: ChangeDetectorRef,
    service: ViewTransitionService,
    private BackendService: BackendService
  ) {
    this.viewTransitionService = service;
  }

  private showMyComponent(): void {
    this.viewTransitionService
      .startViewTransition(() => {
        //this.showMyComponent = true;
        // You might want to call detectChanges to update the DOM inside startViewTransition callback
        this.cdr.detectChanges();
      })
      .subscribe();
  }
}

/*setResult(): void{
    this.BackendService.setResult({
      ladokId: -1, 
      canvasId: ,

    }).subscribe
  } */
