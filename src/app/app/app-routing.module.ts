import { Routes, RouterModule } from '@angular/router';
import { CreateRoleComponent } from './content/role/create-role/create-role.component';
import { NgModule } from '@angular/core';
import { RoleListComponent } from './content/role/role-list/role-list.component';


const router: Routes = [
  { path: 'role-list', component: RoleListComponent },
  { path: 'create-role', component: CreateRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
