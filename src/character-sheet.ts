export class CharacterSheet {
  name: string;
  id: string;
  position: SkillSheet;

  constructor(id: string, name: string, eng: number, mec: number, pil: number, nav: number) {
    this.position = {
      eng: eng,
      mec: mec,
      pil: pil,
      nav: nav
    };
    this.name = name;
    this.id = id;
  }

  toString() {
    return (this.id && 'name: ' + this.name || '') + 'eng: ' + this.position.eng + ' mec: ' + this.position.mec + ' pil: ' + this.position.pil + ' nav: ' + this.position.nav;
  }
}

class SkillSheet {
  eng: number;
  mec: number;
  pil: number;
  nav: number;
}
