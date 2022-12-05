import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-paginados',
  templateUrl: './paginados.component.html',
  styleUrls: ['./paginados.component.css']
})
export class PaginadosComponent implements OnInit {

  constructor(private nav: Router) { }

  numero:any;
  sueldos=[1700, 1600, 1880, 2000, 4555]
  ngOnInit(): void {
  this.numero=0;

   }
   
  atras(){
    this.nav.navigate([''])
  }
}
