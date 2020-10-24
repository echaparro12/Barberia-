import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarinicioComponent } from './narvbar/navbarinicio/navbarinicio.component';
import { NavbarusuarioComponent } from './narvbar/navbarusuario/navbarusuario.component';
import { NavbaradministradorComponent } from './narvbar/navbaradministrador/navbaradministrador.component';
import { NavbarbarberoComponent } from './narvbar/navbarbarbero/navbarbarbero.component';
import { LoginComponent } from './login/login.component';
import { ContactenosComponent } from './vistaprincipal/contactenos/contactenos.component';
import { HomeComponent } from './vistaprincipal/home/home.component';
import { ServiciosComponent } from './vistaprincipal/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarinicioComponent,
    NavbarusuarioComponent,
    NavbaradministradorComponent,
    NavbarbarberoComponent,
    LoginComponent,
    ContactenosComponent,
    HomeComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
