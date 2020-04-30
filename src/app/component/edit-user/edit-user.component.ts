import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() userID: Boolean = false;
  @Input() value : string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.value);
  }

}
