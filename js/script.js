const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove("jump");

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace('px','')); //pega atravez sa animacao o movimento do mario


    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0 ){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = "40px";
        mario.style.marginBottom  = "30px";

        clearInterval(loop);
    }
    
   
}, 10);

document.addEventListener('keydown', jump);