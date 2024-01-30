function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1; // Search in the right half
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
    }

    return -1; 
}

// Example usage:
const nums = [3,4, 5, 6, 7, 0, 1, 2];
const target = 2;
console.log(search(nums, target)); 
