class Animal{}
class Bird extends Animal{
    chirp(){}
}
class Crow extends Bird{
    cow(){}
}

function chirp(bird: Bird): Bird{
    bird.chirp()
    return bird
}

//chirp(new Animal)
chirp(new Bird)
chirp(new Crow)

// cloneはBirdを受け取り、Birdを返す関数f
function clone(f: (b: Bird)=> Bird): void{
    let parent = new Bird
    let babyBird = f(parent)
    // Animalにはchirpが存在しない
    babyBird.chirp()
}

function birdToBird(b :Bird): Bird{
    console.log("call bird to bird")
    return b
}
clone(birdToBird)

function birdToCrow(b :Bird): Crow{
    console.log("call bird to crow")
    return new Crow
}
clone(birdToCrow)

function birdToAnimal(b :Bird): Animal{
    console.log("call bird to crow")
    return new Animal
}
clone(birdToAnimal)