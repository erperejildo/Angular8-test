import { NgModule } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  declarations: [StarRatingComponent],
  exports: [StarRatingComponent],
  entryComponents: [StarRatingComponent]
})
export class StarRatingComponentModule {}
