import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() projectMetrics: any;
  @Input() projectErrorMsg: string;
  @Input() ownerName: string;
  @Input() repoName: string;

  constructor() { }

  ngOnInit(): void { }

  openGitHub(): void {
    window.open('https://github.com/' + this.ownerName + '/' + this.repoName);
  }

}
