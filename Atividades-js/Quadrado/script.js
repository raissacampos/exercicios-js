function calcule() {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var n3 = Number(document.getElementById('n3').value)
    var n4 = Number(document.getElementById('n4').value)
    var n5 = Number(document.getElementById('n5').value)

    var nu1 = Math.pow(n1,2)
    var nu2 = Math.pow(n2,2)
    var nu3 = Math.pow(n3,2)
    var nu4 = Math.pow(n4,2)
    var nu5 = Math.pow(n5,2)

    document.querySelector('p').innerHTML = `O quadrado do ${n1} é igual a ${nu1}.<br> 
    O quadrado do ${n2} é igual a ${nu2}.<br>
    O quadrado do ${n3} é igual a ${nu3}.<br>
    O quadrado do ${n4} é igual a ${nu4}.<br>
    O quadrado do ${n5} é igual a ${nu5}.`
}    