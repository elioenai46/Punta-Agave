import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBedroomsComponent } from './home-bedrooms/home-bedrooms.component';
import {MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeKnownComponent } from './home-known/home-known.component';





@NgModule({
  declarations: [
    HomeComponent,
    HomeBedroomsComponent,
    HomeKnownComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
