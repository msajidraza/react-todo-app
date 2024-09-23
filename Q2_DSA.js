
function twoSum(nums, target) {
    // Edge case handling
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input must be an array with at least two numbers.");
    }
    
    const map = new Map(); // To store the numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement
        
        // If complement exists in the map, we found a pair
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices
        }
        
        // Otherwise, store the current number and its index
        map.set(nums[i], i);
    }
    
    // If no solution is found, throw an error
    throw new Error("No two sum solution found.");
}

// Example usage:
const nums = [2, 3, 4, 5, 6, 15];
const target = 9;

try {
    const result = twoSum(nums, target);
    console.log(result); 
} catch (error) {
    console.error(error.message);
}
