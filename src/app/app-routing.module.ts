import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { WebinarFrontComponent } from './webinar-front/webinar-front.component';
import { WebinarVideosComponent } from './webinar-videos/webinar-videos.component';
import { HomeComponent } from './home/home.component';
import{CompetitionPageComponent} from './competition-page/competition-page.component';
import { AboutComponent } from './about/about.component';
import { NetworkingComponent } from './networking/networking.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CompetitionPageHostComponent } from './competition-page-host/competition-page-host.component';
 
const routes: Routes = [
  {path:'', component:HomeComponent},  
  {path:'SignIn', component: SignInComponent},
  {path:'LogIn', component: LogInComponent},
  {path:'Profile', component: ProfileComponent},
  {path:'Webinar', component: WebinarFrontComponent},
  {path:'WebinarVideo', component: WebinarVideosComponent},
  {path:'Competitions', component: CompetitionPageComponent},
  {path:'About', component: AboutComponent},
  {path:'Networking',component: NetworkingComponent},
  {path:'User-profile',component: UserProfileComponent},
  {path:'Competition-page-host',component: CompetitionPageHostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routedclass = [SignInComponent,LogInComponent,ProfileComponent,WebinarFrontComponent,WebinarVideosComponent,HomeComponent,CompetitionPageComponent,NetworkingComponent,UserProfileComponent,CompetitionPageHostComponent];