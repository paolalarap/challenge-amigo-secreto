// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos=[];
const ingresoAmigo = document.getElementById("amigo");
const ListadoDeAmigos = document.getElementById("listaAmigos");
const nombreAmigoSecreto= document.getElementById("resultado");
let intentos=0;

function limpiarCaja(){
    //let cajaLimpia= parseInt(document.getElementById('amigo').value);
    document.querySelector('#amigo').value = '';
    
}

function agregarAmigo() {
    if (!ingresoAmigo.value){
        //Alerta para que el texto no esté vacío
        alert("Debes ingresar un nombre válido");
    } else{
        
    listaAmigos.push(ingresoAmigo.value);
    //console.log(listaAmigos);
    //ListadoDeAmigos s.innerHTML = ListadoDeAmigos s.innerHTML +  ingresoAmigo.value;
    //ListadoDeAmigos s.innerHTML +=  ingresoAmigo.value;
    //Agrega los nommbres en lista 
    
     ListadoDeAmigos.innerHTML += `<li>${ingresoAmigo.value}</li>`;
     intentos++;
     limpiarCaja();
    }

}



function sortearAmigo(){
    const random = Math.floor(Math.random()* listaAmigos.length);
    //console.log(random)
    const amigoSecreto = listaAmigos[random];
    nombreAmigoSecreto.innerHTML = `<li>El amigo secreto es "${amigoSecreto}"</li>`;
   
    
    
}







