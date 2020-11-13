import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {  usuarios } from "src/app/models/usuarios";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  Usuarios : Array<usuarios> = new Array<usuarios>();
  posicioneditar:number
  editarmodal:FormGroup
  modalform:FormGroup 

   constructor(private _builder:FormBuilder) { 
    this.modalform = this._builder.group({
      identificacion: ['',[Validators.required,Validators.minLength(8),Validators.pattern('[0-9]{11}')]],
      nombres: ['',[Validators.required]]  ,
      apellidos: ['',[Validators.required]] ,
      correo: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(8)]],
    })

    this.editarmodal = this._builder.group({
      identificacion1: ['',[Validators.required,Validators.minLength(8),Validators.pattern('[0-9]{11}')]],
      nombres1: ['',[Validators.required]]  ,
      apellidos1: ['',[Validators.required]] ,
      correo1: ['',[Validators.required,Validators.email]],
      pass1: ['',[Validators.required,Validators.minLength(8)]],
    })
  }


  ngOnInit(): void {
  }

  agregar(){
    this.Usuarios.push(this.modalform.value)
    this.modalform.reset()
  }

  
editar(){
  //ubico en la lista los nuevos datos en la posicion indicada
  this.Usuarios[this.posicioneditar].identificacion=this.editarmodal.value.identificacion1
  this.Usuarios[this.posicioneditar].nombre=this.editarmodal.value.nombres1
  this.Usuarios[this.posicioneditar].apellido=this.editarmodal.value.apellidos1
  this.Usuarios[this.posicioneditar].correo=this.editarmodal.value.correo1
  this.Usuarios[this.posicioneditar].contraseña=this.editarmodal.value.pass1


}

editarusuario(posicion:number){
  /// mmetodo para obetener la posicion de la persona ingresar y subir los datos al formulario para su edicion
    this.editarmodal.setValue({
      identificacion1:this.Usuarios[posicion].identificacion,
      nombres1:this.Usuarios[posicion].nombre,
      apellidos1:this.Usuarios[posicion].apellido,
      correo1:this.Usuarios[posicion].correo,
      pass1:this.Usuarios[posicion].contraseña
    })
    this.posicioneditar=posicion
    console.log(this.editarmodal)
    console.log(this.posicioneditar)
  }


  eliminarusuario(posicion:number){
    this.Usuarios.splice(posicion,1)// posicion, cantidad de elementos
    }
}
