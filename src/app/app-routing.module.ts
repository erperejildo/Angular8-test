import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeComponentModule)
  },
  /*{
    path: 'gallery',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/gallery/gallery.module').then(
            m => m.GalleryComponentModule
          )
      },
      {
        path: 'portraits',
        loadChildren: () =>
          import('./pages/portraits/portraits.module').then(
            m => m.PortraitsComponentModule
          )
      },
      {
        path: 'museums',
        canActivate: [MuseumRouteGuard],
        loadChildren: () =>
          import('./pages/museums/museums.module').then(
            m => m.MuseumsComponentModule
          )
      }
    ]
  },*/
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
