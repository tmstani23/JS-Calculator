let numPrev = [];
let numCurrent = [];
let numDisplay = [];
let tempAns = 0;
let add;
let subt;
let mult;
let divide;
let isCurrent = false
let clear = false;

//Function that stores numbers when a number button is clicked
function storeNum(num) {
    //If one number is stored and an operation button has been clicked:
    if (numPrev.length > 0 && isCurrent == true){
        //Store the number in a number display array:
        numDisplay.push(num);
        //Store the function input number in the numCurrent array:
        numCurrent.push(num);
        //console.log(numPrev + "numPrev", numCurrent + "numCurrent");
        //Call the output number function to display 
            //and pass in the numDisplay array:
        outputNum(numDisplay);
    }
    else {
        //Add input number to previous and display arrays:
        numDisplay.push(num)
        numPrev.push(num);
        //Call the output number function to display 
            //and pass in the numDisplay array:
        outputNum(numDisplay);
    }
}
//These functions assign an operation tag, resets all other operation tags, 
    //and calls the output answer function:
function addNum() {
    //If numbers are stored in the prev and current arrays:    
    if (numPrev.length >= 1 && numCurrent.length >=1) {
            //console.log(true + "addnum")
            //Call the answer function then apply operation tags:
            outputAns();
            add = true;
            mult = false;
            divide = false;
            subt = false;
            isCurrent = true;
            //Add operation symbol to the display array:
            numDisplay.push(` + `);
            outputNum(numDisplay);
        
    }
    else{
    //console.log(tempAns + "after plus");
    //Apply operation tags first then call answer function:
    add = true;
    mult = false;
    divide = false;
    subt = false;
    isCurrent = true;
    //Add operation symbol to the display array:
    numDisplay.push(` + `);
    outputNum(numDisplay);
    outputAns();
    }
         
}

function subtNum() {
    if (numPrev.length >= 1 && numCurrent.length >=1) {
        outputAns()
        subt = true;
        add = false;
        mult = false;
        divide = false;
        isCurrent = true;
        numDisplay.push(` - `);
        outputNum(numDisplay);
    
    }
    else {
        subt = true;
        add = false;
        mult = false;
        divide = false;
        isCurrent = true;
        numDisplay.push(` - `);
        outputNum(numDisplay);
        outputAns()
    }
}

function divideNum() {
    if (numPrev.length >= 1 && numCurrent.length >=1) {
        outputAns()
        subt = false;
        add = false;
        mult = false;
        divide = true;
        isCurrent = true;
        numDisplay.push(` / `);
        outputNum(numDisplay);
    
    }
    else {
        subt = false;
        add = false;
        mult = false;
        divide = true;
        isCurrent = true;
        numDisplay.push(` / `);
        outputNum(numDisplay);
        outputAns()
    }
}

function multNum() {
    if (numPrev.length >= 1 && numCurrent.length >=1) {
        outputAns()
        subt = false;
        add = false;
        mult = true;
        divide = false;
        isCurrent = true;
        numDisplay.push(` * `);
        outputNum(numDisplay);
    
    }
    else {
        subt = false;
        add = false;
        mult = true;
        divide = false;
        isCurrent = true;
        numDisplay.push(` * `);
        outputNum(numDisplay);
        outputAns()
    }
}
//This function clears all arrays and display values
//Used when the AC or "=" button is clicked:
function clearAll(clear) {
    //if equal sign button was clicked previously:
    if(clear == true){
        numCurrent = [];
        numPrev = [];
        //Set display array to contain temporary answer:
        numDisplay = [tempAns];
        add = false;
        subt = false;
        mult = false;
        divide = false;
        isCurrent = false;
        clear = false;
        outputNum(numDisplay);
    }
    //If AC button was clicked previously:
    else if(clear == "ac") {
        numCurrent = [];
        numPrev = [];
        //Set display array to contain temporary answer:
        numDisplay = [0];
        //Set temp answer to 0;
        tempAns = 0;
        add = false;
        subt = false;
        mult = false;
        divide = false;
        isCurrent = false;
        clear = false; 
        document.getElementById("outputP").innerHTML = tempAns;
        //Display 0
        outputNum(0);
    }
    //Else only reset num current and prev arrays:
    else {
        numCurrent = [];
        numPrev = [];
    }

}
//This function adjusts arrays and display when the CE button is clicked:
function clearCurrent() {
    //Reset the current array to an array containing 0:
    numCurrent = [0];
    //Reset the diplay to temp answer
    numDisplay = [tempAns];
    //Output the display: 
    outputNum(numDisplay);
}
//This function outputs an input array or number on the page by adjusting the html
function outputNum(num) {
    //If the first display element is a 0
        //and the total amount of numbers in the display is > 2
    if(numDisplay[0] == 0 && numDisplay.length >=2){
        //Remove the 0 and reset the display array:
        numDisplay.shift();
        numDisplay = [numDisplay];
    }
    //Convert the display array into a string with no spaces:
    num = numDisplay.join('');
    //console.log(num);
    //Display the string to the screen:
    document.getElementById("numDisplayP").innerHTML = num;
}
//This function performs main calculator operations and outputs the answer to the screen:
function outputAns(clear) {
    //If either of the number arrays are empty add a zero to the array:
    if (numCurrent.length == 0) {
        //console.log("numCurrentlength is 0")
        numCurrent.push(0);
    }
    if (numPrev.length == 0) {
        //console.log("numCurrentlength is 0")
        numPrev.push(0);
    }
    //Join the number arrays into strings then parse them - 
        //into decimal numbers:
    numPrev = parseFloat(numPrev.join(''));
    numCurrent = parseFloat(numCurrent.join(''));
    //console.log(numPrev + "numPrev");
    //console.log(numCurrent + "numCurrent");
    
    //These conditions check if an operation is true -
        //then perform the operation and display to screen:
    if (add == true) {
       tempAns = (numPrev + numCurrent);
        //console.log(tempAns + "tempans");
        document.getElementById("outputP").innerHTML = tempAns;
    }
    
    if (subt == true) {
        //console.log("subt is true");
        tempAns = (numPrev - numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
    }

    if (mult == true) {
        //console.log("mult is true");
        //If only one number has been entered multiply it by one:
        if(numCurrent == 0) {
            tempAns = numPrev * 1;
            //console.log("is zero");
        }

        else {
            tempAns = numPrev * numCurrent;
            document.getElementById("outputP").innerHTML = tempAns;
            //mult = false;
        }
        
    }
    
    if (divide == true) {
        //If only one number has been entered multiply it by one:
        if(numCurrent == 0) {
            tempAns = numPrev * 1;
            //console.log("is zero");
        }
        else {
            tempAns = numPrev / numCurrent;
            document.getElementById("outputP").innerHTML = tempAns;
        }
        
    }
    //Call clear function to reset variables
    clearAll(clear);
    //Push answer back into numPrev array
    numPrev.push(tempAns);
    
    //console.log(numPrev + "numPrev"); 
    //console.log(numCurrent + "numCurrent");
}

