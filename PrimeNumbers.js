function range (a,b){
	let result = [];
	for (let i = a; i<= b; i++){
		if(isPrime(i)){
			result.push(i)
		}
	}console.log(result);
}
function isPrime(n){
	let count = 0;
	for (let m = 1; m<=n; m++){
		if(n%m == 0){
			count++;
		}
	}
	if(count == 2){
			return (true);
		}else{
			return (false);
		}
}
