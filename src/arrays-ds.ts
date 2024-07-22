// Arrays
// What is an array?
//
// Contiguous memory space -- unbreaking memory space that contains a certain amount of bytes
/* 
*  0100101...
* [{            },{             }]
*   0                          N
*   \ 4 bytes /
*  |___________|
*     32-bit
*/

// Example
// a = int[3]
// Reading a[0] : 
// go to memory address of a, then add in the offset of 0 multiplied by how big my type is
// if your type is 32 bits orfour bytes index one has to be four bytes into the array 
// or into the memory space.

// Insertion
// Really just overwriting, since you can't grow an array. The space is already allocated. 
// go to memory address of a, add in width of the type, multipy by offset

// Deletion
// You don't actually delete in contiguous memory. You can set it to zero, 
// or null where null is the zeroth value. 
// you just tell yourself there's nothing there

// Big O
// All O(1) -- you never have to iterate over the entire array

// No insertAt, no push or pop, can't grow it