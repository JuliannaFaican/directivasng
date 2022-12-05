import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  router: any;
  numero:any;
  nombre_variable:number=0;
  vector: string[]=[]
  
  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  atras(){
    this.nav.navigate([''])
  }
  navegacion1()
  {
    this.router.navigate(['web1'])
  }
  navegacion2()
  {
    this.router.navigate(['web2'])
  }
}

