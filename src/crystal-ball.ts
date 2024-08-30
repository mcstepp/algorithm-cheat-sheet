// Given two crystal balls that will break if dropped from a high enough
// distance, determine the exact spot in which it will break in the most
// optimized way

// breaking down a search without using a linear search
 
// [ f, f, f, f, f, t , ... , ... , ...]
// 0                                   N

// its generally an array of false until there is a true
// after that true, it will always break

// you can linear search via a for loop -- O(N) - bad!
// If you start with 1/2 and it comes back true, you have to walk from the beginning to the bad point
// O(1/2 N) = O(N) - bad!

// You have to jump in a fundamentally different unit
// In binary, you cut things in half
// In this case, you jump, and jump by sqrt of N

// Jump by sqrt N until it breaks
// when it breaks, walk backwards to last known good point
// worst case sqrt N + sqrt N = 2 sqrt N
// O (sqrt N)

export default function two_crystal_balls(breaks: boolean[]): number {
    // return the index in which it breaks
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // first, walk by the sqrt of N
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        // check for breaks
        if (breaks[i]) {
            break;
        }
    }

    // jump back sqrt of N
    i -= jumpAmount;

    // linearly walk forward at most sqrt of N until you find a break
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    // didn't find any
    return -1;
}