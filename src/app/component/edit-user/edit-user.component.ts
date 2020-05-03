import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() round: Boolean = false;
  @Input() name : string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.name);
  }

}
