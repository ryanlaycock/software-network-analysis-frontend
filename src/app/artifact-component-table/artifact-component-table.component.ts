import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-artifact-component-table',
  templateUrl: './artifact-component-table.component.html',
  styleUrls: ['./artifact-component-table.component.css']
})
export class ArtifactComponentTableComponent implements OnInit, AfterViewInit {
  @Input() typeMetrics: any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['overall_rank', 'name', 'id', 'group', 'page_rank'];
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.typeMetrics;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
