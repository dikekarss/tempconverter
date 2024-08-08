let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}

function convertTemperature() {
    let inputValue = document.getElementById('inputValue').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (inputUnit === outputUnit) {
        outputValue = inputValue;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
        outputValue = (inputValue * 9/5) + 32;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
        outputValue = (inputValue - 32) * 5/9;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}
