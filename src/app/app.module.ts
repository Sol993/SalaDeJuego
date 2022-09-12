import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardsComponent } from './componentes/cards/cards.component';

import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { SaladejuegoservicioService } from './servicios/saladejuegoservicio.service';

import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SaladechatsComponent } from './componentes/saladechats/saladechats.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    QuiensoyComponent,
    FooterComponent,
    NavComponent,
    CarouselComponent,
    CardsComponent,
    RegistroComponent,
    SaladechatsComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [SaladejuegoservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
