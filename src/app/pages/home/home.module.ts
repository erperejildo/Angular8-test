import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';
import { AdvertisementComponentModule } from 'src/app/components/advertisement/advertisement.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeComponentRoutingModule, AdvertisementComponentModule],
  exports: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeComponentModule {}
