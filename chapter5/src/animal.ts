interface Animal{
    readonly name :string
    eat(food :string) :void
    sleep(hours :number) :void
}

interface Feline{
    meow() :void
}

class Cat implements Animal, Feline{
    name = 'wanwan'
    public eat(food :string) :void{
        console.info("Ate some", food, ". Mmm!")
    }
    public sleep(hours :number) :void{
        console.info("sleep for", hours, "hours")
    }
    public meow() :void{
        console.info("meow")
    }
}

let cat = new Cat()
cat.eat("dog")
cat.sleep(5)
cat.meow()