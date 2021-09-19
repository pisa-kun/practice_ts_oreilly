import { lstat } from "fs"

let ob1 = {
    at1: 'name',
    at2: 21
}

console.log(ob1.at1, ob1.at2)

let ob2:{at3: string} = {
    at3: "attribute"//string
}
console.log(ob2.at3)

let obj: {
    firstName: string,
    lastName: string
} = {
    firstName: 'natsuha',
    lastName: 'arisugawa'
}
console.log(obj.lastName, obj.firstName)

class Person{
    constructor(
        public firstName: string,
        public lastName: string
    ){}
}
let person = new Person("rinze", "morino")
console.log(person.lastName, person.firstName)

let user:{
    readonly firstName: string
} = {
    firstName: 'honoke'
}
console.log(user.firstName)
//user.firstName = 'honoka'