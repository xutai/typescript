"use strict";
function getLength(obj) {
    return obj.length;
}
getLength('abcd');
getLength(['1', '2', '3']);
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    else {
        return obj;
    }
}
console.log(wrapInArray('abc'));
console.log(wrapInArray(['def']));
