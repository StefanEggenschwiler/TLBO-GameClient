import {bindable, customElement} from 'aurelia-framework';
import * as $ from 'jquery';
import {CharacterSheet} from "./character-sheet";

const uuidv4 = require('uuid/v4');

@customElement('attribute-slider')
export class AttributeSlider {
  @bindable sheet: CharacterSheet;
  @bindable ping: Boolean;
  id: string;
  grid: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

  engSlider;
  mecSlider;
  pilSlider;
  navSlider;

  constructor() {
    this.id = uuidv4();
  }

  attached() {
    this.engSlider = $("#" + "a" + this.id);
    this.mecSlider = $("#" + "b" + this.id);
    this.pilSlider = $("#" + "c" + this.id);
    this.navSlider = $("#" + "d" + this.id);

    this.setSlider();
  }

  setSlider() {
    this.engSlider.slider({
      id: "0" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.oldSkills.eng, this.sheet.currentSkills.eng]
    });
    this.mecSlider.slider({
      id: "1" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.oldSkills.mec, this.sheet.currentSkills.mec]
    });
    this.pilSlider.slider({
      id: "2" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.oldSkills.pil, this.sheet.currentSkills.pil]
    });
    this.navSlider.slider({
      id: "3" + this.id,
      ticks: this.grid,
      ticks_labels: this.grid,
      value: [this.sheet.oldSkills.nav, this.sheet.currentSkills.nav]
    });
  }

  pingChanged(newValue, oldValue) {
    this.refreshSlider(this.sheet.getChanges())
  }

  updateSliderColor(changes: Boolean[]) {
    for (let i in changes) {
      if (changes[i] == null) {
        $('#' + i + this.id + ' .slider-handle').css('background','dimgrey');
      } else {
        if (changes[i]) {
          $('#' + i + this.id + ' .slider-handle').css('background','forestgreen');
          $('#' + i + this.id + ' .slider-selection').css('background','limegreen');
        } else {
          $('#' + i + this.id + ' .slider-handle').css('background','darkred');
          $('#' + i + this.id + ' .slider-selection').css('background','red');
        }
      }
    }
  }

  refreshSlider(changes: Boolean[]) {
    /*
    Workaround for CSS related problems in the bootstrap-slider package.
    */
    let valuesEng: number[] = [this.sheet.oldSkills.eng, this.sheet.currentSkills.eng];
    let valuesMec: number[] = [this.sheet.oldSkills.mec, this.sheet.currentSkills.mec];
    let valuesPil: number[] = [this.sheet.oldSkills.pil, this.sheet.currentSkills.pil];
    let valuesNav: number[] = [this.sheet.oldSkills.nav, this.sheet.currentSkills.nav];

    if (!changes[0]) {
      valuesEng = [this.sheet.currentSkills.eng, this.sheet.oldSkills.eng];
    }
    if (!changes[1]) {
      valuesMec = [this.sheet.currentSkills.mec, this.sheet.oldSkills.mec];
    }
    if (!changes[2]) {
      valuesPil = [this.sheet.currentSkills.pil, this.sheet.oldSkills.pil];
    }
    if (!changes[3]) {
      valuesNav = [this.sheet.currentSkills.nav, this.sheet.oldSkills.nav];
    }
    $("#" + "a" + this.id).slider('setValue', valuesEng, true, true);
    $("#" + "b" + this.id).slider('setValue', valuesMec, true, true);
    $("#" + "c" + this.id).slider('setValue', valuesPil, true, true);
    $("#" + "d" + this.id).slider('setValue', valuesNav, true, true);

    this.updateSliderColor(changes);
  }
}
