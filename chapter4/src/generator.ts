function* CreateFibonacciGenerator(){
    let a = 0
    let b = 1
    while(true){
        yield a;
        [a, b] = [b, a+b] 
    }
}

let f  = CreateFibonacciGenerator()

for(let i = 0; i < 10; i++){
    console.log(f.next())
}