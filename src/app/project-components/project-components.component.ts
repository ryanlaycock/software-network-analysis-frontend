import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-project-components',
  templateUrl: './project-components.component.html',
  styleUrls: ['./project-components.component.css']
})
export class ProjectComponentsComponent implements OnInit {
  @Input() projectMetrics: any;

  constructor() { }

  ngOnInit(): void {

  }

}
