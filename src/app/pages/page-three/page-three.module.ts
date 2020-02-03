import { NgModule } from '@angular/core';
import { PageThreeComponent } from './page-three.component';
import { PageThreeComponentRoutingModule } from './page-three-routing.module';

@NgModule({
  declarations: [PageThreeComponent],
  imports: [PageThreeComponentRoutingModule],
  exports: [PageThreeComponent],
  entryComponents: [PageThreeComponent]
})
export class PageThreeComponentModule {}
