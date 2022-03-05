let input = document.getElementById("screen");
let selectedAmal = "";
let numberOne = 0;
let selectedAmalOriginal = "";

function addNumber(number) {
    console.log(number);

    if (input.value.indexOf('.') !== -1 && number === '.'){

    } else {
        if (input.value === "0" && number !== '.' || selectedAmal.length > 0){
            input.value = number;
            selectedAmal = "";
        } else {
            input.value += number
        }
    }
}

function action(amal) {
    selectedAmal = amal;
    selectedAmalOriginal = amal;
    numberOne = input.value;
}

function equal() {

    let numberTwo = input.value;

    let result;

    if (selectedAmalOriginal === 'add'){
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedAmalOriginal === 'minus'){
        result = numberOne - numberTwo;
    } else if (selectedAmalOriginal === 'multiply'){
        result = numberOne * numberTwo;
    } else if (selectedAmalOriginal === 'divide'){
        result = numberOne / numberTwo;
    }
    input.value = result;
}

function clearScreen() {
    input.value = 0;
    numberOne = 0;
    selectedAmal = "";
    selectedAmalOriginal = "";
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 48){
        addNumber(0);
    } else if (event.keyCode === 49){
        addNumber(1);
    } else if (event.keyCode === 50){
        addNumber(2);
    } else if (event.keyCode === 51){
        addNumber(3);
    } else if (event.keyCode === 52){
        addNumber(4);
    } else if (event.keyCode === 53){
        addNumber(5);
    } else if (event.keyCode === 54){
        addNumber(6);
    } else if (event.keyCode === 55){
        addNumber(7);
    } else if (event.keyCode === 56){
        addNumber(8);
    } else if (event.keyCode === 57){
        addNumber(9);
    } else if (event.keyCode === 58){
        addNumber('.');
    } else if (event.keyCode === 107){
        action('add');
    } else if (event.keyCode === 109){
        action('minus');
    } else if (event.keyCode === 106){
        action('multiply');
    } else if (event.keyCode === 111){
        action('divide');
    } else if (event.keyCode === 13){
        equal();
    } else if (event.keyCode === 27){
        clearScreen();
    }
});

//HOMEWORK

let screen = document.getElementById("hw-screen");
let numberFirst = 0;
let fakeAmal = "";
let originalAmal ="";

function inNumber(number) {
    console.log(number);

    if (screen.value.indexOf('.') !== -1 && number === '.'){

    } else {
        if (screen.value === "0" && number !== '.' || fakeAmal.length > 0){
            screen.value = number;
            fakeAmal = "";
        } else {
            screen.value += number
        }
    }
}

function hwaction(amal) {
    fakeAmal = amal;
    originalAmal = amal;
    numberFirst = screen.value
}

function hwequal() {

    let numberSecond = screen.value;

    let hwresult;

    let minuser = screen.value.toString().slice(0,-1);

    if (originalAmal === 'add'){
        hwresult = parseFloat(numberFirst) + parseFloat(numberSecond)
    }else if (originalAmal === 'minus'){
        hwresult = numberFirst - numberSecond
    }else if (originalAmal === 'multiply'){
        hwresult = numberFirst * numberSecond;
    }else if (originalAmal === 'divide'){
        hwresult = numberFirst / numberSecond;
    }else if (originalAmal === 'backspace'){
        return minuser;
        hwresult = minuser
    }else if (originalAmal === 'root'){
        hwresult = Math.sqrt(numberFirst);
    }else if (originalAmal === 'pow'){
        hwresult = Math.pow(numberFirst,numberSecond);
    }else if (originalAmal === 'plus-minus'){
        if (screen.value === screen.value){
            hwresult = '-' + screen.value;
        }else if (screen.value.indexOf('-')){
            hwresult = screen.value
        }
    }
    screen.value = hwresult;
}

function clearedScreen() {
    screen.value = 0;
    numberFirst = 0;
    fakeAmal= "";
    originalAmal = "";
}


document.addEventListener("keydown", function (event) {
    if (event.keyCode === 48){
        inNumber(0);
    } else if (event.keyCode === 49){
        inNumber(1);
    } else if (event.keyCode === 50){
        inNumber(2);
    } else if (event.keyCode === 51){
        inNumber(3);
    } else if (event.keyCode === 52){
        inNumber(4);
    } else if (event.keyCode === 53){
        inNumber(5);
    } else if (event.keyCode === 54){
        inNumber(6);
    } else if (event.keyCode === 55){
        inNumber(7);
    } else if (event.keyCode === 56){
        inNumber(8);
    } else if (event.keyCode === 57){
        inNumber(9);
    } else if (event.keyCode === 58){
        inNumber('.');
    } else if (event.keyCode === 107){
        hwaction('add');
    } else if (event.keyCode === 109){
        hwaction('minus');
    } else if (event.keyCode === 106){
        hwaction('multiply');
    } else if (event.keyCode === 111){
        hwaction('divide');
    } else if (event.keyCode === 13){
        hwequal();
    } else if (event.keyCode === 27){
        clearedScreen();
    }
});