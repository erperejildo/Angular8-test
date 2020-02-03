import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTwoRouteGuard } from './guards/page-two-route.guard';

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
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/page-three/page-three.module').then(
            m => m.PageThreeComponentModule
          )
      }
      /*{
        path: 'page-four',
        loadChildren: () =>
          import('./pages/page-three/page-four/page-four.module').then(
            m => m.PageFourComponentModule
          )
      }*/
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
