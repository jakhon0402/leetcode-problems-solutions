/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let s = nums.reduce((prev, curr) => prev + curr);
  let prev = 0,
    k = -1;

  for (let i = 0; i < nums.length; i++) {
    if (prev == s - prev - nums[i]) {
      k = i;
      break;
    }
    prev = prev + nums[i];
  }
  return k;
};
