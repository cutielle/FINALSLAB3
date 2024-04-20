function addNumbers() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var result = parseFloat(n1) + parseFloat(n2);
    document.getElementById("result").value = result.toFixed(2);
}

function lessNumbers() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").value = result.toFixed(2);
}

function timesNumbers() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").value = result.toFixed(2);
}

function divideNumbers() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
    result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").value = result.toFixed(2);
}

function resetNumbers() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("result").value = "";
}

function about() {
    alert("Work of Janelle Macalino");
}
