import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../../DelOroApp/src/app/material/material.module';
import { AcademicsComponent } from './academics/academics.component';
import { AthleticsComponent } from './athletics/athletics.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CounselingComponent } from './counseling/counseling.component';
import { ContactComponent } from './contact/contact.component';
import { MoreComponent } from './more/more.component';
import { NewsComponent } from './news/news.component';
import { EditComponent } from './edit/edit.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
