import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {  barberia } from "src/app/models/barberia";

@Component({
  selector: 'app-barbero',
  templateUrl: './barbero.component.html',
  styleUrls: ['./barbero.component.css']
})
export class BarberoComponent implements OnInit {
  Barberia : Array<barberia> = new Array<barberia>();
  posicioneditar:number
  editarmodal:FormGroup
  modalform1:FormGroup 
   constructor(private _builder:FormBuilder) { 

    this.modalform1 = this._builder.group({
      identificacion: ['',[Validators.required,Validators.minLength(11),Validators.pattern('[0-9]{11}')]],
      nombres: ['',[Validators.required]]  ,
      apellidos: ['',[Validators.required]] ,
      correo: ['',[Validators.required,Validators.email]],
      pass: ['',[Validators.required,Validators.minLength(8)]],
    })

    this.editarmodal = this._builder.group({
      identificacion1: ['',[Validators.required,Validators.minLength(11),Validators.pattern('[0-9]{11}')]],
      nombres1: ['',[Validators.required]]  ,
      apellidos1: ['',[Validators.required]] ,
      correo1: ['',[Validators.required,Validators.email]],
      pass1: ['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  agregar(){
    this.Barberia.push(this.modalform1.value)
    this.modalform1.reset()
  }

  
editar(){
  //ubico en la lista los nuevos datos en la posicion indicada
  this.Barberia[this.posicioneditar].identificacion=this.editarmodal.value.identificacion1
  this.Barberia[this.posicioneditar].nombre=this.editarmodal.value.nombres1
  this.Barberia[this.posicioneditar].apellido=this.editarmodal.value.apellidos1
  this.Barberia[this.posicioneditar].correo=this.editarmodal.value.correo1
  this.Barberia[this.posicioneditar].contraseña=this.editarmodal.value.pass1


}

editarusuario(posicion:number){
  /// mmetodo para obetener la posicion de la persona ingresar y subir los datos al formulario para su edicion
    this.editarmodal.setValue({
      identificacion1:this.Barberia[posicion].identificacion,
      nombres1:this.Barberia[posicion].nombre,
      apellidos1:this.Barberia[posicion].apellido,
      correo1:this.Barberia[posicion].correo,
      pass1:this.Barberia[posicion].contraseña
    })
    this.posicioneditar=posicion
    console.log(this.editarmodal)
    console.log(this.posicioneditar)
  }


  eliminarusuario(posicion:number){
    this.Barberia.splice(posicion,1)// posicion, cantidad de elementos
    }
}
