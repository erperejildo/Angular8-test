import { NgModule } from '@angular/core';
import { AdvertisementComponent } from './advertisement.component';
import { StarRatingComponentModule } from '../star-rating/star-rating.module';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [StarRatingComponentModule],
  exports: [AdvertisementComponent],
  entryComponents: [AdvertisementComponent]
})
export class AdvertisementComponentModule {}
