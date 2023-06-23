import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //constructor() {}

  phraseFuck: string = "Fuck Richard";// Propriété de la class DataService

  fuckRichard() { // Method de la class DataService
    return this.phraseFuck; // Propriété de la class DataService
  }

  modifyName(newName: string) {
    if (this.phraseFuck.includes("Aujourd'hui")) {
      console.log("c'est dans la condition")
      this.phraseFuck = `Fuck Yvens Aujourd'hui`;
    } else {
      this.phraseFuck = `Fuck ${newName}`;
    }
  }

  addDay(day: string) {
    this.phraseFuck = this.phraseFuck + " " + day;
    // this.phraseFuck = `${this.phraseFuck} ${day}`;
  }
}
