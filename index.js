function fibonacci(){
    let numero = document.getElementById('fibo').value;
    if(isNaN(numero)){
        return(document.getElementById('fibonacci').innerHTML= "Error, intenta escribiendo un número");
    }
    let fibonacci=[];
    fibonacci[0]=0;
    fibonacci[1]=1;
    for(let i=2; i<numero; i++){
        fibonacci[i]= fibonacci[i-2] + fibonacci[i-1];
    }
    
document.getElementById('fibonacci').innerHTML= "La serie fibonacci es: " + fibonacci;
}
