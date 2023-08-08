import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HomeBedroomsComponent } from './home/home-bedrooms/home-bedrooms.component';
import { HomeKnownComponent } from './home/home-known/home-known.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
