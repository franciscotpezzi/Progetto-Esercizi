

function dobraEsoma(){
    let i = 0;
    let n = 2;
    let s = 0;
    par.innerHTML = " "
    while(i < 64){
        s = n**i
        par.innerHTML += `${s} &#x265b `
        i++
    }
    img.src = img.src=" "
}
function limpar(){
    par.innerHTML= ` &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b  &#x265b  &#x265b
    &#x265b    &#x265b  &#x265b &#x265b &#x265b &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b    &#x265b
    &#x265b  &#x265b`
    img.src = img.src="./imagem/xadres.jpg "
}