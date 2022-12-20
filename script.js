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

// prendo gli elementi dal dom
const daysCounter = document.getElementById("days");
const hoursCounter = document.getElementById("hours");
const minutesCounter = document.getElementById("minutes");
const secondsCounter = document.getElementById("seconds");

// setto la data a cui devo arrivare per calcolare quanti millisecondi sono dall'1/1/1970 alla data desiderata
const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

// creo un funzione con setInterval per calcolare i millisecondi rimanenti
const timeRemaining = setInterval(function () {
  const now = new Date().getTime();
  const timeleft = countDownDate - now;

  // calcolo i giorni rimanenti usando dividendo il tempo rimasto per il numero di millisecondi presenti nei giorni
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  // calcolo le ore rimanenti usando il modulo dei giorni e dividendo il tempo rimasto per il numero di millisecondi presenti nelle ore
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // calcolo le minuti rimanenti usando il modulo delle ore e dividendo il tempo rimasto per il numero di millisecondi presenti nelle minuti
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

  // calcolo le secondi rimanenti usando il modulo dei minuti e dividendo il tempo rimasto per il numero di millisecondi presenti nelle secondi
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  //   metto il risultato nei vari elementi
  daysCounter.innerText = days;
  hoursCounter.innerText = hours;
  minutesCounter.innerText = minutes;
  secondsCounter.innerText = seconds;
}, 1000);
