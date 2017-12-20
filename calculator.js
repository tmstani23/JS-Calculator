let numPrev = [];
let numCurrent = [];
let numDisplay = [];
let tempAns = 0;
let add;
let subt;
let mult;
let divide;
let isCurrent = false
let clearClicked = false;

function storeNum(num) {
    //if operation button clicked:
    
    // if (isCurrent == true && numPrev.length > 0){
    //     //numDisplay2.push(num);
    //     numDisplay.push(num);
    //     numCurrent.push(num);
    //     //outputNum(numDisplay2);
    //     isCurrent = false;
    //     outputAns();
        
    // }
    if (numPrev.length > 0 && isCurrent == true){
        console.log("true");
        //Need to figure out how to chain subtract.  Can't distinguish between add and subtract here
        //add = true;
        numDisplay.push(num);
        numCurrent.push(num);
        console.log(numPrev + "numPrev", numCurrent + "numCurrent");
        outputNum(numDisplay);
        
        
            
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
        mult = false;
        divide = false;
        subt = false;
        isCurrent = true;
        numDisplay.push(' +');
        //numDisplay.join(" ");
        outputNum(numDisplay);
        outputAns(); 
    
    
    
}
function subtNum() {
    subt = true;
    add = false;
    mult = false;
    divide = false;
    isCurrent = true;
    numDisplay.push(" -");
    outputNum(numDisplay);
    outputAns()
}
function divideNum() {
    divide = true;
    subt = false;
    mult = false;
    add = false;
    isCurrent = true;
    numDisplay.push(" /");
    outputNum(numDisplay);
    outputAns();
}
function multNum() {
    mult = true;
    add = false;
    subt = false;
    divide = false;
    isCurrent = true;
    numDisplay.push(" *");
    outputNum(numDisplay);
    outputAns();
}
function clearAll(clear) {
    
    if(clear == true){
        numCurrent = [];
        numPrev = [];
        numDisplay = [0];
        add = false;
        subt = false;
        mult = false;
        divide = false;
        isCurrent = false;
        clear = false;
        outputNum(0);
        //outputAns();
    }
    else {
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
function outputAns(clear) {
    //merge all numbers in array into one number:
    if (numCurrent.length == 0) {
        console.log("numCurrentlength is 0")
        numCurrent.push(0);
    }
    
    numPrev = parseInt(numPrev.join(''));
    numCurrent = parseInt(numCurrent.join(''));
    console.log(numPrev);
    console.log(numCurrent);
    
    if (add == true) {
        console.log("add is true");
        tempAns = (numPrev + numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        
        console.log(tempAns + "tempans");
    }
    if (subt == true) {
        console.log("subt is true");
        tempAns = (numPrev - numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        //subt = false;
    }
    if (mult == true) {
        console.log("mult is true");
        //problem is here:
        
        if(numCurrent[0] = 0) {
            tempAns = numPrev * 1;
            console.log("is zero");
        }
        else {
            tempAns = numPrev * numCurrent;
            document.getElementById("outputP").innerHTML = tempAns;
            //mult = false;
        }
        
    }
    if (divide == true) {
        //console.log(typeof(numPrev));
        tempAns = (numPrev / numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        //divide = false;
    }
    //call clear function to reset variables
    
    clearAll(false);
    //push answer back into numPrev array
    numPrev.push(tempAns);
    numDisplay.push(tempAns);
    console.log(numPrev + "numPrev"); 
    console.log(numCurrent + "numCurrent");

    

    
    

}

//console.log(multNum(buttonInput1, buttonInput2));
//console.log(addNum(buttonInput1, buttonInput2));
//console.log(subtractNum(buttonInput1, buttonInput2));
//console.log(divideNum(buttonInput1, buttonInput2));