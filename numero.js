let sumar = 0
var num = prompt("Ingresa un numero: ")
function NumPerfecto(num){
    for (var i=0 ; i<num; i++){
        if(num % i == 0){
            sumar += i
        }
        if(num == sumar){
            return true
        }
        else{
            return false        
        }
        
    }
    
}