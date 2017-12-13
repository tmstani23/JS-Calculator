let numInput1 = [];
let numInput2 = [];
let numDisplay1 = "";
let numDisplay2 = "";
let add = false;
let hasOperation = false

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
function subtractNum(num1, num2) {
    return num1 - num2;
}
function divideNum(num1, num2) {
    return num1 / num2;
}
function multNum(num1, num2) {
    return num1 * num2;
}
function outputNum(num) {
    
    document.getElementById("outputP").innerHTML = num;
}
function outputAns() {
    //merge all numbers in array into one number:
    numInput1 = parseInt(numInput1.join(''));
    numInput2 = parseInt(numInput2.join(''));
    
    if (add == true) {
        console.log(typeof(numInput1));
        document.getElementById("outputP").innerHTML = numInput1 + numInput2;    
    }
    //reset all flags:
    hasOperation = false;
    add = false;
    //reset second number:
    numInput2 = [];
    numInput1 = tempNum;
    

    
    

}

//console.log(multNum(buttonInput1, buttonInput2));
//console.log(addNum(buttonInput1, buttonInput2));
//console.log(subtractNum(buttonInput1, buttonInput2));
//console.log(divideNum(buttonInput1, buttonInput2));