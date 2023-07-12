var randomNunberOne = Math.floor(Math.random()*6) + 1; //ppur avoir un chiffre compris entre 1-6
var randomDiceOne = 'dice' + randomNunberOne + '.png';// concatenation du nom de l'image tel dans mon dossier
var randomFolderOne = 'images/' + randomDiceOne;// pour relier le dossier dans lequel se trouve l'image
var image1 = document.querySelectorAll('img') [0];// selectionner enfin l'image statique dans mon html
image1.setAttribute('src' , randomFolderOne);// et le rendre dynamique avec mon randon image

// dice 2//

var randomNumberTwo = Math.floor(Math.random()*6) + 1;
var randomFolderTwo = 'images/dice'+ randomNumberTwo + '.png';
var image2 = document.querySelectorAll('img')[1].setAttribute('src',randomFolderTwo);

// making the h1 dynamique//

if (randomNunberOne > randomNumberTwo){
    document.querySelector('h1').innerHTML = '🚩Player1 wins';
}else if( randomNunberOne < randomNumberTwo){
    document.querySelector('h1').innerHTML = 'Player2 wins🚩';
}else{
    document.querySelector('h1').innerHTML = 'Draw!';
}