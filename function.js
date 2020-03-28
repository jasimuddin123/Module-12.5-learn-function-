

function evenify_all(nums){

    for (var i = 0; i < nums.length; i++){

        const num = nums[i];
        
        if(num % 2 == 0){

            console.log(num, ': is even Number');
        }
        else{
            console.log(num *2, ': is odd Number');
        }
     
    }

}


nums  = [44, 20, 30, 5, 6, 7, 131, 25];

evenify_all(nums);


friends_age = [55, 50, 66, 77, 88, 93, 25, 21, 33];

evenify_all(friends_age);