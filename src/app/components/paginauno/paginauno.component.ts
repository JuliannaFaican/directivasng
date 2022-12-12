import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paginauno',
  templateUrl: './paginauno.component.html',
  styleUrls: ['./paginauno.component.css']
})
export class PaginaunoComponent implements OnInit {
  nav: any;
 

  constructor() { }
nombre:any=''
apellido:any=''
cedula:any=''
telefono:any=''
email:any=''
direccion:any=''
  ngOnInit(): void {
    localStorage.clear

    this.nombre()
    this.apellido()
    this.cedula()
    this.direccion()
    this.telefono()
    this.email()
  }
  registro(){
    this.nav.navigate(['web3'])
  }
  almacenar()
  {
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido', this.apellido)
    localStorage.setItem('cedula',this.cedula)
    localStorage.setItem('telefono', this.telefono)
    localStorage.setItem('direccion',this.direccion)
    localStorage.setItem('email', this.email)
  }

  recuperar()
  {
    this.nombre=localStorage.getItem('nombre')
    this.apellido=localStorage.getItem('apellido')
  }
}
