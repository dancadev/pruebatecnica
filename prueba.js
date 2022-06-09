//metodoQueHaceAlgo(5)
let valor = 5
function metodoQueHaceAlgo(valor)
{
    //console.log(valor)
    if (valor<3) {
        return valor
    }
    
    return metodoQueHaceAlgo(valor-1)*metodoQueHaceAlgo(valor-2)
}

function cuadrado(x) {
    return x * x;
 }

function division(a,b){
    return a/b
}

console.log(division(20,5))
console.log(cuadrado(5))
console.log(metodoQueHaceAlgo(valor))