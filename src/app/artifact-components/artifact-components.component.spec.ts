import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactComponentsComponent } from './artifact-components.component';

describe('ArtifactComponentsComponent', () => {
  let component: ArtifactComponentsComponent;
  let fixture: ComponentFixture<ArtifactComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
