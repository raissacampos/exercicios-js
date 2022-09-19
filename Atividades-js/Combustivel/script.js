function calcular() {
    var etanol = Number(document.getElementById('valor1').value)
    var gasolina = Number(document.getElementById('valor2').value)
    var total = etanol / gasolina;

    if (total < 0.7)
        document.querySelector('p').innerHTML = `Recomendado abastecer com <strong>Etanol</strong`
    else if (total > 0.7) {
        document.querySelector('p').innerHTML = `Recomendado abastecer com <strong>Gasolina</strong>`
    }
}