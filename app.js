// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creación de variables Const y Let
const listaAmigos=[];
const ingresoAmigo = document.getElementById("amigo");
const ListadoDeAmigos = document.getElementById("listaAmigos");
const nombreAmigoSecreto= document.getElementById("resultado");
let intentos=0;

//Función para limpiar el campo de entrada después de agregar un nombre
function limpiarCaja(){
    
    document.querySelector('#amigo').value = '';
    
}

//Función qye valida el nombre ingresado, lo agrega a la lista y actualiza interfaz
function agregarAmigo() {
    if (!ingresoAmigo.value){
        //Alerta para que el texto no esté vacío
        alert("Debes ingresar un nombre válido");
    } else{
        
    listaAmigos.push(ingresoAmigo.value);
    
    //Agrega los nommbres en lista 
    
     ListadoDeAmigos.innerHTML += `<li>${ingresoAmigo.value}</li>`;
     intentos++;
     limpiarCaja();
    }

}


//Función que selecciona aleatoriamente un nombre de la lista y lo muestra como el "amigo secreto"
function sortearAmigo(){
    const random = Math.floor(Math.random()* listaAmigos.length);
    //console.log(random)
    const amigoSecreto = listaAmigos[random];
    nombreAmigoSecreto.innerHTML = `<li>El amigo secreto es "${amigoSecreto}"</li>`;
   
    
    
}







