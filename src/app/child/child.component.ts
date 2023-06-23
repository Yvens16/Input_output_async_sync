import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// Rajout du decorateur Input dans l'import
// import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() radioSkyRock = new EventEmitter<string>();

  clickFunction(){
    this.radioSkyRock.emit("Fuck Richard");
  }

  constructor() {}

  ngOnInit(): void {}

  // Le nom de la variable que l'on va utiliser dans le template
  @Input() nameInChild: string = "";

}
