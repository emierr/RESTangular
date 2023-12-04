import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from './backend.service';
import { MatTableDataSource } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: "LTUServices";
 /* displayedColumns: string[] = Canvaslistcolumns.map((col: { key: string; }) => col.key);
  columnsSchema: any = Canvaslistcolumns;
  dataSource = new MatTableDataSource<Canvaslist>();

  // public ladoktabell: any[] = [{ HTMLDataListElement: this.ladoklist }]; 

  constructor (
    private BackendService: BackendService,
    public dialog: MatDialog
    ) {}
    title = 'LTUService'; 

  ngOnInit(){
    this.BackendService.getCanvasList().subscribe((res: any) => {
      this.dataSource.data = res;
    });
      
  }
// Hämtar ladoklist 
  applyFilter(event: any) {
    event = event.trim(); // Remove whitespace
    event = event.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = event.target.value;
  
  }
  EditRow(row: Canvaslist){
    this.BackendService.UpdateResult(row).subscribe(() => row.isEdit = false);
  }*/ 
} 
