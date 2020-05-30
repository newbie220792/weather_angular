import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    // this.postStudent()
    this.getStudents();
    // this.deleteStuById()
    // this.updateStudent()
  }

  // get students
  public getStudents() {
    const listStu = this.studentService.getStudents();
    // tslint:disable-next-line: no-unused-expression
    console.log(listStu.length);
  }

  // add students
  public postStudent() {
    this.studentService.postStudents();
  }

  public deleteStuById() {
    this.studentService.deleteStudentById(1);
  }

  public updateStudent() {
    this.studentService.updateStudent();
  }
}


