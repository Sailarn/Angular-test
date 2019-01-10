import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers/data.reducers";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ElasticComponent } from "./elastic/elastic.component";

@NgModule({
  declarations: [AppComponent, ElasticComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      appData: reducer
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
