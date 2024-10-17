import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.scss']
})
export class ContacComponent implements OnInit {
  intersted=['BackEnd','FrontEnd','DataBase']
  constructor() { }
  Email :string="hasansuliman50@gmail.com"

  ngOnInit(): void {
  }

}
