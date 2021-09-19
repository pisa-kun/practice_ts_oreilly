type Age = number
type Person2 = {
    name: string
    age: Age
}

let age = 21 // number
let driver: Person2 = {
    name: 'damayu',
    age: age
}
console.log(driver.name, driver.age)