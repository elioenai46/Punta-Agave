import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { KnownComponent } from './known/known.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogOneComponent } from './blog/blog-one/blog-one.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'menu', component: MenuComponent,
  },
  {
    path: 'bedrooms', component:BedroomsComponent ,
  },
  {
    path: 'known', component: KnownComponent
  },
  {
    path: 'promotions', component: PromotionsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
  path: 'home', component: HomeComponent
  },
  {
    path: 'blogone', component: BlogOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
