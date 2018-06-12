import {bindable, bindingMode, customElement} from 'aurelia-framework';
import * as $ from 'jquery';
import {CharacterSheet} from "./character-sheet";

const uuidv4 = require('uuid/v4');

@customElement('attribute-slider')
export class AttributeSlider {
  @bindable sheet: CharacterSheet;
  id: string;
  grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  currentSkills: number[] = [];
  oldSkills: number[] = [];

  engSlider;
  mecSlider;
  pilSlider;
  navSlider;

  constructor() {
    console.log("constructor()");
    this.id = uuidv4();
    this.oldSkills = [];
  }

  attached() {
    this.engSlider = $("#" + "a" + this.id);
    this.mecSlider = $("#" + "b" + this.id);
    this.pilSlider = $("#" + "c" + this.id);
    this.navSlider = $("#" + "d" + this.id);

    this.currentSkills = [];
    this.currentSkills.push(this.sheet.skills.eng, this.sheet.skills.mec, this.sheet.skills.pil, this.sheet.skills.nav);
    this.oldSkills = this.currentSkills.slice(0);
    this.setSlider();
    //console.log("attached()");
    //console.log(this.currentSkills, this.oldSkills);
  }

  setSlider() {
    this.engSlider.slider({
      id: "0" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.currentSkills[0], this.oldSkills[0]]
    });
    this.mecSlider.slider({
      id: "1" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.currentSkills[1], this.oldSkills[1]]
    });
    this.pilSlider.slider({
      id: "2" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.currentSkills[2], this.oldSkills[2]]
    });
    this.navSlider.slider({
      id: "3" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.currentSkills[3], this.oldSkills[3]]
    });
  }

  sheetChanged(newValue, oldValue) {
    //this.currentSkills = [];
    //this.currentSkills.push(newValue.skills.eng, newValue.skills.mec, newValue.skills.pil, newValue.skills.nav);
    console.log("sheetChanged()");
    console.log(oldValue, newValue);
    //this.updateSliderColor();
  }

  updateSliderColor() {
    for (let i in this.currentSkills) {
      if (this.currentSkills[i] > this.oldSkills[i]) {
        $('#' + i + this.id + ' .slider-handle').css('background','forestgreen');
        $('#' + i + this.id + ' .slider-selection').css('background','limegreen');
      } else {
        $('#' + i + this.id + ' .slider-handle').css('background','darkred');
        $('#' + i + this.id + ' .slider-selection').css('background','red');
      }
      if (this.currentSkills[i] == this.oldSkills[i]) {
        $('#' + i + this.id + ' .slider-handle').css('background','dimgrey');
      }
    }
    this.oldSkills = [];
    this.oldSkills.push(this.sheet.skills.eng, this.sheet.skills.mec, this.sheet.skills.pil, this.sheet.skills.nav);
    console.log("updateSliderColor()");
    //console.log(this.currentSkills, this.oldSkills);
  }
}
