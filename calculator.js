let numInput1 = [];
let numInput2 = [];
let numDisplay1 = "";
let numDisplay2 = "";
let tempAns = 0;
let add = false;
let subt = false;
let mult = false;
let divide = false;
let hasOperation = false
let clearClicked = false;

function storeNum(num) {
    //if operation button clicked:
    if (hasOperation == true){
        numDisplay2 += "" + num;
        numInput2.push(num);
        outputNum(numDisplay2);    
    }
    else {
        numDisplay1 += "" + num;
        numInput1.push(num);
        outputNum(numDisplay1);
    }
}
function addNum() {
    add = true;
    hasOperation = true;
}
function subtNum() {
    subt = true;
    hasOperation = true;
}
function divideNum() {
    divide = true;
    hasOperation = true;
}
function multNum() {
    mult = true;
    hasOperation = true;
}
function clearAll(clear) {
    
    numInput2 = [];
    numInput1 = [];
    numDisplay1 = "";
    numDisplay2 = "";
    hasOperation = false;
    add = false;
    subt = false;
    mult = false;
    divide = false;

    if(clear == true){
        numInput1 = [0];
        outputNum(0);
    }
    
    
   
  
       
}
function outputNum(num) {
    
    document.getElementById("outputP").innerHTML = num;
}
function outputAns() {
    //merge all numbers in array into one number:
    numInput1 = parseInt(numInput1.join(''));
    numInput2 = parseInt(numInput2.join(''));
    
    if (add == true) {
        //console.log(typeof(numInput1));
        tempAns = (numInput1 + numInput2);
        document.getElementById("outputP").innerHTML = tempAns;
    }
    if (subt == true) {
        //console.log(typeof(numInput1));
        tempAns = (numInput1 - numInput2);
        document.getElementById("outputP").innerHTML = tempAns;
    }
    if (mult == true) {
        //console.log(typeof(numInput1));
        tempAns = (numInput1 * numInput2);
        document.getElementById("outputP").innerHTML = tempAns;
    }
    if (divide == true) {
        //console.log(typeof(numInput1));
        tempAns = (numInput1 / numInput2);
        document.getElementById("outputP").innerHTML = tempAns;
    }
    //call clear function to reset variables
    clearAll(false);
    //push answer back into numInput1 array
    numInput1.push(tempAns);
    console.log(numInput1); 

    

    
    

}

//console.log(multNum(buttonInput1, buttonInput2));
//console.log(addNum(buttonInput1, buttonInput2));
//console.log(subtractNum(buttonInput1, buttonInput2));
//console.log(divideNum(buttonInput1, buttonInput2));