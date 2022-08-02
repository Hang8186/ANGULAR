import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { InputComponent } from './components/input/input.component';
import { BinaryComponent } from './components/binary/binary.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent,
    BinaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
