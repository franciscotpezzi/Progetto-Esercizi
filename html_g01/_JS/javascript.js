
function pot(){
    let tela = document.createElement('resp').innerHTML=' '
    let n = 0
    let cont = 0
    resp.innerHTML=''
   /* while(cont <= 15){
        n = 3 ** cont
        resp.innerHTML+=`${n}`
        cont ++
    }*/
    while(cont <= 15){
        if (cont == 0){
            n = 1
        }
        if(cont == 1){
            n = 3
        }
        if(cont >= 2){
            n *= 3 
        }
        resp.innerHTML+=` ${n} &#x1f4a1`
        cont += 1
    }

}
function limp(){
    resp.innerHTML=`&#x1f914  &#x1f914  &#x1f914`

}