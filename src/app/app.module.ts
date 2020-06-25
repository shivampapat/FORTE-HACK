
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//database
import {AngularFireModule} from '@angular/fire';  
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from './../environments/environment';

//Material 
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

//Components
import { AppRoutingModule, routedclass } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { WebinarFrontComponent } from './webinar-front/webinar-front.component';
import { WebinarVideosComponent } from './webinar-videos/webinar-videos.component';
import { CompetitionPageComponent } from './competition-page/competition-page.component';
import { CompetitionPageHostComponent } from './competition-page-host/competition-page-host.component';
import { HomeComponent } from './home/home.component';
import { TemplateCategoryComponent } from './template-category/template-category.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    LogInComponent,
    WebinarFrontComponent,
    WebinarVideosComponent,
    CompetitionPageComponent,
    CompetitionPageHostComponent,
    HomeComponent,
    HeaderComponent,
    TemplateCategoryComponent,
    routedclass,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'ForteHackTest'),
    AngularFireDatabaseModule,
    //AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
