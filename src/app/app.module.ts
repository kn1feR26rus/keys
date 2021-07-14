import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/main/intro/intro.component';
import { KeysComponent } from './components/main/keys/keys.component';
import { AboutComponent } from './components/main/about/about.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { AmenitiesComponent } from './components/main/amenities/amenities.component';
import { DoorsKeyComponent } from './components/shared/doors-key/doors-key.component';
import { ElecKeyComponent } from './components/shared/elec-key/elec-key.component';
import { AutoKeyComponent } from './components/shared/auto-key/auto-key.component';
import { AnotherKeyComponent } from './components/shared/another-key/another-key.component';
import { AccessoriesComponent } from './components/shared/accessories/accessories.component';
import { BtrServComponent } from './components/shared/btr-serv/btr-serv.component';
import { AnothServComponent } from './components/shared/anoth-serv/anoth-serv.component';
import { AdressComponent } from './components/main/adress/adress.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 50,

};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    IntroComponent,
    KeysComponent,
    AboutComponent,
    ContactsComponent,
    AmenitiesComponent,
    DoorsKeyComponent,
    ElecKeyComponent,
    AutoKeyComponent,
    AnotherKeyComponent,
    AccessoriesComponent,
    BtrServComponent,
    AnothServComponent,
    AdressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
