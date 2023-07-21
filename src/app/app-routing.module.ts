import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './data/guards/login.guard';
import { PaginasGuard } from './data/guards/paginas.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)//,canActivate:[LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)//, canActivate:[PaginasGuard]
  },
  {
    path: '', // Ruta vacía, se establecerá como página principal
    redirectTo: 'home', // Redirige a la página 'home'
    pathMatch: 'full'
  },
  {
    path: '**', // Página no encontrada, puedes manejarla como desees
    redirectTo: 'home',
  },
  {
    path: 'searchs',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },  {
    path: 'deceased',
    loadChildren: () => import('./pages/deceased/deceased.module').then( m => m.DeceasedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },

  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
