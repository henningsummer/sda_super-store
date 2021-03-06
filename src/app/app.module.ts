import { RoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//my modules

//modules
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { fourPageComponent } from './pages/four-page/four-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    CartbarComponent,
    SearchbarComponent,
    BannerComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    fourPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
