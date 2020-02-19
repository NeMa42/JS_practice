function strAndArr(str, arr){
let m = 0;

let strArr = str.split(""); 
for( let i = 0; i< strArr.length; i++){
	if(strArr[i] == "_"){
		strArr[i] = arr[m];
		m++;
	}
}
let result = strArr.join("")
console.log(result)
}

strAndArr("_, we have a _.", ["Houston", "problem"])
