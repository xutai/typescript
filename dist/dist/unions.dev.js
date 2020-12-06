"use strict";

function wrapInArray(obj) {
  if (typeof obj === 'string') {
    return [obj];
  } else {
    return obj;
  }
}

console.log(wrapInArray('abc'));
console.log(wrapInArray(['def']));