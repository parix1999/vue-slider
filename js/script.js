//Primo comando che serve per l'estensione Vuejs
Vue.config.devtools = true;
/* SUDDIVISIONE DEI PROBLEMI:
1)-Creare la struttura dati in JS e la base in HTML e CSS
per poi vedere se funziona il tutto.

2)-Implementare una parte della logica cercado di far cambiare 
l'immagine e quindi l'indice della array e avere delle funzioni next e pre

3)- Vedere se si riesci ad aggiungere il timer e creazione dei puntini
segnalibri. 
*/


const app = new Vue (
    //Inizio con i dati che servono
    {
        el:'#app',
        data:{
            // Classi create con il js:
            contentBoxPic: 'box-pic',

            //-----------
            //Creazione Array:
            listaImmagini : [
                'img/forza-1.png',
                'img/forza-2.png',
                'img/forza-3.png',
                'img/forza-4.png',

            ] 
        }
    }
);
