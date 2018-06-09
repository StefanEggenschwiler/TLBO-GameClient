import {bindable, bindingMode} from 'aurelia-framework';
import $ from "jquery";

const uuidv4 = require('uuid/v4');

export class CharacterAttributeSlider {
  @bindable({ defaultBindingMode: bindingMode.toView }) fromValue: number;
  @bindable({ defaultBindingMode: bindingMode.toView }) toValue: number;
  @bindable({ defaultBindingMode: bindingMode.toView }) posChange: boolean;
  id: string;

  constructor(toValue:number, posChange:boolean) {
    this.id = uuidv4();
    this.toValue = toValue;
    this.fromValue = toValue;
    this.posChange = posChange;
    this.setSlider();
    console.log(this.id);
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
