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
import { BarberoComponent } from './vistaadministrador/barbero/barbero.component';
import { ClientesComponent } from './vistaadministrador/clientes/clientes.component';
import { CitasComponent } from './vistaadministrador/citas/citas.component';
import { MiscitasComponent } from './vistaclientes/miscitas/miscitas.component';
import { MisdatosComponent } from './vistaclientes/misdatos/misdatos.component';
import { TurnosComponent } from './vistabarbero/turnos/turnos.component';
import { CitasUComponent } from './vistaclientes/citas-u/citas-u.component';
import { HttpClientModule } from '@angular/common/http';


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
    ServiciosComponent,
    BarberoComponent,
    ClientesComponent,
    CitasComponent,
    MiscitasComponent,
    MisdatosComponent,
    TurnosComponent,
    CitasUComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
