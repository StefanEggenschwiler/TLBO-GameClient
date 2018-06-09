import { CharacterSheet } from 'character-sheet';
import * as firebase from 'firebase/app';
import 'firebase/database';

export class App {
  message = 'Hello World!';

  gameId: string;
  gameInit: boolean;
  sheets: CharacterSheet[] = [];

  constructor() {
    this.sheets.push(new CharacterSheet("1", "Sirdick", 5, 10, 15, 20));
    this.sheets.push(new CharacterSheet("2", "Vanessa", 3, 6, 25, 12));
    this.sheets.push(new CharacterSheet("3", "Olav", 1, 2, 3, 4));

    console.log(this.sheets);

    //this.initiateSheet(this.sheets)
  }

  initiateSheet(sheets: CharacterSheet[]) {
    sheets = [];
    console.log(this.gameId);
    this.gameInit = true;
    console.log(this.sheets);
    var sheetRef = firebase.database().ref('games/' + this.gameId + '/turns').limitToLast(1);
    sheetRef.on('value', function(snapshot) {
      snapshot.forEach(function (childSnapshot) {
        childSnapshot.val().characters.forEach(function (character) {
          sheets.push(new CharacterSheet(character.key, character.name, character.eng, character.mec, character.pil, character.nav));
        });
        console.log(sheets);
      });
    });
  }
}
