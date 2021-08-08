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

let leftImg= document.getElementById('leftImg') ;
let centerImg= document.getElementById('centerImg') ;
let rightImg= document.getElementById('rightImg') ;


function PickImgObject(name, src) {
    this.name = name;
    this.img = src;
    this.Shown = 0;
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
    if((e.target.id === 'leftImg' || e.target.id === 'rightImg') && counter < rounds){

    render();
    counter++;
}
}

  function getRandomNum(min, max) {

    return(Math.floor(Math.random() * (max - min + 1) + min));
     
}
 


