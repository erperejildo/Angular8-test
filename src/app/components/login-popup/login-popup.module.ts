import { NgModule } from '@angular/core';
import { LoginPopupComponent } from './login-popup.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginPopupComponent],
  exports: [LoginPopupComponent],
  imports: [CommonModule],
  entryComponents: [LoginPopupComponent]
})
export class LoginPopupComponentModule {}
