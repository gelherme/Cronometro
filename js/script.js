let interfaceMin = document.getElementById('minutos');
let interfaceSeg = document.getElementById('segundos');


function iniciarCronometro(){
   let timer = setInterval(()=>{
        interfaceSeg.innerHTML--;
        if(interfaceSeg.innerHTML == 0 && interfaceMin.innerHTML > 0){
            interfaceSeg.innerHTML = 59;
            interfaceMin.innerHTML --;
        }else if(interfaceSeg.innerHTML == 0 && interfaceMin.innerHTML == 0){
            clearInterval(timer);
            setTimeout(()=>{alert("Terminou")},500);
            
        }
    },1000)
}




function somaMinuto(){
    if(interfaceMin.innerHTML < 99){
 interfaceMin.innerHTML++;}
   
}

function somaSegundo(){
    if(interfaceSeg.innerHTML < 59){
    interfaceSeg.innerHTML++;}
      
  }

function diminuiMinuto(){
    if(interfaceMin.innerHTML > 0){
    interfaceMin.innerHTML--;}
      
   }

function diminuiSegundo(){
    if(interfaceSeg.innerHTML > 0){
        interfaceSeg.innerHTML--;}
      
   }

