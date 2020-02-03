import { NgModule } from '@angular/core';
import { PageFourComponent } from './page-four.component';
import { PageFourComponentRoutingModule } from './page-four-routing.module';

@NgModule({
  declarations: [PageFourComponent],
  imports: [PageFourComponentRoutingModule],
  exports: [PageFourComponent],
  entryComponents: [PageFourComponent]
})
export class PageFourComponentModule {}
