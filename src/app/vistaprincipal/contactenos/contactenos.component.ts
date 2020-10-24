import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})

export class ContactenosComponent implements OnInit {

  myform:FormGroup 
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      tipodocumento: ['',Validators.required]  ,
      identificacion: ['',Validators.required]  ,
      nombreapellidos: ['',Validators.required] ,
      correo: ['',Validators.required],
      telefono: ['',Validators.required],
      tiposolicitud: ['',Validators.required],
      mensaje: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  enviar(values){
    console.log(values)
  }

}
