function onClick() {
    var number1 = "";
    var number2 = "";
    var no1, no2;
    var operation = document.getElementById("res").innerHTML;
    for (var i = 0; i < operation.length; i++) {
        if (operation[i] == "+" || operation[i] == "-" || operation[i] == "*" || operation[i] == "/") {
            switch (operation[i]) {
                case "+":
                    number1 = operation.slice(0, i);
                    number2 = operation.slice(i + 1, operation.length);
                    document.getElementById("res").innerHTML = convertToBinary(convertToDecimal(number1) + convertToDecimal(number2));
                    break;
                case "-":
                    number1 = operation.slice(0, i);
                    number2 = operation.slice(i + 1, operation.length);
                    document.getElementById("res").innerHTML = convertToBinary(convertToDecimal(number1) - convertToDecimal(number2));
                    break;
                case "*":
                    number1 = operation.slice(0, i);
                    number2 = operation.slice(i + 1, operation.length);
                    document.getElementById("res").innerHTML = convertToBinary(convertToDecimal(number1) * convertToDecimal(number2));
                    break;
                case "/":
                    number1 = operation.slice(0, i);
                    number2 = operation.slice(i + 1, operation.length);
                    document.getElementById("res").innerHTML = convertToBinary(convertToDecimal(number1) / convertToDecimal(number2));
                    break;
            }
        }
    }
}
function convertToDecimal(string) {
    var deger = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[(string.length - 1 - i)] == 1) {
            deger += Math.pow(2, i);
        }
    }
    return deger;
}

function convertToBinary(integer) {
    const result = integer.toString(2);
    return result;
}