import { NgModule } from '@angular/core';
import { PageThreeComponent } from './page-three.component';
import { PageThreeComponentRoutingModule } from './page-three-routing.module';
import { MoneyConverterComponentModule } from 'src/app/components/money-converter/money-converter.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageFourComponent } from './page-four/page-four.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [PageThreeComponent, PageFourComponent],
  imports: [
    PageThreeComponentRoutingModule,
    MoneyConverterComponentModule,
    CommonModule,
    FormsModule,
    MatTabsModule
  ],
  exports: [PageThreeComponent],
  entryComponents: [PageThreeComponent]
})
export class PageThreeComponentModule {}
