import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectViewComponent} from './project-view/project-view.component';
import {HomeViewComponent} from './home-view/home-view.component';


const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'project/:ownerName/:repoName', component: ProjectViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
