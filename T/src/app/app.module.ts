import { ProductService } from './Services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/main/header/header.component';
import { NavbarComponent } from './Component/main/navbar/navbar.component';
import { FooterComponent } from './Component/main/footer/footer.component';
import { CampaignsComponent } from './Component/conent/campaigns/campaigns.component';
import { CarouselComponent } from './Component/conent/carousel/carousel.component';
import { ProductComponent } from './Component/conent/campaigns/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './Component/conent/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from '@ngx-share/buttons';

import '../icon';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CampaignsComponent,
    CarouselComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
     ToastrModule.forRoot({
       timeOut: 2000,
       positionClass: 'toast-top-right',
       preventDuplicates: true,
     }),
   //  HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts
     ShareButtonsModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
