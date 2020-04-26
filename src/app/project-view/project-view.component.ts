import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  public ownerName: string;
  public repoName: string;
  public projectMetrics: any;
  public artifactMetrics: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.ownerName = this.route.snapshot.paramMap.get('ownerName');
    this.repoName = this.route.snapshot.paramMap.get('repoName');
    this.projectService.getProjectMetrics(this.ownerName, this.repoName)
      .subscribe(metrics => {
        if (!!metrics) {
          this.projectMetrics = metrics;
        }
      });
    this.projectService.getArtifacts(this.ownerName, this.repoName)
      .subscribe(metrics => {
        if (!!metrics) {
          this.artifactMetrics = metrics;
        }
      });
  }

}
