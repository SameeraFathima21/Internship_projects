function validateInput() {
    const input = document.getElementById('temperatureInput');
    const value = input.value;

    if (isNaN(value) || value === '') {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = '';
    }
}

function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;
    let result;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        return;
    }

    if (unit === 'Celsius') {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        result = `${temp} °C = ${fahrenheit.toFixed(2)} °F = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'Fahrenheit') {
        const celsius = (temp - 32) * 5/9;
        const kelvin = (temp - 32) * 5/9 + 273.15;
        result = `${temp} °F = ${celsius.toFixed(2)} °C = ${kelvin.toFixed(2)} K`;
    } else if (unit === 'Kelvin') {
        const celsius = temp - 273.15;
        const fahrenheit = (temp - 273.15) * 9/5 + 32;
        result = `${temp} K = ${celsius.toFixed(2)} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    document.getElementById('result').innerText = result;
}