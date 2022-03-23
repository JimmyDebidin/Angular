import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './menu/user/user.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: UserProfileComponent },
  //{ path: 'menu', component: MenuComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
