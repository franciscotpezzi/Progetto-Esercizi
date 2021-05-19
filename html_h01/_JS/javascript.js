function calcular(){
let exit = window.document.getElementById('saida')
let bn = window.document.getElementById('base')
let en = window.document.getElementById('exp')
let b = Number(bn.value)
let e = Number(en.value)
let res = 1
let i = 0

    if(e == 0){
        res = 1
    }
    if(e == 1){
        res = b
    }
    if(e >=2){
        for(let i = 1; i <= e; i++){
            res *= b
        }
    }
    exit.innerHTML = `${res}`
    i ++

e = 0
b = 0
}
function limpar(){
exit = window.document.getElementById('saida').innerHTML='&#x1f436  &#x1f436  &#x1f436'
document.getElementById('base').value =`0`;   
document.getElementById('exp').value =`0`;   

}