import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreSignupPageComponent }
  from './components/pre-signup-page/pre-signup-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'presignup', component: PreSignupPageComponent
  },
  {
    path: '**', redirectTo: '/presignup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
