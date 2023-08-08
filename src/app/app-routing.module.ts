import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HomeBedroomsComponent } from './home/home-bedrooms/home-bedrooms.component';
import { HomeKnownComponent } from './home/home-known/home-known.component';
import { HomePromotionsComponent } from './home/home-promotions/home-promotions.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { HomeBlogComponent } from './home/home-blog/home-blog.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
