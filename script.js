let previous_output = "";

function button(event) {
    let a = document.getElementById("input_1").value;
    let b = document.getElementById("input_2").value;
    let op = document.getElementById("operation").value;
    let c = null;
    let current_output = null;

    a = parseFloat(a);
    b = parseFloat(b);
    current_output = a + "" + op + "" + b + "" + "=";

    if (isNaN(a) || isNaN(b)) {
        current_output = "Invalid input!";
        c = "";
    }
    else
        switch (op) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "*":
                c = a * b;
                break;
            case "/":
                if(Math.abs(b) < Number.EPSILON){
                    document.getElementById("input_2").style.backgroundColor='orange';
                    document.getElementById("output").value = "Division by zero!!!";
                    return;
                }
                else{
                    c = a / b;
                }
                break;
        }

    current_output += c;

    let outputElement = document.getElementById("output");

    if (previous_output !== "") {
        outputElement.textContent = `${previous_output}\n${current_output}`;
    } else {
        outputElement.textContent = current_output;
    }

    previous_output = current_output;
}