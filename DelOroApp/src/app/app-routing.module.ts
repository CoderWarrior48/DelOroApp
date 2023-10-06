import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../../DelOroApp/src/app/pages/about/about.component';
import { ResourcesComponent } from '../../../DelOroApp/src/app/pages/resources/resources.component';
import { HomeComponent } from '../../../DelOroApp/src/app/pages/home/home.component';
import { AcademicsComponent } from '../../../DelOroApp/src/app/pages/academics/academics.component';
import { AthleticsComponent } from '../../../DelOroApp/src/app/pages/athletics/athletics.component';
import { ActivitiesComponent } from '../../../DelOroApp/src/app/pages/activities/activities.component';
import { CounselingComponent } from '../../../DelOroApp/src/app/pages/counseling/counseling.component';
import { ContactComponent } from '../../../DelOroApp/src/app/pages/contact/contact.component';
import { MoreComponent } from '../../../DelOroApp/src/app/pages/more/more.component';
import { NewsComponent } from '../../../DelOroApp/src/app/pages/news/news.component';
import { EditComponent } from '../../../DelOroApp/src/app/pages/edit/edit.component';
import { SettingsComponent } from '../../../DelOroApp/src/app/pages/settings/settings.component';
import { SignInComponent } from '../../../DelOroApp/src/app/pages/sign-in/sign-in.component';
import { StudyComponent } from '../../../DelOroApp/src/app/pages/study/study.component';
import { FlashcardsComponent } from '../../../DelOroApp/src/app/components/flashcards/flashcards.component';
import { GamesComponent } from '../../../DelOroApp/src/app/components/games/games.component';
import { QuizzesComponent } from '../../../DelOroApp/src/app/components/quizzes/quizzes.component';



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
  {
    path: 'quizzes',
    component: QuizzesComponent,
},
  ]
},










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
