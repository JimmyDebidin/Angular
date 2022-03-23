import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockAbcComponent } from './block-abc/block-abc.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { RacletteComponent } from './raclette/raclette.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserComponent } from './menu/user/user.component';

@NgModule({
  declarations: [AppComponent, BlockAbcComponent, UserProfileComponent, RacletteComponent, MenuComponent, SignUpComponent, UserComponent,],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
