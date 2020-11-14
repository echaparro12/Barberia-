import {FormControl,ValidationErrors} from '@angular/forms';

export class validacionesPropias {

static numerospositivos(control: FormControl):ValidationErrors{
    let num = parseInt(control.value);
    if (num >=0){
        return null;
    }else{
        return {numerospositivos:true}
    }
}
}



