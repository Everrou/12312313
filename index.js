
$(document).keydown(f1)

function f1(){
    if ($('#dino1').classList !=='jump'){
    $('#dino1').addClass('jump')
}

    setTimeout(
        function (){
        $('#dino1').removeClass('jump')
    },1000)
}

function f2(){
let  kaktysleft= $('#kaktys').css('left')
    let dino1top= $('#dino1').css('top')
    let  ptleft= $('#pt').css('left')
    console.log(kaktysleft+ptleft+'--'+dino1top)
dino1top=Number(dino1top.slice(0,-2))
kaktysleft=Number(kaktysleft.slice(0,-2))
   ptleft=Number(ptleft.slice(0,-2))
    console.log(dino1top)
    if(0<kaktysleft && kaktysleft<50 && dino1top > 300){
        alert('Попался!')
    location.reload()
    }
}
setInterval(f2,10)














