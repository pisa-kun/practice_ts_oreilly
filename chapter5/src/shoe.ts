
interface Shoe {
    purpose :string
}

class BalletFlat implements Shoe{
    purpose = 'Dancing'
}

class Boot implements Shoe{
    purpose = 'woodcutting'
}

class Sneaker implements Shoe{
    purpose = 'walking'
}

let Shoe = {
    create(type : 'balletFlat' | 'boot' | 'sneaker'): Shoe{
        switch(type){
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

let b = Shoe.create('balletFlat') // Shoe
console.log(b.purpose)
let s = Shoe.create('sneaker') // Shoe
console.log(s.purpose)

// interface instance change
s = b
console.log(s.purpose)