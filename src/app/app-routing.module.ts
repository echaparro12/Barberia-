import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { ContactenosComponent} from './vistaprincipal/contactenos/contactenos.component';
import { HomeComponent} from './vistaprincipal/home/home.component';
import { ServiciosComponent} from './vistaprincipal/servicios/servicios.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent },
  {path:'contactenos', component: ContactenosComponent  },
  {path:'servicios', component: ServiciosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
