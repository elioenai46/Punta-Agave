import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBedroomsComponent } from './home/home-bedrooms/home-bedrooms.component';
import { HomeKnownComponent } from './home/home-known/home-known.component';
import { HomePromotionsComponent } from './home/home-promotions/home-promotions.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { HomeBlogComponent } from './home/home-blog/home-blog.component';
import { HomeComponent } from './home/home/home.component';
import { HomePruebaComponent } from './home/home-prueba/home-prueba.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'menu', pathMatch: 'full'
  },
  {
    path: 'menu', component: MenuComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'bedrooms', component: HomeBedroomsComponent,
  },
  {
    path: 'known', component: HomeKnownComponent
  },
  {
    path: 'promotions', component: HomePromotionsComponent
  },
  {
    path: 'contact', component: HomeContactComponent
  },
  {
    path: 'blog', component: HomeBlogComponent
  },
  {
    path: 'test', component: HomePruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
