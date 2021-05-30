interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
declare const backpack: Backpack<string>;
declare const object: string;
declare const object2: string;
