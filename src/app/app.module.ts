import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    BottomContainerComponent,
    AdvertisementComponent,
    StarRatingComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
