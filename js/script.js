function irSteam(){

window.open("https://store.steampowered.com/search/?term=halo","_blank");

}

function irXbox(){

window.open("https://www.xbox.com/es-MX/games/halo","_blank");

}

function toggleInfo(id){

let info=document.getElementById(id);

if(info.style.display==="block"){
info.style.display="none";
}else{
info.style.display="block";
}

let sonido=document.getElementById("haloSound");

if(sonido){
sonido.currentTime=0;
sonido.play();
}

}