let arr = [1,2,3];


let answer= (arr, target) => {
	var empArr = [];
	for (var i=0; i < arr.length; i ++){
		for(var j=i+1; j<=arr.length; j++){
if (arr[i] + arr[j] === target){
				if(arr[i] !== arr[j]){
                
                empArr.push(arr[i]);
                empArr.push(arr[j]);
                }
			}

		}
	}
    return empArr;
}
answer([1,2,3,4,5], 5);


////////////////////////////
function decToHex(val)
{
	switch(val){
		case 10:
		return 'A';
		break;
		case 11:
		return 'B';
		break;
		case 12:
		return 'C';
		break;
		case 13:
		return 'D';
		break;
		case 14:
		return 'E';
		break; 
		default:
		return val;
		break;
	}

}
function convert(color){
	let hex1, hex2;
	let firstLetter = parseInt(color/16);
	let secondLetter = color % 16;
	
		 hex1 = decToHex(firstLetter);
		 hex2 = decToHex(secondLetter);
	return(`${hex1}${hex2}`);
}


function hextoDec(val){
	switch(val){
		case 'A':
		return 10;
		break;
		case 'B':
		return 11;
		break;
		case 'C':
		return 12;
		break;
		case 'D':
		return 13;
		break;
		case 'E':
		return 14;
		break; 
		default:
		return Number(val);
		break;
	}

}
function alterArr (arr){
	let array = [];

	for (let i = 0; i< arr.length; i+=2){
			
			array.push((arr[i]*16) + arr[i+1]);
	}
	return array;

}

function colorConvertor(value){

	if(value.includes('#')){
		return hexToRgb(value);
	} 
	else{
		return rgbToHex(value);
	}

}
function hexToRgb(hex){
	let arr = [];
	let val;
	for (let i=1; i < hex.length; i++){
		val = hextoDec(hex.charAt(i));
		arr.push(val);
	}
	return alterArr(arr);
	//return arr;
}
function rgbToHex(r, g, b)
{	
	
	return ("#"+convert(r)+convert(g)+convert(b));


}

