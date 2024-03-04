let display = document.getElementById("result");
const buttons = document.querySelectorAll('button');

function operate() {
    let text;
    buttons.forEach(button => {
        button.addEventListener('click', handleClick, false);
    })
};

function handleClick() {
    // alert(this.value);

    if (this.value == "-") {
        //subtract
        aktuellerwert = document.getElementById("result").innerHTML;
        document.getElementById("zwischenwert1").value = aktuellerwert;
        document.getElementById("operator").value = "-";
        document.getElementById("result").innerHTML = "";

    } else if (this.value == "+") {
        // add
        aktuellerwert = document.getElementById("result").innerHTML;
        document.getElementById("zwischenwert1").value = aktuellerwert;
        document.getElementById("operator").value = "+";
        document.getElementById("result").innerHTML = "";

    } else if (this.value == "x") {
        // multiply
        aktuellerwert = document.getElementById("result").innerHTML;
        document.getElementById("zwischenwert1").value = aktuellerwert;
        document.getElementById("operator").value = "*";
        document.getElementById("result").innerHTML = "";

    } else if (this.value == "/") {
        // divide
        aktuellerwert = document.getElementById("result").innerHTML;        
        document.getElementById("zwischenwert1").value = aktuellerwert;        
        document.getElementById("operator").value = "/";
        document.getElementById("result").innerHTML = "";

    } else if (this.value == "ac") {
        //clear
        document.getElementById("result").innerHTML = "";

    } else if (this.value == "=") {
        // result
        
        aktuellerwert = document.getElementById("result").innerHTML;
        wert1 = document.getElementById("zwischenwert1").value;
        wert2 = aktuellerwert;

        if (document.getElementById("operator").value == "-") {
            ergebnis = parseInt(wert1) - parseInt(wert2);
            document.getElementById("result").innerHTML = ergebnis;
        } else if (document.getElementById("operator").value == "+") {
            ergebnis = parseInt(wert1) + parseInt(wert2);
            document.getElementById("result").innerHTML = ergebnis;
        }
        else if (document.getElementById("operator").value == "*") {
            ergebnis = parseInt(wert1) * parseInt(wert2);
            document.getElementById("result").innerHTML = ergebnis;
        }
        else if (document.getElementById("operator").value == "/") {
            ergebnis = parseInt(wert1) / parseInt(wert2);
            document.getElementById("result").innerHTML = ergebnis;
        }

    } else {

        // Eingabe der Zahlen
        aktuellerwert = document.getElementById("result").innerHTML;
        text = this.value;
        aktuellerwert = aktuellerwert + text;
        document.getElementById("result").innerHTML = aktuellerwert;
        return text;

    }


}

operate();