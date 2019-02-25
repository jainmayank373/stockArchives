import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule,MatIconModule,MatInputModule,MatGridListModule,MatNativeDateModule,MatCardModule,MatFormFieldModule,MatDatepickerModule} from  '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

import {RoutingModule}  from './routing/routing.module';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StockDetailsComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
