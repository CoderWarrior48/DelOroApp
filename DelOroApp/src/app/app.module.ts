import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../../../DelOroApp/src/app/components/material/material.module';
import { AcademicsComponent } from './pages/academics/academics.component';
import { AthleticsComponent } from './pages/athletics/athletics.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { CounselingComponent } from './pages/counseling/counseling.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MoreComponent } from './pages/more/more.component';
import { NewsComponent } from './pages/news/news.component';
import { EditComponent } from './pages/edit/edit.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { StudyComponent } from './pages/study/study.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { GamesComponent } from './components/games/games.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditquizComponent } from './editquiz/editquiz.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResourcesComponent,
    NavBarComponent,
    HomeComponent,
    AcademicsComponent,
    AthleticsComponent,
    ActivitiesComponent,
    CounselingComponent,
    ContactComponent,
    MoreComponent,
    NewsComponent,
    EditComponent,
    NewsfeedComponent,
    SettingsComponent,
    SignInComponent,
    StudyComponent,
    FlashcardsComponent,
    GamesComponent,
    QuizzesComponent,
    EditquizComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
