import { KeyFormat } from "crypto"

interface IMyMap<K,V>{
    get(key :K) :V,
    set(key :K, value :V) :void
}
class MyMap<K,V> implements IMyMap<K,V>{
    private key :K
    private value :V

    constructor(key :K, value :V){
        this.key = key
        this.value = value
    }

    get(key :K) :V{
        return this.value
    }

    set(key :K, value :V) :void{
        this.key = key
        this.value = value
    }
}

let a = new MyMap<string, number>('K', 1)
let b = new MyMap('K', true)

a.get('k')
b.set('k', false)

console.log(a)
console.log(b.get('k'))