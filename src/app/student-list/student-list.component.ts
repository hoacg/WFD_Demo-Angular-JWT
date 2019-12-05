import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: any[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getAllStudents().subscribe( result => {
      this.studentList = result;
    });
  }

}
