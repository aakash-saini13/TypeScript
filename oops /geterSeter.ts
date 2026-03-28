class Student {
  private _name: string = "";

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }
}

const s1 = new Student();
s1.name = "Aakash";     
console.log(s1.name);   