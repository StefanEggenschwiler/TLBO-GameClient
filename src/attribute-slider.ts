import {bindable, bindingMode} from 'aurelia-framework';
import * as $ from 'jquery';

const uuidv4 = require('uuid/v4');

export class AttributeSlider {
  @bindable fromValue: string;
  @bindable toValue: string;
  posChange: boolean;
  id: string;

  /*constructor(fromValue:number, posChange:boolean) {
    this.id = uuidv4();
    this.fromValue = fromValue;
    this.toValue = fromValue;
    this.posChange = posChange;
    this.setSlider();
    console.log(this.id);
  }*/

  constructor() {
    this.id = uuidv4();
  }

  attached() {
    console.log(this.fromValue + " - " + this.toValue);
    this.setSlider();
  }

  valueChanged(updatedValue:number) {
    this.toValue = this.fromValue;
    this.fromValue = updatedValue+'';
    if (Number(this.toValue) > updatedValue) {
      this.posChange = false;
    } else {
      this.posChange = true;
    }
    this.setSlider();
  }

  setSlider() {
    $('#'+this.id).slider({ id: this.id, min: 0, max: 25, range: true, value: [Number(this.fromValue), Number(this.toValue)] });

  }
}
