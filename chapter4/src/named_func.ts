// 名前付き関数
function greet(name: string){
    return 'hello ' + name
}

// 関数式
let greet2 = function(name: string){
    return 'hello ' + name
}

// アロー関数式
let greet3 = (name: string) => 'hello ' + name
let greet3dash = (name: string) => {
    let tmp: string
    tmp = 'hello ' + name
    return tmp
}


let greet4 = (name: string) => 
    'heihei ' + name

// 関数コンストラクター
let greet5 = new Function('name', 'return "hello" + name')

console.log(greet3('chiyoko'))

function sumVariadicSafe(...numbers: number[]): number{
    return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVariadicSafe(1,2,3))
console.log(sumVariadicSafe(1,2,3,4))

function add(a: number, b: number){
    return a + b
}

add.call(this, 1, 2)
let addF = add.bind(null, 1, 2)
console.log('call: ', addF())

console.log('funcType greet: ', typeof(greet3))

type Greet = (a :number, b :number) => number

let gf :Greet = (a :number, b :number) => a * b;
console.log(gf(10, 20))
console.log(typeof(gf))