/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
//store all elements in the array from smallest to largest and the updates the bubble counter.
async function bubbleSort(array){
    for(let i = 0; i < array.length - 1; i++){  //runs through the array 
        for(let j = array.length - 1; j > 1; j--){//starts at the end of the array, compares the two elements that are right next to each other, when it updates, it moves from end to beginning.
            if(array[j].value < array[j-1].value) { //If array the current value is less than j-1, it will swap the bigger element to the end of the array. 
                swap(array, j, j-1); //Actually does the swapping for when array[j].value is less than array[j-1].value
                updateCounter(bubbleCounter); //Updates the counter so we can see how many swaps are occuring.
                await sleep(); //Times out for 500 milliseconds so we can actually see it.
            }
        }
    }
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right){ // function called quicksort with 3 parameters.
    if(right - left < 0) { // if right - left is less than 0, it will just return. 
        return; //return statement. This is our base case.
    }

    var index = await partition(array, left, right); // stores the partition function call in index.
    if(left < index - 1){ // if the left value is less than index - 1
        await quickSort(array, left, index - 1); //it will call quick sort to 
    }
    if(right > index){ //checks if right is greater than index
        await quickSort(array, index, right); //if it is, it will call the quickSort function.
    }
}

// TODOs 4 & 5: Implement partition
async function partition(array, left, right){ //created a function called partition that will partition the right box's time to make it faster.
    let pivot = array[Math.floor((right + left) / 2)].value; //creating a variable called "pivot and storing by finding hr middle index of the array and divides by 2."
    while(left < right) { //while left is less than right
        while(array[left].value < pivot){ //while the left value is less that pivot(a variable) it will increase "left" by 1.
            left++;
        }
        while(array[right].value > pivot){ //while the "right " value is greater than pivot 
            right-- //it will decrease "right" by 1.
        }
        if(left < right){ //if left is less than right it will call the swap function whichn swaps the positions of left and right.
            swap(array, left, right);
            updateCounter(quickCounter); //it will call the updateCounter function so the actual counter updates.
            await sleep();
        }
    }
   return left + 1; //returns the left value and adds 1.
}

// TODO 1: Implement swap
function swap(array, i, j){ 
    var temporary = array[i]; //Stores array[i] in temporary.
    array[i] = array[j]; //Value J is being stored as index I
    array[j] = temporary; //Temporary(array[i]) is being stored in array[j]
    drawSwap(array, i, j); //A function call that visually swaps the circles
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}