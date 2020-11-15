import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {  usuarios } from "src/app/models/usuarios";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
 
  posicioneditar:number
  editarmodal:FormGroup
  modalform:FormGroup 
  lista: any = {};
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

    this.lista = JSON.parse(localStorage.getItem('AdminCliente'))

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
    let validar = JSON.parse(localStorage.getItem('AdminCliente'))
    if (validar !== null){
      validar.push(usuario)
      localStorage.setItem('AdminCliente',JSON.stringify(validar))
    }else{
      localStorage.setItem('AdminCliente',JSON.stringify(usuario))
    }
    this.modalform.reset()
    console.log(this.lista)
  }

  


    onlyNumberKey(event) {
      return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;}

}
