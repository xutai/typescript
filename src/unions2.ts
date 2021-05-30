function getLength(obj: string | string[]) {
    return obj.length;
}

getLength('abcd')
getLength(['1', '2', '3'])



function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
        return [obj]
    } else {
        return obj
    }
}

console.log(wrapInArray('abc'))
console.log(wrapInArray(['def']))