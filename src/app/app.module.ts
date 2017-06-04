import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ToasterModule,
        NgxElectronModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
