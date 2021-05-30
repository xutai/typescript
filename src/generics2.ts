// 难点，待解决

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}


// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
// declare??
declare const backpack: Backpack<string> 

// ?????
// declare const backpack: Backpack<string> = {}

backpack.add('phone')

const object = backpack.get()

console.log(object)

backpack.add('phone')

const object2 = backpack.get()

console.log(object, object2)

