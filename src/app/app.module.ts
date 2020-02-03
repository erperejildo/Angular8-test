import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageTwoRouteGuard } from './guards/page-two-route.guard';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, LoginPopupComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [PageTwoRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
