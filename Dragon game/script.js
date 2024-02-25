let dino=document.getElementsByClassName('dino')
let enemy=document.getElementsByClassName('enemy')
let score=document.getElementsByClassName('score')




//Targetting the keyboard keys.
window.addEventListener('keydown',(e)=>{    //this is the method to targetting the keys of the keyboard.
    if(e.key === ' '){
         dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
            setTimeout(()=>{          // set timeout is the method to execute the task at once after the mentioned time
                dino.classList.remove('animateDino');
            },500)
    }
}
)



setInterval(()=>{
//finding the real time dimensions of tyhe objets.
dino=document.querySelector('.dino');
enemy=document.querySelector('.enemy')
gameover=document.querySelector('.game-over')

let dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left') )  //this will retuen the  left pixal of the object
let dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))


let ox= parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'))  
let oy=parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left')  )    



let xd= Math.abs((dx)- (ox));
let yd= Math.abs((dy)-(oy));
console.log(xd,yd);
if(xd<92 && yd>52){
    console.log('over')
     gameover.style.visiblity='visible'
}



},100)    //thus the distance is calculated again again for every 100 milli second.