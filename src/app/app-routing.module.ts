import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoRouteGuard } from './pages/page-two/page-two-route.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeComponentModule)
  },
  {
    path: 'page-one',
    loadChildren: () =>
      import('./pages/page-one/page-one.module').then(
        m => m.PageOneComponentModule
      )
  },
  {
    path: 'page-two',
    canActivate: [PageTwoRouteGuard],
    loadChildren: () =>
      import('./pages/page-two/page-two.module').then(
        m => m.PageTwoComponentModule
      )
  },
  {
    path: 'page-three',
    loadChildren: () =>
      import('./pages/page-three/page-three.module').then(
        m => m.PageThreeComponentModule
      )
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
