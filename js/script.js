let acrecentaMin = document.getElementById('maisEsq');
let acrecentaSeg = document.getElementById('maisDir');
let diminuiMin = document.getElementById('menosEsq');
let diminuiSeg = document.getElementById('menosDir');
let interfaceMin = document.getElementById('minutos');
let interfaceSeg = document.getElementById('segundos');

//terminar função
function iniciarCronometro(){
    let min = interfaceMin.innerHTML;
    let seg = interfaceSeg.innerHTML;

    setTimeout(()=>{for(i = interfaceSeg.innerHTML ; i >= 0; i--){
        interfaceSeg.innerHTML=i;
    }},1000);
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