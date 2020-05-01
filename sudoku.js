function sudoku (arr){
    let res;
  
// togher    
for(let num = 0; num< 9; num++){
        let checkArr = [];

        for( let i = 0; i<arr.length; i++){
            checkArr.push(arr[i][num]); 
        }
        res = checking(checkArr);
        if(!res) {return res}; 

    }

// ankyunagtser
let diagonal1 = [];
let diagonal2 = [];
    for(let i = 0; i< arr.length; i++){
        diagonal1.push( arr[i][i]);
        diagonal2.push(arr[i][arr.length - i])
    }
    res = checking(diagonal1);
     if(!res) {return res}; 
    res = checking(diagonal2);
     if(!res) {return res};


return true;
}

function checking(array){
    for (let i = 0; i <array.length; i++){
        if(array.indexOf(array[i]) !== i){
            return false;
        }
    }
return true;
}
