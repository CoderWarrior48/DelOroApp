import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../../DelOroApp/src/app/about/about.component';
import { ResourcesComponent } from '../../../DelOroApp/src/app/resources/resources.component';
import { HomeComponent } from '../../../DelOroApp/src/app/home/home.component';
import { AcademicsComponent } from '../../../DelOroApp/src/app/academics/academics.component';
import { AthleticsComponent } from '../../../DelOroApp/src/app/athletics/athletics.component';
import { ActivitiesComponent } from '../../../DelOroApp/src/app/activities/activities.component';
import { CounselingComponent } from '../../../DelOroApp/src/app/counseling/counseling.component';
import { ContactComponent } from '../../../DelOroApp/src/app/contact/contact.component';
import { MoreComponent } from '../../../DelOroApp/src/app/more/more.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'athletics', component: AthleticsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'more', component: MoreComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
