import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modalform:FormGroup 
  login:FormGroup 

  constructor(private _builder:FormBuilder) { 
    this.modalform=this._builder.group({
      identificacion: ['',[Validators.required,Validators.minLength(11),Validators.pattern('[0-9]{11}')]],
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
  
  }

  ngOnInit(): void {
  }

  enviar(values){
    if (values.pass == values.verpass){
      console.log(values)
    }else{
      alert("las contraseñas no son iguales");
    }
    
  }

  iniciosesion(values){
    alert("validacion cumplida");
  }


}
