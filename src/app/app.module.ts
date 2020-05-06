import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ArtifactDetailsComponent } from './artifact-details/artifact-details.component';
import { ArtifactComponentsComponent } from './artifact-components/artifact-components.component';
import { ProjectComponentsComponent } from './project-components/project-components.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectComponentTableComponent } from './project-component-table/project-component-table.component';
import { ArtifactComponentTableComponent } from './artifact-component-table/artifact-component-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProjectViewComponent,
    ProjectDetailsComponent,
    ArtifactDetailsComponent,
    ArtifactComponentsComponent,
    ProjectComponentsComponent,
    HomeSearchComponent,
    ProjectComponentTableComponent,
    ArtifactComponentTableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
