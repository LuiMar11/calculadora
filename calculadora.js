function mostrar(val) {
    document.getElementById("resultado").value += val;
}

function borrarTodo() {
    document.getElementById("resultado").value = "";
}

function borrar() {
    let res = document.getElementById("resultado").value.split("");
    res.pop();
    document.getElementById("resultado").value = res.join("");
}

function solve() {
    let res = document.getElementById("resultado").value.split("");
    let n = res.length;
    let val1 = new Array(), val2 = new Array();
    let resultado = 0;
    for (let i = 0; i < res.length; i++) {
        if (res[i] == "+") {
            val1 = res.slice(0, i).join('');
            val2 = res.slice(i + 1, n).join('');
            resultado = parseFloat(val1) + parseFloat(val2);
            document.getElementById('resultado').value = resultado;
        }
        if (res[i] == "-") {
            val1 = res.slice(0, i).join('');
            val2 = res.slice(i + 1, n).join('');
            resultado = parseFloat(val1) - parseFloat(val2);
            document.getElementById('resultado').value = resultado;
        }
        if (res[i] == "*") {
            val1 = res.slice(0, i).join('');
            val2 = res.slice(i + 1, n).join('');
            resultado = parseFloat(val1) * parseFloat(val2);
            document.getElementById('resultado').value = resultado;
        }
        if (res[i] == "/") {
            val1 = res.slice(0, i).join('');
            val2 = res.slice(i + 1, n).join('');
            resultado = parseFloat(val1) / parseFloat(val2);
            document.getElementById('resultado').value = resultado.toFixed(3);
        }
    }
}

document.addEventListener(
    "keydown",
    (event) => {
        var charCode = event.keyCode;
        console.log(charCode);
        var keyValue = event.key;
        if ((charCode > 47 && charCode < 58) || (charCode > 95 && charCode < 112)) {
            mostrar(keyValue);
        }

        if (charCode == 13) {
            solve();
        }
        if (charCode == 8) {
            borrar();
        }
        if (charCode == 46) {
            borrarTodo();
        }
        if (charCode == 187) {
            document.getElementById("resultado").value += keyValue;
        }
        if (charCode == 189) {
            document.getElementById("resultado").value += keyValue;
        }
        if (charCode == 190) {
            document.getElementById("resultado").value += keyValue;
        }
    },
    false
);

