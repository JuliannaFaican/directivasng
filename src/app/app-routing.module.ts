import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginadosComponent } from './components/paginados/paginados.component';
import { PaginaunoComponent } from './components/paginauno/paginauno.component';
import { PrincipalComponent } from './components/principal/principal.component';

  const routes: Routes = [
    {
      path: '', component: PrincipalComponent
    },
    {
      path: 'web1', component: PaginaunoComponent
    },
    {
      path: 'web2', component: PaginadosComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
