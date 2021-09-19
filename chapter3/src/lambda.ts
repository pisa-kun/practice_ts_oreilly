let array = [1, 3, 5, 6, 7, 8, 'a', 2, 'houkura', 10, 'npm install']

let r_array = array.map(_ => {
    if(typeof _ === 'number'){
        return _ * 3
    }
    return _.toUpperCase()
})
console.log(r_array)