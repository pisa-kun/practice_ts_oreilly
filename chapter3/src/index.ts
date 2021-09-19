// unknown
let a: unknown = 30 //unknown
let b = a === 123 // boolean
//let c = a + 10 //unknownとの演算ではできない

if(typeof a === 'number'){
    let d = a + 10
    console.log(d)
}
console.log(a, b)