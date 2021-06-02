import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { SimpleCarouselComponent } from './components/simple-carousel/simple-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardCarouselComponent,
    SimpleCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
