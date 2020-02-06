let NumArray = new Array();

for ( i = 0; i< 7; i++){
	NumArray.push(Math.round(Math.random()*10))
}
    NumArray.forEach(function(item, index, array){
    	console.log(item);
    })