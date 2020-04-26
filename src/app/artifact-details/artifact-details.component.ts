import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-artifact-details',
  templateUrl: './artifact-details.component.html',
  styleUrls: ['./artifact-details.component.css']
})
export class ArtifactDetailsComponent implements OnInit {
  @Input() artifactProjectMetrics: any;
  @Input() ownerName: string;
  @Input() repoName: string;

  constructor(
    public projectService: ProjectService,
  ) { }

  ngOnInit(): void {
  }

}
