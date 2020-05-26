import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momia',
  templateUrl: './momia.component.html',
  styleUrls: ['./momia.component.css']
})
export class MomiaComponent implements OnInit {

  fotos =['assets/img/momia1.png','assets/img/momia2.png','assets/img/momia3.png']



  constructor() { }

  ngOnInit(): void {
  }

}
