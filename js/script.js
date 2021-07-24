// bugs
// [minutos] quando solicitado para aumentar logo depois de diminuir, é diminuido + uma casa.(tentar usar looping)

let minutos = document.getElementById('minutos').innerHTML;
let segundos = document.getElementById('segundos').innerHTML;

//function onclick para somar os minutos
function somaMinuto(){
    if(minutos < "10"){
    document.getElementById('minutos').innerHTML = '0'+minutos ++}else{
        document.getElementById('minutos').innerHTML = minutos ++
    }
}


//function onclick para diminuir os minutos

function diminuiMinuto(){
    if(minutos < "00"){
        return "00"
    }else if(minutos < "10" && minutos > "-1"){
        document.getElementById('minutos').innerHTML = '0'+minutos --}else{
            document.getElementById('minutos').innerHTML = minutos --
}
}

//function onclick para somar os segundos

function somaSegundo(){

    if(segundos < "10"){
        document.getElementById('segundos').innerHTML = '0' + segundos ++
    }else if(segundos > "-1" && segundos < "60"){
        document.getElementById('segundos').innerHTML = segundos ++
    }
}

//function onclick para diminuir os segundos


function diminuiSegundo(){
    if(segundos < "00"){
        return "00"
    }else if(segundos < "10"){
        document.getElementById('segundos').innerHTML = '0'+segundos --}else if(segundos >= "00" && segundos < "59"){
            document.getElementById('segundos').innerHTML = segundos --
}
}

//function iniciar cronometro
/*arrumar*/ 
function iniciarCronometro(){
    function iniciarSegundos(){
        for( var segundos = document.getElementById("segundos").innerHTML;segundos >"00";segundos--){
            if(minutos > "00"){
                minutos--;
                segundos = "59";
              // codigo para debugar  console.log(segundos)
            }else{
                minutos = "00";
            }
        }
    }
    iniciarSegundos();
}



