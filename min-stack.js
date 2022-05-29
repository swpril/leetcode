/*
 *   Topics: Stack, Design
 *   Difficulty: Easy
 */

var MinStack = function() {
  this.stack = [];
  this.min = Infinity;
};

MinStack.prototype.push = function(val) {
  if (!this.stack.length) {
    this.stack.push(val);
    this.min = val;
  } else if (this.min < val) {
    this.stack.push(val);
  } else {
    const result = 2 * val - this.min;
    this.stack.push(result);
    this.min = val;
  }
};

MinStack.prototype.pop = function() {
  const num = this.stack.pop();
  if (num < this.min) {
    this.min = 2 * this.min - num;
  }
  return num;
};

MinStack.prototype.top = function() {
  const num = this.stack[this.stack.length - 1];
  if (num < this.min) {
    return this.min;
  }
  return num;
};

MinStack.prototype.getMin = function() {
  return this.min;
};
