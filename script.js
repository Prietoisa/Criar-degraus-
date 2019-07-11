//while(condiçao)
// o código irá se repetir enquanto a condição for verdadeiro

//-------------------------Exemplo While ------------------------------------

let frutas = ["pera", "uva", "maça", "salada mista",]
 let contador = 0;
 while(contador <4){
    console.log (frutas [ contador]),
    contador ++;
 }

// //-------------------------Exemplo for ------------------------------------
// console.log("exemplo com log");

// for(let cont = 0; cont < frutas.length; cont++){
//     console.log(frutas [cont]);
// }



// for(let i in frutas){
//     console.log(frutas[i]);
// }



for(let frutas of frutas){
    console.log(frutas);
}