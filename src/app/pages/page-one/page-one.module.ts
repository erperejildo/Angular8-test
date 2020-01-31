import { NgModule } from '@angular/core';
import { PageOneComponent } from './page-one.component';
import { PageOneComponentRoutingModule } from './page-one-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageOneComponent],
  imports: [PageOneComponentRoutingModule, FormsModule],
  exports: [PageOneComponent],
  entryComponents: [PageOneComponent]
})
export class PageOneComponentModule {}
