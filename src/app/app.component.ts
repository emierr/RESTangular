import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
//import { User, UserColumns } from './model/user';
import { BackendService } from './backend.service';
import { Ladoklist, Ladoklistcolumns } from './model/ladoklist.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
