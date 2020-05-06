import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artifact-components',
  templateUrl: './artifact-components.component.html',
  styleUrls: ['./artifact-components.component.css']
})
export class ArtifactComponentsComponent implements OnInit {
  @Input() artifactMetrics: any;

  constructor() { }

  ngOnInit(): void {
  }

}
