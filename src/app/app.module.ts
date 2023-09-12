import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { OtherCardComponent } from './components/other-card/other-card.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, TitleComponent, MainCardComponent, OtherCardComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
