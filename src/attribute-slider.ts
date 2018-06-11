import {bindable, bindingMode, customElement} from 'aurelia-framework';
import * as $ from 'jquery';
import {CharacterSheet} from "./character-sheet";
require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

const uuidv4 = require('uuid/v4');

@customElement('attribute-slider')
export class AttributeSlider {
  @bindable sheet: CharacterSheet;
  //oldValue: number;
  //posChange: boolean;
  id: string;

  /*constructor(oldValue:number, posChange:boolean) {
    this.id = uuidv4();
    this.oldValue = oldValue;
    this.currentValue = oldValue;
    this.posChange = posChange;
    this.setSlider();
    console.log(this.id);
  }*/

  constructor() {
    this.id = uuidv4();
    this.setSlider();
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
  }
}
