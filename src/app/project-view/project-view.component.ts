import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router';
import {interval} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

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
  public projectErrorMsg: string;
  public artifactErrorMsg: string;
  private cancel: boolean;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.ownerName = this.route.snapshot.paramMap.get('ownerName');
    this.repoName = this.route.snapshot.paramMap.get('repoName');
    const projectRequests = interval(3000)
      .pipe(
        startWith(0),
        switchMap(() => this.projectService.getProjectMetrics(this.ownerName, this.repoName))
      )
      .subscribe(metrics => {
        if (!!metrics.error) {
          this.projectErrorMsg = metrics.error.msg;
          this.projectMetrics = null;
        } else if (!!metrics.msg) {
          console.log(metrics.status);
          if (metrics.status === 'cannot_parse') {
            projectRequests.unsubscribe();
          }
          this.projectErrorMsg = metrics.msg;
          this.projectMetrics = null;
        } else if (!!metrics.Project) {
          this.projectMetrics = metrics;
          this.projectErrorMsg = null;
          this.cancel = true;
          projectRequests.unsubscribe();
        } else {
          this.projectErrorMsg = metrics;
          this.projectMetrics = null;
        }
      });

    const artifactRequests = interval(3000)
      .pipe(
        startWith(0),
        switchMap(() => this.projectService.getArtifacts(this.ownerName, this.repoName))
      )
      .subscribe(metrics => {
        console.log(metrics);
        if (!!metrics.error) {
          this.artifactErrorMsg = metrics.error.msg;
          this.artifactMetrics = null;
          // TODO Improve this
          if (metrics.error.status === 'not_found') {
            artifactRequests.unsubscribe();
          }
        } else if (!!metrics.msg) {
          this.artifactErrorMsg = metrics.msg;
          this.artifactMetrics = null;
        } else if (!!metrics.ProjectStats) {
          this.artifactErrorMsg = null;
          this.artifactMetrics = metrics;
          artifactRequests.unsubscribe();
        } else {
          this.artifactErrorMsg = metrics;
          this.artifactMetrics = null;
        }
      });
  }

}
