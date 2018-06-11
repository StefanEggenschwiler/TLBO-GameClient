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

  constructor() {
    this.id = uuidv4();
  }

  attached() {
    this.setSlider();
    this.oldSheet = this.sheet;
    this.replaceColor();
  }

  /*valueChanged(updatedValue:number) {
    this.oldValue = this.currentValue;
    this.currentValue = updatedValue;
    if (this.oldValue > updatedValue) {
      this.posChange = false;
    } else {
      this.posChange = true;
    }
    this.setSlider();
  }*/

  setSlider() {
    $("#" + "a" + this.id).ionRangeSlider({
      type: "double",
      step: "1",
      grid: "true",
      hide_min_max: true,
      values: this.grid,
      from: this.sheet.skills.eng,
      to: this.oldSheet.skills.eng
    });
    $("#" + "b" + this.id).ionRangeSlider({
      type: "double",
      step: "1",
      grid: "true",
      hide_min_max: true,
      values: this.grid,
      from: this.sheet.skills.mec,
      to: this.sheet.skills.mec
    });
    $("#" + "c" + this.id).ionRangeSlider({
      type: "double",
      step: "1",
      grid: "true",
      hide_min_max: true,
      values: this.grid,
      from: this.sheet.skills.pil,
      to: this.sheet.skills.pil
    });
    $("#" + "d" + this.id).ionRangeSlider({
      type: "double",
      step: "1",
      grid: "true",
      hide_min_max: true,
      values: this.grid,
      from: this.sheet.skills.nav,
      to: this.sheet.skills.nav
    });
  }

  sheetChanged(newValue: CharacterSheet, oldValue: CharacterSheet) {
    this.oldSheet = newValue;
  }

  replaceColor() {

  }
}
