// Mostrar los botones de operaciones al presionar "Calcular"
document.getElementById('show-operations').addEventListener('click', function() {
    document.getElementById('operations').classList.remove('hidden');
});
document.getElementById('hide-operations').addEventListener('click', function() {
    document.getElementById('operations').classList.add('hidden');
});
// Función para realizar la operación seleccionada
function calcular(operacion) {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = 0;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingrese números válidos.");
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            if (numero2 === 0) {
                alert("No se puede dividir por cero");
                return;
            }
            resultado = numero1 / numero2;
            break;
        case 'modulo':
            if (numero2 === 0) {
                alert("No se puede realizar el módulo con divisor cero");
                return;
            }
            resultado = numero1 % numero2;
            break;
        default:
            alert("Operación no válida");
            return;
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}