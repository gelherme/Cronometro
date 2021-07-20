let maisEsq = document.getElementById('maisEsq').innerHTML;
let maisDir = document.getElementById('maisDir').innerHTML;
let menosEsq = document.getElementById('menosEsq').innerHTML;
let menosDir = document.getElementById('menosDir').innerHTML;
let minutos = document.getElementById('minutos').innerHTML;
let segundos = document.getElementById('segundos').innerHTML;

let minutoAtual;

let segundoAtual;

function inicio(){

}

//function onclick para somar os minutos
function somaMinuto(){
   // if(minutos < '00'){
   //     return "00"
   // }else 
   // bug travando no zero
    if(minutos < "10"){
    document.getElementById('minutos').innerHTML = '0'+minutos ++}else{
        document.getElementById('minutos').innerHTML = minutos ++
    }
}
//function onclick para diminuir os minutos

function diminuiMinuto(){
    if(minutos < "00"){
        return "00"
    }else if(minutos < "10"){
        document.getElementById('minutos').innerHTML = '0'+minutos --}else{
            document.getElementById('minutos').innerHTML = minutos --
}
}

