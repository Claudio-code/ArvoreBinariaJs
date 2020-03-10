
module.exports = class Tree {

  constructor() {
    this.left = null;
    this.right = null;
  }

  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

}
