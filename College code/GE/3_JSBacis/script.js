function f1() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let maxNum = Math.max(num1, num2, num3);
    document.write("Max num out of ", num1, ", ", num2, " and ", num3, " is ", maxNum);
}