import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() ownerName: string;
  @Input() repoName: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  redirectHome() {
    this.router.navigate(['/']);
  }
}
