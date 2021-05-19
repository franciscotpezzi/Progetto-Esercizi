function tabuada(){
var num = window.document.getElementById('num')
var tab = window.document.getElementById('res')
var n = Number(num.value)
var i = 1

while(i <= 10){
    tab.innerHTML +=`</br>${n} x ${i} = ${n*i}`
    i++
}
}

function limpar(){
    var tab = window.document.getElementById('res')    
    tab.innerHTML = `Tabuada`
    document.getElementById('num').value ='';   
}
