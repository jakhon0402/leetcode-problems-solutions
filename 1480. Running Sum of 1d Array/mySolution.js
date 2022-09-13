/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let s = 0;
  let run = [];
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    run.push(s);
  }
  return run;
};
