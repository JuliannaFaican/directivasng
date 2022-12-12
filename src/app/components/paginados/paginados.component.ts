import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {

  constructor(private nav: Router) { }

  suma:any=0;
  numero:any=0;
  mensaje:any="（。＾▽＾）"
  sueldos=[1700, 1600, 1880, 2000, 4555]
  ngOnInit(): void {
  this.numero=3;
  this.suma=0
  this.almacenar()
  this.recuperar

  
   }
   
  atras(){
    this.nav.navigate([''])
  }
  almacenar()
  {
    console.log
    localStorage.setItem('valor_total',this.numero)
    localStorage.setItem('mesanje1', this.mensaje)
  }

  recuperar()
  {
    this.suma=localStorage.getItem('valor_total')
    this.mensaje=localStorage.getItem('mesanje1')
  }
}
