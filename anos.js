import { log } from "console";

const anos = [Number('2012'), Number('2010'), Number('2020'), Number('2022'), Number('2035'), Number('2045')];

function anosMenores(year){
    const anosMenores = []
    for(let ano of anos){
     if(ano < year){
      anosMenores.push(ano)
     }   
    }
    return anosMenores;
}

function anosMaiores(year){
    const anosMaiores = []
    for(let ano of anos){
     if(ano >= year ){
        anosMaiores.push(ano)
     }   
    }
    return anosMaiores;
}

function anosDecimos(){
    const anosDecimos = []
    for(let ano of anos){
     if(ano % 10 === 0 ){
        anosDecimos.push(ano)
     }   
    }
    return anosDecimos;
}
console.log(anosMenores(2030));
console.log(anosMaiores(2010));
console.log(anosDecimos());
