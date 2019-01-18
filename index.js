// Implement a function that first finds and removes the smallest element in a sorted array.
// Implement the merge function to combine two sorted arrays into one larger array.
// Implement the mergeSort algorithm using the previous functions that you wrote.



function findMinAndRemoveSorted(array) {
  let minArr = array[0];
  let minIndex;

  for (let i = 0; i < array.length; i++) {
    if(array[i] < minArr) {
      minIndex = i;
      minArr = array[i];
    } //end of if statement
  } //end of for-loop
    array.splice(minIndex, 1) //moving the elements on the list
    return minArr;
} //end of function

//sort first
function merge(arr1, arr2) {
  let sort = [];
  while(arr1.length != 0 && arr2.length != 0) {
    if(arr1[0] < arr2[0]) {
      sort.push(findMinAndRemoveSorted(arr1))
    } else {
      sort.push(findMinAndRemoveSorted(arr2))
    }
  }
  return sort.concat(arr1).concat(arr2)

}

function mergeSort(array) {
   let sortedList;
   let split = array.length/2;
   let firstHalf = array.slice(0, split)
   let secondHalf = array.slice(split, array.length)

   if(array.length < 2) {
     return array
   } else {
    sortedList = merge(mergeSort(firstHalf), mergeSort(secondHalf))
   }
   return sortedList

}
