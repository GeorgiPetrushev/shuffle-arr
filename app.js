let arr = ['1','2','3','4','5','6'];

// function shuffle(array) {
    
// let tempArr = [];
// let counter = array.length;
// for(let i =0; i<counter ; i++){
//     let randNumFromArr = Math.floor((Math.random() * array.length));
//     tempArr.push(array[randNumFromArr]);
//     array.splice(randNumFromArr, 1)
// }
// return tempArr;
// }


class MixArr{
    shuffle(array) {
        let tempArr = [];
        let counter = array.length;
        for(let i =0; i<counter ; i++){
            let randNumFromArr = Math.floor((Math.random() * array.length));
            tempArr.push(array[randNumFromArr]);
            array.splice(randNumFromArr, 1)
        }

        return tempArr;
    }
}

let mix = new MixArr();

console.log(mix.shuffle(arr));