import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageTwoRouteGuard } from './pages/page-two/page-two-route.guard';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [PageTwoRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
