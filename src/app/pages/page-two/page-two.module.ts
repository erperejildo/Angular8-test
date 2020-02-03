import { NgModule } from '@angular/core';
import { PageTwoComponent } from './page-two.component';
import { PageTwoComponentRoutingModule } from './page-two-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageTwoComponent],
  imports: [PageTwoComponentRoutingModule, CommonModule],
  exports: [PageTwoComponent],
  entryComponents: [PageTwoComponent]
})
export class PageTwoComponentModule {}
