function Plus() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var result1 = parseFloat(eval('a'));
    var result2 = parseFloat(eval('b'));
    var result = result1 + result2;

    check_character(result1, result2, result);
}

function Minus() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var result1 = parseFloat(eval('a'));
    var result2 = parseFloat(eval('b'));
    var result = result1 - result2;

    check_character(result1, result2, result);
}

function Multiply() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var result1 = parseFloat(eval('a'));
    var result2 = parseFloat(eval('b'));
    var result = result1 * result2;

    check_character(result1, result2, result);
}

function Divide() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var result1 = parseFloat(eval('a'));
    var result2 = parseFloat(eval('b'));
    var result = result1 / result2;

    check_character(result1, result2, result);
}

function check_character(a, b, c) {
    if (isNaN(c) == false) {
        document.getElementById("kq").value = c;
        document.getElementById("log").innerText = "";
    } else {
        if (isNaN(a) == true && isNaN(b) == true) {
            document.getElementById("A").value = null;
            document.getElementById("B").value = null;
            document.getElementById("log").innerText = "Please enter the value is number or expression!"
            document.getElementById("kq").value = null;

        }
        else if (isNaN(a) == true) {
            document.getElementById("A").value = null;
            document.getElementById("B").value = b;
            document.getElementById("log").innerText = "Please enter the value of number 1 is number or expression!"
            document.getElementById("kq").value = null;

        }
        else if (isNaN(b) == true) {
            document.getElementById("A").value = a;
            document.getElementById("B").value = null;
            document.getElementById("log").innerText = "Please enter the value of number 2 is number or expression!"
            document.getElementById("kq").value = null;

        }


    }


}

