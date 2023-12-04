import { BackendService } from '../backend.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Canvaslist } from '../canvaslist';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-registrera-resultat',
  templateUrl: './registrera-resultat.component.html',
  styleUrls: ['./registrera-resultat.component.css']
})
export class RegistreraResultatComponent implements OnInit{

  @ViewChild('canvasListForm', { static: false})
  canvasListForm: NgForm;

  canvasListData: Canvaslist;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['listId', 'fName', 'eNamn', 'studentAnvandare', 'personNr', 'kursKod', 'datum', 'typ', 'aktiv', 'modulId', 'kursId', 'omdome', 'benamning', 'betyg', 'status'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  isEditMode = false;

  constructor (
    private BackendService: BackendService
    ) {this.canvasListData = {} as Canvaslist;}
  
ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.getAllCanvasList();
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
getAllCanvasList() {
  this.BackendService.getCanvasList().subscribe((response: any) => {
    this.dataSource.data = response;
  });
}
editItem(element: any) {
  this.canvasListData = _.cloneDeep(element);
  this.isEditMode = true;
}
cancelEdit() {
  this.isEditMode = false;
  this.canvasListForm.resetForm();
}

updateCanvasList() {
  this.BackendService.UpdateResult(this.canvasListData.listId, this.canvasListData).subscribe((response: any) => {
   this.getAllCanvasList()
    })
    this.cancelEdit()

  }

onSubmit() {
  if (this.canvasListForm.form.valid) {
    if (this.isEditMode)
      this.updateCanvasList()
  } else {
    console.log('Enter valid data!');
  }
}
}

