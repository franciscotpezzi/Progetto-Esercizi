
function fibonacci(){
    let tela = window.document.getElementById('tela')
    let ant = 1
    let atu = 0
    let pro = 0
    let i = 1
    tela.innerHTML=' '

    while( i <= 15){
        
        tela.innerHTML +=` ${pro}`
        pro = (atu + ant)
        atu = ant
        ant = pro
        i++
    }
}
function limpar(){
    tela.innerHTML=`&#x1f58c  &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c   &#x1f58c`
}