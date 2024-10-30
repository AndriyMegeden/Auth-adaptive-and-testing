import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/public/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Перенаправлення на /register
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./pages/secure/secure.module').then( m => m.SecurePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
