export class CharacterSheet {
  task: string;
  name: string;
  id: string;
  currentSkills: SkillSheet;
  oldSkills: SkillSheet;

  engChange: Boolean = null;
  mecChange: Boolean = null;
  pilChange: Boolean = null;
  navChange: Boolean = null;

  constructor(id: string, name: string, eng: number, mec: number, pil: number, nav: number, task: string) {
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
    this.task = task;
  }

  updateSkills(eng: number, mec: number, pil: number, nav: number, task: string) {
    this.oldSkills = Object.assign({}, this.currentSkills);

    this.currentSkills.eng = eng;
    this.currentSkills.mec = mec;
    this.currentSkills.pil = pil;
    this.currentSkills.nav = nav;

    this.task = task;
  }

  getChanges() {
    this.engChange = this.oldSkills.eng < this.currentSkills.eng;
    this.mecChange = this.oldSkills.mec < this.currentSkills.mec;
    this.pilChange = this.oldSkills.pil < this.currentSkills.pil;
    this.navChange = this.oldSkills.nav < this.currentSkills.nav;
    if (this.oldSkills.eng == this.currentSkills.eng) {
      this.engChange = null;
    }
    if (this.oldSkills.mec == this.currentSkills.mec) {
      this.mecChange = null;
    }
    if (this.oldSkills.pil == this.currentSkills.pil) {
      this.pilChange = null;
    }
    if (this.oldSkills.nav == this.currentSkills.nav) {
      this.navChange = null;
    }
    return [this.engChange, this.mecChange, this.pilChange, this.navChange];
  }
}

class SkillSheet {
  eng: number;
  mec: number;
  pil: number;
  nav: number;
}
