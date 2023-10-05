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
import { NewsComponent } from '../../../DelOroApp/src/app/news/news.component';
import { EditComponent } from '../../../DelOroApp/src/app/edit/edit.component';
import { SettingsComponent } from '../../../DelOroApp/src/app/settings/settings.component';
import { SignInComponent } from '../../../DelOroApp/src/app/sign-in/sign-in.component';
import { StudyComponent } from '../../../DelOroApp/src/app/study/study.component';
import { FlashcardsComponent } from '../../../DelOroApp/src/app/flashcards/flashcards.component';
import { GamesComponent } from '../../../DelOroApp/src/app/games/games.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'academics', component: AcademicsComponent },
  { path: 'athletics', component: AthleticsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'more', component: MoreComponent },
  { path: 'edit', component: EditComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sign-in', component: SignInComponent },
  { 
  path: 'study', 
  component: StudyComponent, 
  children: [
    {
      path: 'flashcards',
      component: FlashcardsComponent,
    },
    {
      path: 'games',
      component: GamesComponent,
  },
  ]
},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
