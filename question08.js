function findErrorNums(nums) {
    const n = nums.length;
    const set = new Set();
    let duplicate = -1;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = 0;
  
    for (let num of nums) {
      if (set.has(num)) {
        duplicate = num;
      } else {
        set.add(num);
        arraySum += num;
      }
    }
  
    const missing = totalSum - arraySum;
  
    return [duplicate, missing];
  }
  
  // Example usage:
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  