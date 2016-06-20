// Merge sort implemented according to Cameron's instruction
// on Khan Academy in JavaScript

var merge = function(array, start, mid, end) {
  var lowHalf = [];
  var highHalf = [];

  var k = start;
  var i; // index counter for low half
  var j; // index counter for high half
  for (i = 0; k <= mid; i++, k++) {
      lowHalf[i] = array[k];
  }
  for (j = 0; k <= end; j++, k++) {
      highHalf[j] = array[k];
  }

  k = start;
  i = 0;
  j = 0;
    
  while(i < lowHalf.length && j < highHalf.length){
    if(lowHalf[i] < highHalf[j]){
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }
    
  while(i < lowHalf.length){
    array[k] = lowHalf[i];
    i++;
    k++;
  }
  
  while(j < highHalf.length){
    array[k] = highHalf[j];
    j++;
    k++;
  }
};

var mergeSort = function(array, start, end) {
  if(start < end){
    var mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
  }
  return array;
};


var array = [14, 7, 3, 12, 9, 11, 6, 2];
console.log(mergeSort(array, 0, array.length-1));
var array2 = [6, 2, 89, -1, 7]
console.log(mergeSort(array2, 0, array2.length-1))
