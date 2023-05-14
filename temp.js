// function to perform the temperature conversion
function convert(toUnit) {
	var temp = document.getElementById("temp").value;
	var unit = document.getElementById("unit").value;

	if (unit ==  "celsius") {
        if (toUnit == "fahrenheit") {
        document.getElementById("result").value = (temp * 9/5) + 32;
        }
        else if (toUnit == "kelvin") {
        document.getElementById("result").value = parseFloat(temp) + 273.15;
        }
        else {
        document.getElementById("result").value = temp;
        }
        }
        else if (unit == "fahrenheit") {
        if (toUnit == "celsius") {
        document.getElementById("result").value = (temp - 32) * 5/9;
        }
        else if (toUnit == "kelvin") {
        document.getElementById("result").value = (temp - 32) * 5/9 + 273.15;
        }
        else {
        document.getElementById("result").value = temp;
        }
        }
        else if (unit == "kelvin") {
        if (toUnit == "celsius") {
        document.getElementById("result").value = parseFloat(temp) - 273.15;
        }
        else if (toUnit == "fahrenheit") {
        document.getElementById("result").value = (temp - 273.15) * 9/5 + 32;
        }
        else {
        document.getElementById("result").value = temp;
        }
        }
        }
        
        // add event listeners to the conversion buttons
        document.getElementById("convertCelsius").addEventListener("click", function() {
        convert("celsius");
        document.getElementById("convertCelsius").classList.add("active");
        document.getElementById("convertFahrenheit").classList.remove("active");
        document.getElementById("convertKelvin").classList.remove("active");
        });
        
        document.getElementById("convertFahrenheit").addEventListener("click", function() {
        convert("fahrenheit");
        document.getElementById("convertCelsius").classList.remove("active");
        document.getElementById("convertFahrenheit").classList.add("active");
        document.getElementById("convertKelvin").classList.remove("active");
        });
        
        document.getElementById("convertKelvin").addEventListener("click", function() {
        convert("kelvin");
        document.getElementById("convertCelsius").classList.remove("active");
        document.getElementById("convertFahrenheit").classList.remove("active");
        document.getElementById("convertKelvin").classList.add("active");
        });
        
        // add event listener to the reset button
        document.getElementById("reset").addEventListener("click", function() {
        reset();
        });
        
        // function to reset the form
        function reset() {
        document.getElementById("temp").value = "";
        document.getElementById("unit").selectedIndex = 0;
        document.getElementById("result").value = "";
        document.getElementById("convertCelsius").classList.remove("active");
        document.getElementById("convertFahrenheit").classList.remove("active");
        document.getElementById("convertKelvin").classList.remove("active");
        }
