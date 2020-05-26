import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ZombiComponent } from './components/zombi/zombi.component';
import { VampiroComponent } from './components/vampiro/vampiro.component';
import { ContentComponent } from './components/content/content.component';
import { MomiaComponent } from './components/momia/momia.component';
import { HombloboComponent } from './components/homblobo/homblobo.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ZombiComponent,
    VampiroComponent,
    ContentComponent,
    MomiaComponent,
    HombloboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
