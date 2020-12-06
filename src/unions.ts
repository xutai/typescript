type Jobs = "ui" | "frontend" | "backend"


function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
        return [obj]
    } else {
        return obj
    }
}

console.log(wrapInArray('abc'))
console.log(wrapInArray(['def']))