import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private common: WeatherService) { }

  ngOnInit(): void {
    console.log("ok nha nah");
    this.common.getRandomUser().subscribe(result => {
      // console.log(result);
      if(result && result.results){
        console.log("ok");
        const user = result.results;
        console.log(user[0].name);
        
      }
      
    });
  }

}
