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

let counter = 0;
let rounds = 25;

const imgselection = document.getElementById('imgselection')

let leftImg = document.getElementById('leftImg');
let centerImg = document.getElementById('centerImg');
let rightImg = document.getElementById('rightImg');
let resultsection = document.getElementById('resultsection')

function PickImgObject(name, src) {
  this.name = name;
  this.img = src;
  this.Shown = 0;
  this.votes = 0;
  PickImgObject.all.push(this);
}

PickImgObject.all = [];

for (let i = 0; i < imgArr.length; i++) {
  new PickImgObject(imgArr[i].split('.')[0], imgArr[i]);
}

//console.log(PickImgObject.all);

let leftRandom;
let centerRandom;
let rightRandom

function render() {
  leftRandom = getRandomNum(0, imgArr.length - 1);
  centerRandom = getRandomNum(0, imgArr.length - 1);
  rightRandom = getRandomNum(0, imgArr.length - 1);

  //console.log(leftRandom);

  leftImg.src = 'assets/' + PickImgObject.all[leftRandom].img
  centerImg.src = 'assets/' + PickImgObject.all[centerRandom].img
  rightImg.src = 'assets/' + PickImgObject.all[rightRandom].img

  PickImgObject.all[leftRandom].Shown++;
  PickImgObject.all[centerRandom].Shown++;
  PickImgObject.all[rightRandom].Shown++;

  console.log(PickImgObject.all);


}

render();

imgselection.addEventListener('click', clickHandler);
function clickHandler(e) {
  if ((e.target.id === 'leftImg' || e.target.id === 'centerImg' || e.target.id === 'rightImg') && counter < rounds) {
    if (e.target.id === 'leftImg') { PickImgObject.all[leftRandom].votes++ }
    if (e.target.id === 'centerImg') { PickImgObject.all[centerRandom].votes++ }
    if (e.target.id === 'rightImg') { PickImgObject.all[rightRandom].votes++ }




    render();
    counter++;
  }
}

function getRandomNum(min, max) {

  return (Math.floor(Math.random() * (max - min + 1) + min));

}

let buttonElement = document.createElement('button');
buttonElement.id = 'TheResult';
buttonElement.textContent = 'Results';
resultsection.appendChild(buttonElement);
buttonElement.onclick = TheResult;
// imgselection.removeEventListener('click', clickHandler)
buttonElement.addEventListener('result', TheResult) ;
function TheResult(b) {
  console.log('TheResult')

  let ulElement = document.createElement('ul');
  resultsection.appendChild(ulElement)
  buttonElement.removeEventListener('result', TheResult) ;
 
  if (counter === rounds) {
 
    for (let i = 0; i < PickImgObject.all.length; i++) {
      let li = document.createElement('li');
      ulElement.appendChild(li);
      li.textContent = PickImgObject.all[i].name + ' had ' + PickImgObject.all[i].votes + ` votes, and had Shown ` + PickImgObject.all[i].Shown;

    }
     }}

     
     function createChart() {

      let nameArr = [];
      let shownArr = [];
      let votesArr= [];
    
      for(let i = 0; i < PickImgObject.all.length; i++) {
        nameArr.push(PickImgObject.all[i].name);
        shownArr.push(PickImgObject.all[i].shown);
        votesArr.push(PickImgObject.all[i].votes);


      }
    
      let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
    
      let myChart = new Chart( ctx, {
        type: 'bar',
        data: {
          labels: nameArr,
          datasets: [{
            label1: '# shown',
            Label2: '# votes',
            data: shownArr, votesArr,
            backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
    
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      } );
    }