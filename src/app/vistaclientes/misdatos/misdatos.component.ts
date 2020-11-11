import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit {

  modalform:FormGroup 
  constructor(private _builder:FormBuilder) { 
   this.modalform = this._builder.group({
     identificacion: ['',[Validators.required,Validators.minLength(11),Validators.pattern('[0-9]{11}')]],
     nombres: ['',[Validators.required]]  ,
     apellidos: ['',[Validators.required]] ,
     correo: ['',[Validators.required,Validators.email]],
     pass: ['',[Validators.required,Validators.minLength(8)]],
   })
 }

  ngOnInit(): void {
  }

  enviar(values){

  }
}
