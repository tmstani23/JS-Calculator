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
        //console.log("true");
        //Need to figure out how to chain subtract.  Can't distinguish between add and subtract here
        //add = true;
        numDisplay.push(num);
        numCurrent.push(num);
        //console.log(numPrev + "numPrev", numCurrent + "numCurrent");
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
        if (numPrev.length >= 1 && numCurrent.length >=1) {
            //console.log(true + "addnum")
            outputAns();
            add = true;
            mult = false;
            divide = false;
            subt = false;
            isCurrent = true;
            numDisplay.push(` + `);
            //numDisplay.join(" ");
            outputNum(numDisplay);
        
        }
        else{
        //console.log(tempAns + "after plus");
        add = true;
        mult = false;
        divide = false;
        subt = false;
        isCurrent = true;
        numDisplay.push(` + `);
        //console.log(false + "addnum")
        //console.log(numDisplay);
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
function clearAll(clear) {
    
    if(clear == true){
        numCurrent = [];
        numPrev = [];
        numDisplay = [tempAns];
        //tempAns = 0;
        add = false;
        subt = false;
        mult = false;
        divide = false;
        isCurrent = false;
        clear = false;
        
        outputNum(numDisplay);
        
       // outputAns();
    }
    else if(clear == "ac") {
        
        numCurrent = [];
        numPrev = [];
        numDisplay = [0];
        tempAns = 0;
        add = false;
        subt = false;
        mult = false;
        divide = false;
        isCurrent = false;
        clear = false; 
        document.getElementById("outputP").innerHTML = tempAns;
        outputNum(0);
        outputAns();

    }
    else {
        numCurrent = [];
        numPrev = [];
    }
   

   
}

function clearCurrent() {
    numCurrent = [0];
    if (numPrev.length == 1 && numCurrent.length == 0) {
        console.log("reset answer to zero");
        numPrev = [0];
        
    }
    //console.log(numCurrent.length + "current");
    
    //if 
    if (numDisplay.length >= 1) {
        //numDisplay = numDisplay.pop();
        // numDisplay.pop();
        // numDisplay = [numDisplay];
        numDisplay = [tempAns];
        //numDisplay.push(numCurrent);
        
        console.log(numDisplay + "pop");
    }
    else {
        numDisplay = numCurrent;
        console.log("numdisplay = numcurrent");
    }
    //numDisplay = [numPrev, numCurrent];
    
    outputNum(numDisplay);
}
function outputNum(num) {
    if(numDisplay[0] == 0 && numDisplay.length >=2){
        numDisplay.shift();
        numDisplay = [numDisplay];
    }
    
    num = numDisplay.join('');
    
    //numDisplay = [numDisplay];
    console.log(num);
    document.getElementById("numDisplayP").innerHTML = num;
}
function outputAns(clear) {
    //merge all numbers in array into one number:
    if (numCurrent.length == 0) {
        //console.log("numCurrentlength is 0")
        numCurrent.push(0);
    }
    if (numPrev.length == 0) {
        //console.log("numCurrentlength is 0")
        numPrev.push(0);
    }
    
    numPrev = parseFloat(numPrev.join(''));
    numCurrent = parseFloat(numCurrent.join(''));
    console.log(numPrev + "numPrev");
    console.log(numCurrent + "numCurrent");
    
    
    if (add == true) {
        //console.log("add is true");
        // if (tempAns != 0 && numCurrent == 0 && numPrev == 0)  {
        //   console.log(tempAns + "tempanstrue");  
        //   tempAns = tempAns;  
        // }
        // else {
            //console.log(numPrev, numCurrent);
            tempAns = (numPrev + numCurrent);
            //console.log(tempAns + "tempans");
        // }
        
        document.getElementById("outputP").innerHTML = tempAns;
        
        
    }
    if (subt == true) {
        //console.log("subt is true");
        tempAns = (numPrev - numCurrent);
        document.getElementById("outputP").innerHTML = tempAns;
        //subt = false;
    }
    if (mult == true) {
        //console.log("mult is true");
        //problem is here:
        
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
        if(numCurrent == 0) {
            tempAns = numPrev * 1;
            //console.log("is zero");
        }
        else {
            tempAns = numPrev / numCurrent;
            document.getElementById("outputP").innerHTML = tempAns;

        }
        
    }
    //call clear function to reset variables
    //clear = false;
    clearAll(clear);
    //push answer back into numPrev array
    numPrev.push(tempAns);
    //numDisplay.push(tempAns);
    //console.log(numPrev + "numPrev"); 
    //console.log(numCurrent + "numCurrent");

}

