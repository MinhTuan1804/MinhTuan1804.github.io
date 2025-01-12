const display = document.getElementById("display");
const display1 = document.getElementById("display-1");

function ToDisplay(input) {
    const value = display.value;
    const operators = ['+', '-', '*', '/','.'];
    if (operators.includes(value.slice(-1)) && operators.includes(input)) {
        return; 
    }

    if(display.value.length >= display.maxLength)
    {
        return;
    }

    if (value === '0' && !operators.includes(input)) {
        display.value = input; 
    } else {
        display.value += input; 
    }
}

function Clear(){
    display.value = "0";
    display1.value ="";
}

function Delete(){
    display.value = display.value.slice(0,-1);
    if(display.value == "")
        display.value = "0";
}

function calculate() {
    try {
        const value = display.value; 
        const result = eval(value);
        display.value = result.toString().slice(0,15);
        if(result === Infinity){
            display.value = `Can't Divide By Zero`
            setTimeout(() =>{
                display.value = '0';
            },2000);
        }
        if (display1) {
            display1.value = `${value} =`;
        }
    } catch (error) {
        display.value = `Can't Calculate`;
        setTimeout(() => {
            display.value = "Please Input Again";
            display.style.fontSize = "55px";
            setTimeout(() => {
                display.value = "0";
                display.style.fontSize = ""; 
            }, 2000);
        }, 1000);
    }
}


function Square1(){
    const value = parseFloat(display.value);
    if(isNaN(display.value))
    {
        display.value = `Can't Calculate`;
        setTimeout(() => {
            display.value = "Please Input Again";
            display.style.fontSize = "55px";
            setTimeout(() => {
                display.value = "0";
                display.style.fontSize = ""; 
            },2000);
        }, 1000);
    }
    const result = Math.pow(display.value,2);
    display.value = result;
    if(display1)
    {
           display1.value = `${value}²`
    }
}
function Square2(){
    const value = parseFloat(display.value);
    if(isNaN(display.value))
        {
            display.value = `Can't Calculate`;
            setTimeout(() => {
                display.value = "Please Input Again";
                display.style.fontSize = "55px";
                setTimeout(() => {
                    display.value = "0";
                    display.style.fontSize = ""; 
                },2000);
            }, 1000);
        }
     const result = Math.pow(display.value,3);
     display.value = result;
     if(display1){
        display1.value = `${value}³`
     }
}

function SquareRoot(){
   
    if(isNaN(display.value)){
        display.value = `Can't Calculate`;
            setTimeout(() => {
                display.value = "Please Input Again";
                display.style.fontSize = "55px";
                setTimeout(() => {
                    display.value = "0";
                    display.style.fontSize = ""; 
                },2000);
            }, 1000);
    } 
        const value =  parseFloat(display.value);
        const result = Math.sqrt(value);
        display.value = result.toString().slice(0,15);
        if(display1){
            display1.value = `sqrt(${value})`
        }
    
}


function Percent(){
    try {
        const value = parseFloat(display.value);
        const result = value/100;
        display.value =result;
        if(display1){
            display1.value = `${value}%`
        }
    } catch (error) {
        display.value = `Can't Calculate`;
        setTimeout(() => {
            display.value = "Please Input Again";
            display.style.fontSize = "45px";
            setTimeout(() => {
                display.value = "0";
                display.style.fontSize = ""; 
            },2000);
        }, 1000);
    }
    
}