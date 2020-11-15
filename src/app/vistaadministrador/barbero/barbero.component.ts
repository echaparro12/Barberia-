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
   constructor(private _builder:FormBuilder ) { 

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

  agregar(values){
    let txtid:string = values.identificacion;
    let txtnombre:string = values.nombres;
    let txtapellido:string = values.apellidos;
    let txtcorreo:string = values.correo;
    let txtcontraseña:string = values.pass;

    let usuario =[{
    lid:txtid,
    lnombre:txtnombre,
    lapellido:txtapellido,
    lcorreo:txtcorreo,
    lpassword:txtcontraseña
    }]

    let validar = JSON.parse(localStorage.getItem('AdminBarbero'))
    if (validar !== null){
      validar.push(usuario)
      localStorage.setItem('AdminBarbero',JSON.stringify(validar))
    }else{
      localStorage.setItem('AdminBarbero',JSON.stringify(usuario))
    }
    this.modalform1.reset()
  }

  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;}
 
}
