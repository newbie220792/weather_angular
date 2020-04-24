import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public people;
  public counstries;
  isLoading = true;
  isDataTableLoading = false;
  displayedColumns: string[] = ['No', 'Gender', 'Name', 'Location', 'Email', 'Login', 'Phone'];
  constructor(private common: CommonServiceService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    this.people = this.getDataSource();
  }

  // get datasource
  private getDataSource() {
    this.counstries = Array<string>();
    const listUser = Array<User>();
    let position = 1;
    let user: User;
    this.common.getRandomUser().subscribe(result => {
      this.isLoading = false;
      this.isDataTableLoading = true;
      if (result && result.results) {
        result.results.forEach(element => {
          user = new User(
            position++,
            element.gender,
            element.name.last,
            element.location.city,
            element.email,
            element.login.username,
            element.phone
          );
          listUser.push(user);
          console.log(user);
          this.common.userCount$.next(listUser.length);
          const maleCount = listUser.filter(person => person.gender === 'male').length;
          this.common.maleCount$.next(maleCount);
          this.common.femaleCount$.next(listUser.length - maleCount);
        });
      }
      this.counstries.add(user.location);

    }, error => {
      // show somethings
      console.log(error);
    } );
    return listUser;
  }

}

// gần giống emun model
export class User {
  gender: string;
  name: string;
  location: string;
  email: string;
  login: string;
  phone: string;
  no: number;

  constructor(no: number, gender: string, name: string, location: string, email: string, login: string, phone: string) {
    this.no = no;
    this.gender = gender;
    this.name = name;
    this.location = location;
    this.email = email;
    this.login = login;
    this.phone = phone;
  }


}

