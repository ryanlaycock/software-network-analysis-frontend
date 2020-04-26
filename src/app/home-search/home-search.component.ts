import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  searchForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.searchForm = this.formBuilder.group({
      owner: '',
      repo: ''
    });
  }

  ngOnInit(): void {
  }

  search(inputData) {
    console.log(inputData);
    const redirect = '/project/' + inputData.owner + '/' + inputData.repo;
    this.router.navigate([redirect]);
  }
}
