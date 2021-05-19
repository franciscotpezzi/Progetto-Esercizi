function quadrado() {
    var n1 = 15
    var n2 = 200
    var res = window.document.getElementById('res')
    var i = n1
    while(i <= n2){
    var s = i * i
    res.innerHTML += `O quadrado de  ${i} é igual a <strong> ${s}</strong> `
    i++
    }           
}

function limpar() {
    res.innerHTML = 'Resultado:'
}