function filter(array:number[], f :(item :number)=> boolean){
    let result = []
    for(let i = 0; i < array.length; i++){
        let item = array[i]
        if(f(item)){
            result.push(item)
        }
    }
    return result
}

//console.log(filter([1,2,3,4], (item :number) => item < 3 && item >0 ))
console.log(filter([1,2,3,4], _ => _ <3))

type Filter = {
    (array :number[], f :(item :number)=> boolean) :number[]
}