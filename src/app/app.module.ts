import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { TwoWayComponent } from './forms/two-way/two-way.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    TwoWayComponent,
    ReactiveFormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
