import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SecurityComponent } from './components/security/security.component';
import { DlaTeamComponent } from './components/dla-team/dla-team.component';
import { LiveAccountsComponent } from './components/live-accounts/live-accounts.component';
import { PreSignupPageComponent } from './components/pre-signup-page/pre-signup-page.component';
import { PreSignupComponent } from './components/pre-signup/pre-signup.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignupComponent,
    TopBarComponent,
    SecurityComponent,
    DlaTeamComponent,
    LiveAccountsComponent,
    PreSignupPageComponent,
    PreSignupComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
