import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';
import { KnownComponent } from './known/known.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogOneComponent } from './blog/blog-one/blog-one.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BedroomsComponent,
    KnownComponent,
    PromotionsComponent,
    ContactComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    BlogOneComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
