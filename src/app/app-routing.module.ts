import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreraResultatComponent } from './registrera-resultat/registrera-resultat.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/RegistreraResultat',
  pathMatch: 'full'
},
{
  path: 'RegistreraResultat',
  component: RegistreraResultatComponent
}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
