function plusOne(digits) {
    const n = digits.length;
  
    // Iterate from the least significant digit to the most significant digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by one
      digits[i]++;
  
      // If there is no carry-over, we can return the digits array
      if (digits[i] < 10) {
        return digits;
      }
  
      // Carry-over occurs, set the current digit to 0 and continue to the next digit
      digits[i] = 0;
    }
  
    // If all digits have a carry-over, we need to add an additional digit at the beginning
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  