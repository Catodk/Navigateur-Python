var anaCoef = 0, appCoef = 0, valCoef = 0, reaCoef = 0, comCoef = 0, anaNote = 2,
appNote = 2, valNote = 2, reaNote = 2, comNote = 2;

function change_coef(coefv, coefn)
{
coefn = document.getElementById(coefv).textContent;
coefn++;
if (coefn == 4) {
    coefn = 0;
}
document.getElementById(coefv).innerHTML = coefn;
return coefn;
}

function change_note(notev, noten)
{
var noteir = document.getElementById(notev).textContent;                  
if (noteir == 'A') {
  document.getElementById(notev).innerHTML = 'B';
    noten = 1;
}
if (noteir == 'B') {
  document.getElementById(notev).innerHTML = 'C';
    noten = -1;
}
if (noteir == 'C') {
  document.getElementById(notev).innerHTML = 'D';
    noten = -2;
}
if (noteir == 'D') {
  document.getElementById(notev).innerHTML = 'A';
    noten = 2;
}
return noten;

}

function notefinale(){
//On definie les variables
var coefSum = anaCoef + reaCoef + appCoef + comCoef + valCoef;

//On calcule enfin la note finale et la partie variable de la formule.
var calcn = (anaCoef*anaNote + reaCoef*reaNote + appCoef * appNote + comCoef*comNote + valCoef * valNote + 2 * coefSum)/(2 * coefSum);
var notefin = Math.round(4 + calcn * 8);

//On fait un retour de la formule.   
document.getElementById("notefinale").innerHTML="La note du candidat est égal à "+notefin+"/20.";
document.getElementById('notefinale').scrollIntoView();
}