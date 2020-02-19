function strAndArr(str, arr){
let m = 0;
let newStr = [];
let strArr = str.split(""); 

for( let i = 0; i< strArr.length; i++){
	if(strArr[i] == "_"){
		strArr[i] = arr[m];
		m++;
		newStr.push(strArr[i]);
	}else{
		newStr.push(strArr[i]);
	}
}
let result = newStr.join("");
console.log(result);

}

strAndArr("_, we have a _.", ["Houston", "problem"])
