import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { validacionesPropias } from '../class/validaciones-propias';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalform:FormGroup 
  login:FormGroup 
  lista: any = {};

  constructor(private _builder:FormBuilder,private http: HttpClient,private router:Router) { 
    this.modalform=this._builder.group({
      identificacion: ['',[Validators.required,Validators.minLength(11),validacionesPropias.numerospositivos]],
      nombres: ['',[Validators.required]]  ,
      apellidos: ['',[Validators.required]] ,
      correo: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(8)]],
      verpass: ['',[Validators.required,Validators.minLength(8)]]
    })
    this.login=this._builder.group({
      correo: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    })

    this.http.get('../../assets/json/usuario.json') //
    .subscribe(
      result => {
        console.log(result)
        this.lista=result}, error => {
        console.log('problemas');
      }
    );
    
  
  }

  ngOnInit(): void {
  }





  enviar(values){
    
    if (values.pass == values.verpass){
      console.log(values)
      this.guardarlocalstorage(values);
    }else{
      alert("las contraseñas no son iguales");
    }
    
  }

  iniciosesion(values){

      if (values.correo == this.lista[0]?.Correo && values.password == this.lista[0]?.contraseña){
      alert("admin");
   
    }
      if (values.correo == this.lista[1]?.Correo && values.password == this.lista[1]?.contraseña){
      alert("cliente");
    
    }
      if (values.correo == this.lista[2]?.Correo && values.password == this.lista[2]?.contraseña){
      alert("Barbero");
    
    }
   
  }


  guardarlocalstorage(values){

    let txtid:string = values.identificacion;
    let txtnombre:string = values.nombres;
    let txtapellido:string = values.apellidos;
    let txtcorreo:string = values.correo;
    let txtcontraseña:string = values.pass;

    let usuario ={
    lid:txtid,
    lnombre:txtnombre,
    lapellido:txtapellido,
    lcorreo:txtcorreo,
    lpassword:txtcontraseña
    }
    let usuarion ={
      lid:txtid,
      lnombre:txtnombre,
      lapellido:txtapellido,
      lcorreo:txtcorreo,
      lpassword:txtcontraseña
      }

    let validar = localStorage.getItem('usuario')
    let  dato = [];
    localStorage.setItem("usuario",JSON.stringify(usuario));

    if (validar !== null){
       dato = JSON.parse(localStorage.getItem('usuario'));
       console.log((dato))
    }
    dato.push(usuarion)
    localStorage.setItem('usuario',JSON.stringify(dato))
    this.modalform.reset()
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;}

}