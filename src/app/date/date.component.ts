import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  constructor() {
   setInterval(()=>
   {
    let currentDate=new Date();
    this.dateMessage=currentDate.toLocaleDateString+" "+currentDate.toLocaleTimeString();
   },1000)
}
 addNumber(a: number,b: number)
 {return a+b;}
 

  ngOnInit() {
  }

}
