let buttonInput1 = [];
let buttonInput2 = [];

function addNum(num1, num2) {
    return num1 + num2;
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
    buttonInput1.push(num)
    document.getElementById("outputP").innerHTML = num;
}
function outputAns() {
    document.getElementById("outputP").innerHTML = buttonInput1;

}

//console.log(multNum(buttonInput1, buttonInput2));
//console.log(addNum(buttonInput1, buttonInput2));
//console.log(subtractNum(buttonInput1, buttonInput2));
//console.log(divideNum(buttonInput1, buttonInput2));