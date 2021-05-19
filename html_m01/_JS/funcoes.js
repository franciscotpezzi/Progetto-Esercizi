
function ler(){
let num = document.getElementById('valor')
let lista = document.getElementById('tela')
let valores = []
let nu = Number(num.value)




    tela.innerHTML +=`</br>${nu}`
    valores.push(Number(num.value))
    num.value = ''
    num.focus()
}

function mostrar(valores) {
    let resp = document.getElementById('resp')
    let i = 1
    for(i = 0; i < 10; i++){
        resp.innerText += `<p>${valores[i]}</p>`
    }
}