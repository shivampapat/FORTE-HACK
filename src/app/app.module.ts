import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//database
import {AngularFireModule} from '@angular/fire';  
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from './../environments/environment';

//Material
import{MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule } from '@angular/material/input';
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
import { AboutComponent } from './about/about.component';
import { DanceComponent } from './dance/dance.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NetworkingComponent } from './networking/networking.component';

import{AllService} from './shared/all.service';
import { from } from 'rxjs';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";

const config = {
  apiKey: "AIzaSyCcbiy7kb6Ssz-ysab-xrCGIaZDUTMWzXM",
  authDomain: "forte-hack-f6dce.firebaseapp.com",
  databaseURL: "https://forte-hack-f6dce.firebaseio.com",
  projectId: "forte-hack-f6dce",
  storageBucket: "forte-hack-f6dce.appspot.com",
  messagingSenderId: "928404212388",
  appId: "1:928404212388:web:7da99f4451cae54c017431",
  measurementId: "G-DT5MZEN4S2"
}


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
    FooterComponent,
    AboutComponent,
    DanceComponent,
    UserProfileComponent,
    NetworkingComponent
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
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ReactiveFormsModule
    //AngularFontAwesomeModule

  ],
  providers: [AllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
