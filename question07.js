function moveZeroes(nums) {
    let i = 0; // Pointer for the current position to insert the next nonzero element
  
    // Iterate through the array
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        // Found a nonzero element, move it to the current position i
        nums[i] = nums[j];
        i++;
      }
    }
  
    // Fill the remaining positions with zeros
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
  }
  
  // Example usage:
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  