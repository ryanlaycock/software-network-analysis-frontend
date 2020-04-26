import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponentTableComponent } from './project-component-table.component';

describe('ProjectComponentTableComponent', () => {
  let component: ProjectComponentTableComponent;
  let fixture: ComponentFixture<ProjectComponentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
