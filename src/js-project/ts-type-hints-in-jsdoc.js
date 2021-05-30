/**
 * example 1
 * 
 */

// /** @type {number} */
// var x;

// x = 0; // OK
// x = false; // OK?!



/**
 * example 2
 * 
 */


// // @ts-check
// /** @type {number} */
// var x;

// x = 0; // OK
// x = false; // Not OK




/**
 * example 3.1
 * 
 */


// // @ts-check
// /** @type {number} */
// var x;

// x = 0; // OK
// // @ts-ignore
// x = false; // Not OK



/**
 * example 3.2
 * 
 */



// // @ts-check
// /** @type {number} */
// var x;

// x = 0; // OK
// // @ts-expect-error
// x = false; // Not OK



/** @type {number} */
var x;

x = 0; // OK
// x = false; // Not OK


