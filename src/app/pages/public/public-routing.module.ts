import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicPage } from './public.page';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PriceComponent } from './price/price.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PublicPage,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'price',
        component: PriceComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: '',
        redirectTo: 'home'
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
