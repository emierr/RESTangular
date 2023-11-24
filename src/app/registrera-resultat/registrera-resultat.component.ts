import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../backend.service';
import { Ladok } from '../model/ladok.model';
import { Ladoklist, Ladoklistcolumns } from '../model/ladoklist.model';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ViewTransitionService } from '@ng-web-apis/view-transition';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'RregistreRaresultat',
  templateUrl: './registrera-resultat.component.html',
  styleUrl: './registrera-resultat.component.css',
})
export class RegistreraResultatComponent {
  private viewTransitionService: ViewTransitionService;

  displayedColumns: string[] = Ladoklistcolumns.map((col) => col.key);
  columnsSchema: any = Ladoklistcolumns;
  dataSource = new MatTableDataSource<Ladoklist, MatPaginator>();

  public ladoktabell: any[] = [{ HTMLDataListElement: this.ladoklist }];
  constructor(
    private ladoklist: Ladoklist,
    private cdr: ChangeDetectorRef,
    service: ViewTransitionService,
    private BackendService: BackendService,
    public dialog: MatDialog
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
// Hämtar ladoklist 
  ngOnInit() {
    this.BackendService.getLadokList().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
}
