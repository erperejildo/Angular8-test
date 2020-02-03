import { NgModule } from '@angular/core';
import { MoneyConverterComponent } from './money-converter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoneyConverterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MoneyConverterComponent],
  entryComponents: [MoneyConverterComponent]
})
export class MoneyConverterComponentModule {}
