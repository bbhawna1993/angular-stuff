import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
 
  message: string="hello from date component"
  constructor() { }

  ngOnInit() {
  }

}
