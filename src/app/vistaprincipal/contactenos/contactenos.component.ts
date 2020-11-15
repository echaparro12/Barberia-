import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { contactenos } from 'src/app/models/contactenos';
@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})

export class ContactenosComponent implements OnInit {

  myform:FormGroup 
  Contactenos: Array<contactenos> = new Array<contactenos>();
  constructor(private _builder:FormBuilder) { 
    this.myform=this._builder.group({
      tipodocumento: ['',[Validators.required]]  ,
      identificacion: ['',[Validators.required,Validators.minLength(11)]]  ,
      nombreapellidos: ['',[Validators.required]] ,
      correo: ['',[Validators.required,Validators.email]],
      telefono: ['',[Validators.required,Validators.minLength(10)]],
      tiposolicitud: ['',[Validators.required]],
      mensaje: ['',[Validators.required,Validators.maxLength(500),Validators.minLength(10)]]
    })
  }

  enviardatoslocal(values){
    let txttipoid:string = values.tipodocumento;
    let txtid:string = values.identificacion;
    let txtnombreapellido:string = values.nombreapellidos;
    let txtcorreo:string = values.correo;
    let txttelefono:string = values.telefono;
    let txttiposolicitud:string = values.tiposolicitud;
    let txtmensaje:string = values.mensaje;

    let contacto =[{
    ltipoid:txttipoid,
    ltid:txtid,
    lnombreapellido:txtnombreapellido,
    ltelefono:txttelefono,
    lcorreo:txtcorreo,
    ltiposolicitud:txttiposolicitud,
    lmensaje:txtmensaje
    }]

    let validar = JSON.parse(localStorage.getItem('contacto'))
    if (validar !== null){
      validar.push(contacto)
      localStorage.setItem('contacto',JSON.stringify(validar))
    }else{
      localStorage.setItem('contacto',JSON.stringify(contacto))
    }
   
    this.myform.reset()
  }
  
 
  
  
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;}

ngOnInit(): void {
}

}
