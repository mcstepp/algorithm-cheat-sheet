// Important Concepts
//
// 1. growth is with respect to the input
// 
// BUT depending on the size of the input, you can't trade growth for memory forever
// bound to the amount of memory you have available
// even more important in languages like Go and Javascript where memory sticks around longer, grows faster
// until it halts programs for cleanup 

function sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }

    return sum;
}

// Complexity: O(N) -- linear
// Hint: Look for the loops
// `n` has length, loop runs for the length of the string
// if `n` grows by 50%, the loop has to run that many more times


function new_sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i)
    }

    return sum;
}

// Complexity: O(N) -- linear, not 2N
//
// 2. Constants are dropped
//
// O(N) -> O(2N) 
// Big O complexity is meant to describe the upper bound of the algorithm, or the growth of the algorithm.
// The constant becomes irrelevant.
// Not trying to measure exact CPU units.The question is "how does it grow?"
//
// Practical vs Theoretical differences
// O(N) is faster than O(N^2)
// Doesn't mean it's always faster for small inputs
// If the constant that is dropped is small enough, N^2 may be practically faster

function another_sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);

        // Capital E
        if (charCode === 69) {
            return sum
        }

        sum += charCode;
    }

    return sum;
}

// Complexity: O(N) -- linear
//
// 3. Big O often describes worst case
// Any E in the string will terminate the loop early, unless it's the last character
// Still O(N)
// Best case: O(1) -- E is the first character of the string

/*
 *
 * MORE EXAMPLES
 *  
 */

// O(N^2)
// Hint: count the loops
// 2 nested loops = n^2

function n_sq_sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += n.charCodeAt(i);
        }
    }
    return sum;
}

// O(N^3)
// 3 nested loops = n^3

function n_cb_sum_char_codes(n: string): number {
    let sum = 0;

    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += n.charCodeAt(i);
            }
        }
    }
    return sum;
}

// O(n log n)
// Quicksort TBD
// Half the amount of space you need to search, but you need to search the whole space once for every time.
// go over n characters, then you halve how much you need to do, 
// then you go over n characters you halve how much you need to look at, etc

// O(log n)
// Binary search trees TBDs
// Halve the input each time until you reach zero

// O(sqrt(n))
// TBD