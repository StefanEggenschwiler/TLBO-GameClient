import { CharacterSheet } from 'character-sheet';
import * as firebase from 'firebase/app';
import 'firebase/database';

export class App {
  gameId: string;
  gameInit: boolean;
  sheets: CharacterSheet[] = [];

  constructor() {
  }

  initiateSheet() {
    console.log(this.gameId);
    this.sheets = [];
    let component = this;
    let sheetRef = firebase.database().ref('games/' + this.gameId + '/turns').limitToLast(1);
    sheetRef.on('value', function(snapshot) {
      if (component.sheets.length === 0) {
        console.log("init");
        snapshot.forEach(function (childSnapshot) {
          childSnapshot.val().characters.forEach(function (character) {
            component.sheets.push(new CharacterSheet(childSnapshot.key, character.name, character.eng, character.mec, character.pil, character.nav));
          });
        });
      } else {
        console.log("update");
        let i = 0;
        snapshot.forEach(function (childSnapshot) {
          childSnapshot.val().characters.forEach(function (character) {
            component.sheets[i].name = 'Trolldorf'+i;
            component.sheets[i].skills.eng = character.eng;
            component.sheets[i].skills.mec = character.mec;
            component.sheets[i].skills.pil = character.pil;
            component.sheets[i++].skills.nav = character.nav;
          });
        });
      }
      console.log(component.sheets);
      component.gameInit = true;
    });
  }
}
