console.log("JS OK");

// In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!
// Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come intervenire sul countdown.
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano dal Natale?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

const daysCounter = document.getElementById("days");
const hourCounter = document.getElementById("hour");
const minutesCounter = document.getElementById("minutes");
const secondsCounter = document.getElementById("seconds");

const conuntDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
console.log(conuntDownDate);
