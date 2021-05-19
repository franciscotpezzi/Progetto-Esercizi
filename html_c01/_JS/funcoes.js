function start(){
    let res = window.document.getElementById('res')
    let soma = 0
    let cont = 1
    while( cont <= 100){
        soma += cont
        cont ++
    }
    res.innerHTML =` O somatório dos cem primeiros números naturais é : ${soma}.`
}

function reset(){
    res.innerHTML =` &#129409  &#129409  &#129409  &#129409`
}