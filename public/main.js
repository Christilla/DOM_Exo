/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myHead = document.head;
console.log(myHead);

var myDiv = document.createElement('div');
var monHBig = document.createElement('H1');
var monHSmall = document.createElement('h2');
var monParagraphe = document.createElement('p');
var monUl = document.createElement('ul');
var monLi = document.createElement('li');
myDiv.setAttribute('id', 'monId');
var monBody = document.querySelector('body');


monBody.appendChild(myDiv);
myDiv.appendChild(monHBig);
myDiv.appendChild(monHSmall);
myDiv.appendChild(monParagraphe);
myDiv.appendChild(monUl);
myDiv.appendChild(monLi);


monHBig.innerHTML = "Ceci est ma première page en DOM";
monHBig.style.color = "red";
monParagraphe.innerHTML = "Et je suis trop contente d'avoir réussi!!";
console.log(myDiv);

