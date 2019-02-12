import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SecurityComponent } from './components/security/security.component';
import { DlaTeamComponent } from './components/dla-team/dla-team.component';
import { LiveAccountsComponent } from './components/live-accounts/live-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    TopBarComponent,
    SecurityComponent,
    DlaTeamComponent,
    LiveAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
