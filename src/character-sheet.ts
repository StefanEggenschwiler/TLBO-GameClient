export class CharacterSheet {
  name: string;
  id: string;
  currentSkills: SkillSheet;
  oldSkills: SkillSheet;

  constructor(id: string, name: string, eng: number, mec: number, pil: number, nav: number) {
    this.currentSkills = {
      eng: eng,
      mec: mec,
      pil: pil,
      nav: nav
    };
    this.oldSkills = {
      eng: eng,
      mec: mec,
      pil: pil,
      nav: nav
    };
    this.name = name;
    this.id = id;
  }
}

class SkillSheet {
  eng: number;
  mec: number;
  pil: number;
  nav: number;
}
