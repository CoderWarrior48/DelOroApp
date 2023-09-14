import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../../DelOroApp/src/app/about/about.component';
import { ResourcesComponent } from '../../../DelOroApp/src/app/resources/resources.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about'},
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
