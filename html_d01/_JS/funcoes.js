function start(){
let res = window.document.getElementById('res')
let i = 1
let soma = 0
while(i <= 500){
    if(i % 2 == 0){
        soma += i
    }
    i++
}
res.innerHTML=`O somatório dos pares entre 1 e 500 é: <strong>${soma}</strong>`
}

function limpar(){
    res.innerHTML=`&#x1f58a &#x1f58b &#X1f58c &#x1f58d`
}