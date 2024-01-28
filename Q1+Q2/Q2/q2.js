function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

const nums1 = [3, 0, 1];
const result1 = missingNumber(nums1);
console.log(result1);  

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result2 = missingNumber(nums2);
console.log(result2);  // Output: 8

const nums3 = [0, 1];
const result3 = missingNumber(nums3);
console.log(result3); 
