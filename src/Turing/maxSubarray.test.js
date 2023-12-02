function maxSubArray(nums) {
  let maxSum = 0
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const sum = nums.slice(l, r + 1).reduce((acc, el) => acc + el, 0)
    console.log('before', l, r, nums.slice(l, r + 1), sum, maxSum)

    if (sum > maxSum) maxSum = sum

    // if ((nums[l + 1] - nums[l]) > (nums[r - 1] - nums[r])) {
    if (nums[l] < nums[r]) {
      l++
    } else {
      r--
    }
    console.log('after', l, r, nums.slice(l, r + 1), maxSum)
  }
  return maxSum
};

test('maxSubarray', () => {
  // expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
  expect(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])).toEqual(6)
})
