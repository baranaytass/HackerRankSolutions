var array = [1, 4, 7, 8, 9, 6, 3, 2];
var temp;
place();
function onClick() {
    for (var i = 0; i < 7; i++) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
    place();
}
function place() {
    document.getElementById("btn1").innerHTML = array[0];
    document.getElementById("btn4").innerHTML = array[1];
    document.getElementById("btn7").innerHTML = array[2];
    document.getElementById("btn8").innerHTML = array[3];
    document.getElementById("btn9").innerHTML = array[4];
    document.getElementById("btn6").innerHTML = array[5];
    document.getElementById("btn3").innerHTML = array[6];
    document.getElementById("btn2").innerHTML = array[7];
}