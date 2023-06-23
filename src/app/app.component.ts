import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto_22_06';
  name: string = "Yvens";

  nameInParent: string = "Yvens";

  onReceiveMessage(text: string) {
    this.nameInParent = text;
  }

  constructor(private dataService: DataService) { }


  clickSurRichard() {
    console.log(this.dataService.fuckRichard());
  }

  // Modifier la phrase fuck Richard
  modifyTheSentence() {
    console.log("Je change le nom")
    this.dataService.modifyName("Marcos");
  }


  addTheDay() {
    console.log("J'ajoute le jour");
    this.dataService.addDay("Aujourd'hui");
  }




  synchronousFunction() {
    console.log("Bien joué rachid t'es un rapide");
  }

  asynchronousFunction() {
    new Promise((resolve, reject) => {
      let ok = false;
      setTimeout(() => {
        if (ok) {
          resolve(console.log("Marcos t'es en retard"));
        } else {
          reject(console.log("Trop Tard Marcos, la porte est fermée déjà"))
        }
      }, 6000)
    });
  }
}