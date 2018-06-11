import {bindable, bindingMode, customElement} from 'aurelia-framework';
import * as $ from 'jquery';
import {CharacterSheet} from "./character-sheet";

const uuidv4 = require('uuid/v4');

@customElement('attribute-slider')
export class AttributeSlider {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) sheet: CharacterSheet;
  oldSheet: CharacterSheet;
  id: string;
  grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  engineering;
  mechanics;
  piloting;
  navigation;

  constructor() {
    this.id = uuidv4();
  }

  attached() {
    this.engineering = $("#" + "a" + this.id);
    this.mechanics = $("#" + "b" + this.id);
    this.piloting = $("#" + "c" + this.id);
    this.navigation = $("#" + "d" + this.id);

    this.setSlider();
    this.oldSheet = this.sheet;
    this.replaceColor();
  }

  setSlider() {
    this.engineering.slider({
      id: "positive",
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.skills.eng, this.sheet.skills.eng]
    });
    this.mechanics.slider({
      id: "negative",
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.skills.mec, this.sheet.skills.mec]
    });
    this.piloting.slider({
      id: "positive",
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.skills.pil, this.sheet.skills.pil]
    });
    this.navigation.slider({
      id: "neutral",
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.skills.nav, this.sheet.skills.nav]
    });
  }

  sheetChanged(newValue: CharacterSheet, oldValue: CharacterSheet) {
    this.oldSheet = newValue;
  }

  replaceColor() {
  }
}
