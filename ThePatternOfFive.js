let number = 5;
let res = "";

for(let i = 0; i<number*2; i++){
let row = "";

    if (i <= number){
        for (let m = 1; m<= i ; m++){
        row += m;
        }
    }
    else{
        for(let j = 1; j <number*2- i; j++ ){
             row += j;
        } 
    }
res += row;
res += "\n";
}
console.log(res)
