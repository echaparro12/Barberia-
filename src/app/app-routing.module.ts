import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ContactenosComponent} from './vistaprincipal/contactenos/contactenos.component';
import { HomeComponent} from './vistaprincipal/home/home.component';
import { ServiciosComponent} from './vistaprincipal/servicios/servicios.component';
import { ClientesComponent} from './vistaadministrador/clientes/clientes.component';
import { BarberoComponent} from './vistaadministrador/barbero/barbero.component';
import { CitasComponent} from './vistaadministrador/citas/citas.component';
import { CitasUComponent} from './vistaclientes/citas-u/citas-u.component';
import { MiscitasComponent}from './vistaclientes/miscitas/miscitas.component';
import { MisdatosComponent}from './vistaclientes/misdatos/misdatos.component';
import { TurnosComponent } from "./vistabarbero/turnos/turnos.component";
const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent },
  {path:'contactenos', component: ContactenosComponent  },
  {path:'servicios', component: ServiciosComponent },

  {path:'vistaclienteA', component: ClientesComponent },
  {path:'vistabarberoA', component: BarberoComponent  },
  {path:'vistacitasA', component: CitasComponent },

  {path:'vistacitasU', component: CitasUComponent },
  {path:'vistamiscitasU', component: MiscitasComponent  },
  {path:'vistamisdatosU', component: MisdatosComponent },

  {path:'vistaturnosB', component: TurnosComponent },
  
  {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
