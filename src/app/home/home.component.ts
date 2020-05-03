import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';
import { UserModule } from '../model/user/user.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() userID: Boolean = false;
  @Input('id') _idUrl: string = '';
  public allPeople;
  public people;
  public counstries = [];
  public idUser;
  public selectCountry = '';
  public user: UserModule
  isLoading = true;
  isDataTableLoading = false;
  isError = false
  public errorMessage
  displayedColumns: string[] = ['No', 'Gender', 'Name', 'Location', 'Email', 'Login', 'Phone', 'Action'];

  constructor(private common: CommonServiceService,
    private route: Router) {
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.allPeople = this.getDataSource();
    this.people = this.allPeople;
  }

  // onChange
  public onChange() {
    this.people = this.allPeople.filter(
      person => person.location === this.selectCountry);
  }

  // sort person
  onSort() {
    console.log('sort');
  }

  // edit user
  onEdit(id) {
    this.idUser = id;
    console.log(this.idUser);
    this.route.navigate(['editUser']); //transit to userEdit component
  }

  // delete user
  onDelete(id) {
    console.log('this person have id' + id);
  }
  // get datasource
  private getDataSource() {
    this.counstries = Array<string>();
    const listUser = Array<UserModule>();
    let position = 1;
    this.common.getRandomUser().subscribe(result => {
      this.isLoading = false;
      this.isDataTableLoading = true;
      if (result && result.results) {
        let user: UserModule;
        result.results.forEach(element => {
          // user.no = position++,
          // user.gender = element.gender,
          // user.name = element.name.last,
          // user.location = element.location.city,
          // user.email = element.email,
          // user.login = element.login.username,
          // user.phone = element.phone

          // listUser.push(user);
          this.common.userCount$.next(listUser.length);
          const maleCount = listUser.filter(person => person.gender === 'male').length;
          this.common.maleCount$.next(maleCount);
          this.common.femaleCount$.next(listUser.length - maleCount);
          if (!this.counstries.includes(user.location)) {
            this.counstries.push({
              value: user.location,
              display: user.location
            });
          }
        });
      }

    }, error => {
      setTimeout(() => {
        this.isLoading = false
        this.errorMessage = 'TIME OUT TO CONNET TO SERVER'
        this.isError = true
      }, 3000);
      // show somethings
      console.log(error);
    });
    return listUser;
  }

}



