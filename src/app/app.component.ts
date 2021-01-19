import { Component, OnInit } from '@angular/core';
// @Tushar check this import statement example to import RC Driver

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RC Demo App';

  constructor(){
    
  }
  ngOnInit() {
    console.log('Tushar please add code in this file for the library implementation. Thanks!');
  }
}
