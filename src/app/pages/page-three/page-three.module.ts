import { NgModule } from '@angular/core';
import { PageThreeComponent } from './page-three.component';
import { PageThreeComponentRoutingModule } from './page-three-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageThreeComponent],
  imports: [PageThreeComponentRoutingModule, CommonModule, FormsModule],
  exports: [PageThreeComponent],
  entryComponents: [PageThreeComponent]
})
export class PageThreeComponentModule {}
