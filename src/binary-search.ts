// binary search

// questions for datasets
// 1. Is it ordered?
//      If it's ordered, you have new options for searching

// [            ]
//  0          N
// ---X0 = V?
// you don't have to do this
// you don't have to start at the first position, then the next, etc

// instead, do half at a time
// if its larger or smaller, do the left half or right half
// continue halfing your dataset until you get to V
// O(logN)

// if you're scanning anything, O(NlogN)


// search(arr, low, high, needle)
//  midpoint = low + (high - low) / 2
//  v = arr[midpoint]
//  if v = needle, 
//      return true
// else if v > needle
//      low = midpoint + 1
// else
//      high = midpoint

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2)
        const value = haystack[midpoint]

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }

    } while (low < high);

    return false;
}
