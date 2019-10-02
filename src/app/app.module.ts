import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxHonkModule } from 'ngx-honk';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHonkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
