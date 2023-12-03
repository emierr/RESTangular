/*import { MatDialog } from '@angular/material/dialog';
import { BackendService } from '../backend.service';
//import { Ladok } from '../model/ladok.model';
import { Ladoklist, Ladoklistcolumns } from '../model/ladoklist.model'*/
import { Component } from '@angular/core';
//import { ViewTransitionService } from '@ng-web-apis/view-transition';
//import { MatTableDataSource } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-registrera-resultat',
  templateUrl: './registrera-resultat.component.html',
  styleUrl: './registrera-resultat.component.css',
})
export class RegistreraResultatComponent {

 /* displayedColumns: string[] = Ladoklistcolumns.map((col: { key: any; }) => col.key);
  columnsSchema: Object = Ladoklistcolumns;
  dataSource = new MatTableDataSource<Ladoklist, MatPaginator>();

  // public ladoktabell: any[] = [{ HTMLDataListElement: this.ladoklist }]; 

  constructor (
    private BackendService: BackendService,
    public dialog: MatDialog
    ) {}
  
  SubscribeLadokList(){
    this.BackendService.getLadokList().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }
// Hämtar ladoklist 
  Filter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  
  }
  EditRow(row: Ladoklist){
    this.BackendService.UpdateResult(row).subscribe(() => row.isEdit = false);
  } */
}
