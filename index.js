function iterativeLog(array){
array.forEach((element, index)=>{
  console.log(`${index}: ${element}`);
})

}

function iterate(callback){
  var arr=[2,3,4,4,5,6]
  arr.forEach(callback)
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback)
}
