function calcular(){
let te = window.document.getElementById('tela')
let n = 1
te.innerHTML=''
while(n <= 20){
    if(n % 2 != 0){
         te.innerHTML +=`&#x1f98d ${n} `
    }
    n++
}
}
function limpar(){
    tela.innerHTML=`&#x1f648  &#x1f649  &#x1f64a`
}