// type StringArray = Array<string>
// type NumberArray = Array<number>
// type ObjectWithNameArray = Array<{ name: string }>

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

declare const backpack: Backpack<string>

const object = backpack.get()

// backpack.add(23)

console.log(object)

