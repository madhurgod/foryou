const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const hearts = document.querySelector(".hearts");

function moveButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", ()=>{

    result.style.display="block";

    createConfetti();

});

function createConfetti(){

    for(let i=0;i<120;i++){

        let heart=document.createElement("span");

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(Math.random()*3+3)+"s";

        heart.style.fontSize=(Math.random()*25+15)+"px";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    }

}