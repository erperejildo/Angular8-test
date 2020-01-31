import { NgModule } from '@angular/core';
import { PageTwoComponent } from './page-two.component';
import { PageTwoComponentRoutingModule } from './page-two-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageTwoComponent],
  imports: [PageTwoComponentRoutingModule, FormsModule],
  exports: [PageTwoComponent],
  entryComponents: [PageTwoComponent]
})
export class PageTwoComponentModule {}
