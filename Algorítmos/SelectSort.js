function algoritmosort(array){
    const len = array.length
        for (let i = 0; i < len-1; i++){
            let minIndex = i
            for (let j = i + 1; j < len; j++){
                if (array[j] < array[minIndex]){
                    minIndex = j
                }
            }
            if (minIndex !== i){
                [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
} 

const array = [20,11,7,12,21,22,66]
algoritmosort(array)
console.log(JSON.stringify(array))