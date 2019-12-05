import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StudentListComponent} from './student-list/student-list.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },

  {
    path: 'student-list',
    component: StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
