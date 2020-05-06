import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactComponentTableComponent } from './artifact-component-table.component';

describe('ArtifactComponentTableComponent', () => {
  let component: ArtifactComponentTableComponent;
  let fixture: ComponentFixture<ArtifactComponentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactComponentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
