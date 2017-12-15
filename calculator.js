let numPrev = [];
let numCurrent = [];
let numDisplay1 = [];
let numDisplay2 = [];
let numDisplay = [];
let tempAns = 0;
let add = false;
let subt = false;
let mult = false;
let divide = false;
let isCurrent = false
let clearClicked = false;

function storeNum(num) {
    //if operation button clicked:
    
    if (isCurrent == true && numPrev.length > 0){
        //numDisplay2.push(num);
        numDisplay.push(num);
        numCurrent.push(num);
        //outputNum(numDisplay2);
        isCurrent = false;
        outputAns();
        
    }
    else if (isCurrent == true){
        //numDisplay2.push(num);
        numDisplay.push(num);
        numCurrent.push(num);
        //outputNum(numDisplay2);
        outputNum(numDisplay);
        isCurrent = false;
        
            
    }

    else {
        //numDisplay1.push(num);
        numDisplay.push(num)
        numPrev.push(num);
        //outputNum(numDisplay1);
        outputNum(numDisplay);
    }
}
function addNum() {
   
    add = true;
    isCurrent = true;
    numDisplay.push('+');
    numDisplay.join(" ");
    outputNum(numDisplay);
    
    
}
function subtNum() {
    subt = true;
    isCurrent = true;
    numDisplay.push(" -");
    outputNum(numDisplay);
}
function divideNum() {
    divide = true;
    isCurrent = true;
    numDisplay.push(" /");
    outputNum(numDisplay);
}
function multNum() {
    mult = true;
    isCurrent = true;
    numDisplay.push("*");
    outputNum(numDisplay);
}
function clearAll(clear) {
    
    numCurrent = [];
    numPrev = [];
    //numDisplay1 = [];
    //numDisplay2 = [];
    numDisplay = [];
    //isCurrent = false;
    //add = false;
    //subt = false;
    //mult = false;
    //divide = false;
    //isCurrent = false;

    if(clear == true){
        numPrev = [0];
        outputNum(0);
    }
}

// function clearCurrent() {
//     if (isCurrent == true) {
//         numCurrent = [0];
//     }
//     else {
//         numPrev = [0];
//     }
// }
function outputNum(num) {
    
    console.log(num);
    document.getElementById("outputP").innerHTML = num;
}
function outputAns() {
    //merge all numbers in array into one number:
    numPrev = parseInt(numPrev.join(''));
    numCurrent = parseInt(numCurrent.join(''));
    
    if (add == true) {
        //console.log(typeof(numPrev));
        tempAns = (numPrev + numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        add = false;
    }
    if (subt == true) {
        //console.log(typeof(numPrev));
        tempAns = (numPrev - numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        subt = false;
    }
    if (mult == true) {
        //console.log(typeof(numPrev));
        tempAns = (numPrev * numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        mult = false;
    }
    if (divide == true) {
        //console.log(typeof(numPrev));
        tempAns = (numPrev / numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        divide = false;
    }
    //call clear function to reset variables
    clearAll(false);
    //push answer back into numPrev array
    numPrev.push(tempAns);
    numDisplay.push(tempAns);
    //console.log(numPrev); 
    //console.log(numCurrent);

    

    
    

}

//console.log(multNum(buttonInput1, buttonInput2));
//console.log(addNum(buttonInput1, buttonInput2));
//console.log(subtractNum(buttonInput1, buttonInput2));
//console.log(divideNum(buttonInput1, buttonInput2));