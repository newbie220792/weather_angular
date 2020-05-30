import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceHttpService } from '../service-http.service';
import { StudentModule } from '../model/student/student.module';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private httpClient: HttpClient;
  readonly x: number;
  private URL = 'http://localhost:3000/';
  constructor(private httpService: ServiceHttpService) {
    this.httpService.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.httpService.url = this.URL + 'students';
  }

  // get list student
  getStudents(): Array<StudentModule> {
    let students;
    this.httpService.get().subscribe(data => {
      students = new Array(JSON.parse(data));
      students.forEach(e => {
        console.log(e);
      });
      // tslint:disable-next-line: no-unused-expression
    }), (error: any) => {
      setTimeout(() => {
        throwError('Time out, Try to connect to server again!!!');
      }, 6000); // time out when load data over 6 sec
      throwError(error);
    };
    // tslint:disable-next-line: triple-equals
    if (students == null || students.length == 0) {
      throwError('Something bad happened; please try again later.');
    }
    return students;
  }

  // add user
  postStudents() {
    const data = {
      id: 4,
      title: 'json-server',
      author: 'typicode'
    };
    // tslint:disable-next-line: no-shadowed-variable
    this.httpService.post(data).subscribe((data => {
      console.log(data);

    }), error => {
      console.log(error);
    });
  }

  // delete student
  deleteStudentById(idStu: number) {
    this.httpService.url += `/${idStu}`;
    this.httpService.delete(idStu).subscribe((data => {
      console.log(data);
    }), error => {
      console.log(error);
    });
  }

  // edit student
  updateStudent() {
    this.httpService.url += '/';
    const stu = {
      id: 4,
      title: 'json-server',
      author: 'it\'s me'
    };
    this.httpService.put(stu).subscribe((data => {
      console.log(data);
    }), error => {
      console.log(error);
    });
  }
}

