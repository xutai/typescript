function returnAny() : any {
    return 123
}

function returnNever() : never {
    returnNever()
}

function returnUnknown() : unknown {
    // must return something?
    // "unknown" excludes "never" includes "void" and "any"
    return
}

function returnVoid() : void {
    // return 
    return undefined
}

