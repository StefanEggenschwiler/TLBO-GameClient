import { CharacterSheet } from 'character-sheet';
import * as firebase from 'firebase/app';
import 'firebase/database';

export class App {
  gameId: string;
  gameInit: boolean;
  sheets: CharacterSheet[] = [];
  ping: Boolean = false;

  constructor() {
  }

  initiateSheet() {
    console.log("gameId: ",this.gameId);
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
            component.sheets[i++].updateSkills(character.eng, character.mec, character.pil, character.nav);
          });
        });
      }
      component.gameInit = true;
      component.ping = !component.ping;
    });
  }
}
