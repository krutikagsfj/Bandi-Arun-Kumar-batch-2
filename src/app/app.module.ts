import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilecomComponent } from './mobilecom/mobilecom.component';
import { HttptypeComponent } from './pages/httptype/httptype.component';
import { MobileservService } from './mobileserv.service';
import { HttpClientModule } from  '@angular/common/http';
import { OrderBy } from './mobilecom/orderby';

@NgModule({
  declarations: [
    AppComponent,
    MobilecomComponent,
    HttptypeComponent,
    OrderBy
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [MobileservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
