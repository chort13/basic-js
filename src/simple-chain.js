const { NotImplementedError } = require('../extensions/index.js');
const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      return `You can't remove incorrect link!`;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
