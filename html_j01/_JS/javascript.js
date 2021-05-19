function calcular(){
  /*  let olha = window.document.getElementById('tela')*/
    let c = 10
    let f = 0
    tela.innerHTML =''
    while(c <= 100){
        f = (c * 9 / 5) + 32
        tela.innerHTML+=`</br>${c}°C equivale à ${f}°F`
        c += 10
    }
}
function limpar(){
    tela.innerHTML=`  &#x1f63c  &#x1f408  &#x1f63c `
}