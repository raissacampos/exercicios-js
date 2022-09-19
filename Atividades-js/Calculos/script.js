function soma(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var soma = n1 + n2;
    
    document.querySelector('p').innerHTML = `<strong>A soma do número ${n1} e ${n2} é igual a ${soma}</strong>`
}

function subtracao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var subt = n1 - n2;
    
    document.querySelector('p').innerHTML = `<strong>A subtração do número ${n1} e ${n2} é igual a ${subt}</strong>`
}

function multiplicacao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var mult = n1 * n2;
    
    document.querySelector('p').innerHTML = `<strong>A multiplicação do número ${n1} e ${n2} é igual a ${mult}</strong>`
}

function divisao(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var divi = n1 / n2;
    
    document.querySelector('p').innerHTML = `<strong>A divisão do número ${n1} e ${n2} é igual a ${divi}</strong>`
}
