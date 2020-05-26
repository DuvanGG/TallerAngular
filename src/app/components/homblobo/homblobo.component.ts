import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homblobo',
  templateUrl: './homblobo.component.html',
  styleUrls: ['./homblobo.component.css']
})
export class HombloboComponent implements OnInit {

  imagen = ['assets/img/trabajar.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
