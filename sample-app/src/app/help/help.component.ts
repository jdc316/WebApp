import { Component, OnInit } from '@angular/core';
declare var jquery:any; //these are required for scrollspy to work
declare var $ :any;
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    $('body').scrollspy({ target: '#contentDropDown' })
  }

  
}




