

function twoUniqueNumbers(nums, target){

    // create an empty object that will hold the two desired numbers
    let outputObject = {};
    
    // length of the given array
    let arrayLength = nums.length; 


    //Loop through the input array given
    for (let n = 0; n < arrayLength; n++){
        
        let number = target - nums[n];
        let positon = outputObject[number];

        //check if the current number has an additive compliment
        if (positon < arrayLength ){
            return [nums[outputObject[number]], nums[n]];
        }
        outputObject[nums[n]] = n;
    }

}

console.log(twoUniqueNumbers([2, 6, 5, 4], 10));
