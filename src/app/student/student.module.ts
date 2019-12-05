import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentListComponent} from './student-list/student-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';

const routing: Routes = [{
  path: '', component: StudentListComponent
}]

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ]
})
export class StudentModule { }
