function calcular() {
    var peso = Number(document.getElementById('peso').value)
    var altura = Number(document.getElementById('altura').value)
    var total = peso / (altura * altura)



    if (total <= 18.5) {
        document.getElementById('resultado').innerHTML = `<p>Sua Classificação é de Magreza</p>`;
    } else if (total >= 18.5 && total <= 24.9); {
        document.getElementById('resultado').innerHTML = `<p>Sua Classificação Está Dentro do Normal</p>`;
    } if (total >= 25.0 && total <= 29.9) {
        document.getElementById('resultado').innerHTML = `<p>Sua Classificação é de Sobrepeso I</p>`;
    } else if (total >= 35.0 && total <= 39.9) {
        document.getElementById('resultado').innerHTML = `<p>Sua Classificação é Obesidade II</p>`;
    } else if (total >= 40.0) {
        document.getElementById('resultado').innerHTML = `<p>Sua Classificação é Obesidade Grave III</p>`;
    }


}