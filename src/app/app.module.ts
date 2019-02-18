import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { BigYellowButtonComponent } from './components/big-yellow-button/big-yellow-button.component';

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
    CommentsComponent,
    BigYellowButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
