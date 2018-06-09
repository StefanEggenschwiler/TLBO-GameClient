export class CharacterSheet {
  name: string;
  id: string;
  skills: SkillSheet;

  constructor(id: string, name: string, eng: number, mec: number, pil: number, nav: number) {
    this.skills = {
      eng: eng,
      mec: mec,
      pil: pil,
      nav: nav
    };
    this.name = name;
    this.id = id;
  }

  toString() {
    return (this.id && 'name: ' + this.name || '') + 'eng: ' + this.skills.eng + ' mec: ' + this.skills.mec + ' pil: ' + this.skills.pil + ' nav: ' + this.skills.nav;
  }
}

class SkillSheet {
  eng: number;
  mec: number;
  pil: number;
  nav: number;
}
