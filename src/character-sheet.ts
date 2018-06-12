export class CharacterSheet {
  name: string;
  id: string;
  currentSkills: SkillSheet;
  oldSkills: SkillSheet;

  engChange: Boolean = null;
  mecChange: Boolean = null;
  pilChange: Boolean = null;
  navChange: Boolean = null;

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

  updateSkills(eng: number, mec: number, pil: number, nav: number) {
    this.oldSkills.eng = this.currentSkills.eng;
    this.oldSkills.mec = this.currentSkills.mec;
    this.oldSkills.pil = this.currentSkills.pil;
    this.oldSkills.nav = this.currentSkills.nav;

    this.currentSkills.eng = eng;
    this.currentSkills.mec = mec;
    this.currentSkills.pil = pil;
    this.currentSkills.nav = nav;
  }

  getChanges() {
    if (this.oldSkills.eng < this.currentSkills.eng) {
      this.engChange = true;
    } else {
      this.engChange = false;
    }
    if (this.oldSkills.mec < this.currentSkills.mec) {
      this.mecChange = true;
    } else {
      this.mecChange = false;
    }
    if (this.oldSkills.pil < this.currentSkills.pil) {
      this.pilChange = true;
    } else {
      this.pilChange = false;
    }
    if (this.oldSkills.nav < this.currentSkills.nav) {
      this.navChange = true;
    } else {
      this.navChange = false;
    }
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
