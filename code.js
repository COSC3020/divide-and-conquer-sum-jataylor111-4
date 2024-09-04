function divideAndConquerSum(a) {
    // Default base cases unless you need to run the helper
    if (a.length == 0) {
        return 0;
    }
    else if (a.length == 1) {
        return a[0];
    }
    else {
        // Calls the helper with the array, the initial starting index which is always 0 and the length for the max index
        return helper(a, 0, a.length)
    }

    return a;
}

function helper(a, left, right) {
    // Returns the first value of the array if it's an array of length 1
    if (right - left == 1) {
        return a[left];
    }
    // performs the add operation when it's of length 2
    else if (right - left == 2) {
        return a[left] + a[right - 1];
    }

    // Divides the array into 3 parts
    let divides = Math.floor((right - left) / 3);
    let lowerThird = left + divides;
    let upperThird = left + 2 * divides;
    // Runs the recursive calls using the 3 divided parts, making use of the 3 sections of the array
    return (helper(a, left, lowerThird) + helper(a, lowerThird, upperThird) + helper(a, upperThird, right));

}
