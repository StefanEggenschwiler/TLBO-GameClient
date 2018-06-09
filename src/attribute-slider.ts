import {bindable, bindingMode} from 'aurelia-framework';
import * as $ from 'jquery';

const uuidv4 = require('uuid/v4');

export class AttributeSlider {
  @bindable({ defaultBindingMode: bindingMode.toView }) fromValue: number;
  @bindable({ defaultBindingMode: bindingMode.toView }) toValue: number;
  @bindable({ defaultBindingMode: bindingMode.toView }) posChange: boolean;
  id: string;
  slider;

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
    console.log(this.id);
    this.setSlider();
    this.fromValue = 5;
    this.toValue = 9;
  }

  valueChanged(updatedValue:number) {
    this.toValue = this.fromValue;
    this.fromValue = updatedValue;
    if (this.toValue > updatedValue) {
      this.posChange = false;
    } else {
      this.posChange = true;
    }
    this.setSlider();
  }

  setSlider() {
    $(this.id).slider({ id: this.id, min: 0, max: 25, range: true, value: [this.fromValue, this.toValue] });
  }
}
