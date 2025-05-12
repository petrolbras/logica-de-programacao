function algoritmo(array){
    let len = array.length
        for (let i = 0; i < len-1; i++){
            let min_index = i
            for (let j = 0; i < len; j++){
                if (array[j] < array[min_index]){
                    min_index = j
                }
            }
            if (min_index !== i){
                swap(array, i, min_index)
            }
        }
}   

function swap(array, x, y){
    let t = array[x]
    array[x] = array[y]
    array[y] = t
}


let array = [30,24,5,120,52]

algoritmo(array)

console.log(algoritmo(array))