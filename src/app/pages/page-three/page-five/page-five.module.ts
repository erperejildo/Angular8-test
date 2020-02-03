import { NgModule } from '@angular/core';
import { PageFiveComponent } from './page-five.component';
import { PageFiveComponentRoutingModule } from './page-five-routing.module';

@NgModule({
  declarations: [PageFiveComponent],
  imports: [PageFiveComponentRoutingModule],
  exports: [PageFiveComponent],
  entryComponents: [PageFiveComponent]
})
export class PageFiveComponentModule {}
