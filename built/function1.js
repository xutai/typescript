"use strict";
function returnAny() {
    return 123;
}
function returnNever() {
    returnNever();
}
function returnUnknown() {
    return;
}
function returnVoid() {
    return undefined;
}
