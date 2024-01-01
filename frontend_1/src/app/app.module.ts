import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ListingComponent } from './components/listing/listing.component'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent , ListingComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
