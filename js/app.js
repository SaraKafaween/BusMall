'use strict';

let imgArr = [
  'bag.jpg',
   'banana.jpg',
    'bathroom.jpg',
     'boots.jpg',
      'breakfast.jpg',
       'bubblegum.jpg',
        'chair.jpg',
         'cthulhu.jpg',
          'dog-duck.jpg',
             'dragon.jpg',
             'pen.jpg',     
             'pet-sweep.jpg', 
             'scissors.jpg', 
             'shark.jpg', 
             'sweep.png', 
             'tauntaun.jpg', 
             'unicorn.jpg', 
             'water-can.jpg', 
             'wine-glass.jpg'
];
  
let all = [];

let counter= 0;
let rounds=25;

const imgselection = document.getElementById('imgselection')
let resultsection = document.getElementById('resultsection')


let leftImg= document.getElementById('leftImg') ;
let centerImg= document.getElementById('centerImg') ;
let rightImg= document.getElementById('rightImg') ;

function PickImgObject(name, src) {
    this.name = name;
    this.img = src;
    this.Shown = 0;
    this.votesNum = 0;
    PickImgObject.all.push(this);
  }
  
  PickImgObject.all = [];

  for (let i = 0; i < imgArr.length; i++) {
     new PickImgObject(imgArr[i].split('.')[0], imgArr[i]);
  }
  
  //console.log(PickImgObject.all);


function render () {
    let leftRandom = getRandomNum(0,imgArr.length -1);
    let centerRandom = getRandomNum(0,imgArr.length -1);
    let rightRandom = getRandomNum(0,imgArr.length -1);
    
//console.log(leftRandom);

    leftImg.src = 'assets/' + PickImgObject.all[leftRandom].img
    centerImg.src = 'assets/' + PickImgObject.all[centerRandom].img
    rightImg.src = 'assets/' + PickImgObject.all[rightRandom].img

    PickImgObject.all[leftRandom].Shown++ ;
    PickImgObject.all[centerRandom].Shown++ ;
    PickImgObject.all[rightRandom].Shown++;

    console.log(PickImgObject.all);


}

render();

imgselection.addEventListener('click', clickHandler);
function clickHandler(e) {
    if((e.target.id === 'leftImg' || e.target.id === 'centerImg' || e.target.id === 'rightImg') && counter < rounds){

        if (e.target.id === 'leftImg') { PickImgObject.all[render.leftRandom].votesNum++; };
        if (e.target.id === 'centerImg') { PickImgObject.all[render.centerRandom].votesNum++; };
        if (e.target.id === 'rightImg') { PickImgObject.all[render.rightRandom].votesNum++; };

    render();
    counter++;
    
}
}

let buttonElement = document.createElement('button');
buttonElement.id = 'TheResult' ;
buttonElement.textContent = 'Results' ;
resultsection.appendChild(buttonElement) ;

 imgselection.removeEventListener('click', clickHandler)
buttonElement.addEventListener('click', TheResult) ;

function TheResult () {
    let ulElement = document.createElement('ul');
    resultsection.appendChild(ulElement)

    for (let i = 0; i < PickImgObject.all.length; i++) {
        let li = document.createElement('li');
        TheResult.append(li);
        li.textContent = PickImgObject.all[i].name + ' had ' + PickImgObject.all[i].votesNum + ` votes, and had Shown ` + PickImgObject.all[i].Shown ;
    }
}
  function getRandomNum(min, max) {

    return(Math.floor(Math.random() * (max - min + 1) + min));
     
}
 


