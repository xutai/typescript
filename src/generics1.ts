// 通用术语 泛型 范型

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>


let stringArray: StringArray = ['1', '2']
let numberArray: NumberArray = [1, 2]
let objectWithNameArray: ObjectWithNameArray = [{
    name: 'xutai'
}]