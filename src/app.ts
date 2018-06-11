import { CharacterSheet } from 'character-sheet';
import * as firebase from 'firebase/app';
import 'firebase/database';

export class App {
  gameId: string;
  gameInit: boolean;
  public sheets: CharacterSheet[] = [];

  constructor() {
  }

  initiateSheet() {
    console.log(this.gameId);
    this.sheets = this.loadFirebase();
  }

  loadFirebase() {
    let component = this;
    let sheets:  CharacterSheet[] = [];
    let sheetRef = firebase.database().ref('games/' + this.gameId + '/turns').limitToLast(1);
    sheetRef.on('value', function(snapshot) {
      snapshot.forEach(function (childSnapshot) {
        childSnapshot.val().characters.forEach(function (character) {
          sheets.push(new CharacterSheet(childSnapshot.key, character.name, character.eng, character.mec, character.pil, character.nav));
        });
      });
      console.log(sheets);
      component.gameInit = true;
    });
    return sheets;
  }
}
