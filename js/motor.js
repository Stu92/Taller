let estadoLicuadora = "off";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");
function controlarLicuadora(){
    if(estadoLicuadora == "off"){
        estadoLicuadora = "on";
        motor();
        licuadora.classList.add("active");        
    }else{
        estadoLicuadora="off";
        motor();
        licuadora.classList.remove("active");       
    }
}

function motor(){
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
    }
 }