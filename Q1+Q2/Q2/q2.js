function missingNumber(nums) {
  const n = nums.length;

  // Calculate the expected sum of numbers from 0 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the given array
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the expected and actual sums
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example 1
const nums1 = [3, 0, 1];
const result1 = missingNumber(nums1);
console.log(result1);  // Output: 2

// Example 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result2 = missingNumber(nums2);
console.log(result2);  // Output: 8

// Example 3
const nums3 = [0, 1];
const result3 = missingNumber(nums3);
console.log(result3); 