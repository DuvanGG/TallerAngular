import { Component } from '@angular/core';

@Component({
    selector: 'app-vampiro',
    templateUrl: './vampiro.component.html',
    styleUrls: ['./vampiro.component.css']
})

export class VampiroComponent{
    imagen = ['assets/img/dracula.png', 'assets/img/mavis.png']
    nombre = ['Conde Dracula', 'Mavis'] 
}