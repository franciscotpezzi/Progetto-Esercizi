function show(){
let tela = document.getElementById('presentation')
let i = 1
tela.innerHTML =''
while(i <= 200){
    if(i % 4 == 0){
        tela.innerHTML += `${i} &#x1f418`
    }
    i++
}
}

function clean(){
presentation.innerHTML=` &#x1f4fd  &#x1f4fd   &#x1f4fd   &#x1f4fd`
}