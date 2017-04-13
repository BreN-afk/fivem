import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NguiTabModule } from '@ngui/tab';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { TranslationModule } from 'angular-l10n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BottomNavComponent } from './bottom-nav.component';
import { HomeComponent } from './home.component';
import { ServerListComponent } from './server-list.component';

import { ServersService } from './servers.service';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NguiTabModule,
    VirtualScrollModule,
    TranslationModule.forRoot()
  ],
  providers: [
    ServersService
  ],
  bootstrap: [
    AppComponent
  ]
}) 
export class AppModule { }
