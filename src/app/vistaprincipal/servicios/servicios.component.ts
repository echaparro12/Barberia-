import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  lista: any = {};
  constructor(private http: HttpClient) {
    this.http.get('../../../assets/json/tabladeservicios.json') //
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

}
