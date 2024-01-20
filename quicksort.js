function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order

  if (arr.length <= 1) return arr

  let right = []
  let left = []

  let pivot = arr[0]
  
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i]
    if (element > pivot) {
      right.push(element)
    } else {
      left.push(element)
    }
  }

  let sorted = [...quicksort(left), pivot, ...quicksort(right)]

  return sorted

}


module.exports = [quicksort];
