'use strict';
let containerElement = document.getElementById('container');
let leftImg = document.getElementById('left-img');
let middleImg = document.getElementById('middle');
let rightImg = document.getElementById('right');
let maxAtt=25;
let userAttemCounter=0;
let leftImgIndex;
let middleImgIndex;
let rightImgIndex;

function Image(name,source){
    this.name=name;
    this.source=source;
    this.votes=0;
    this.imgRender=0;

    Image.allImages.push(this)
}

Image.allImages=[];

new Image ('bag' ,'IMG/bag.jpg');
new Image ('banana' ,'IMG/banana.jpg');
new Image ('bathroom' ,'IMG/bathroom.jpg');
new Image ('boots' ,'IMG/boots.jpg');
new Image ('breakfast' ,'IMG/breakfast.jpg');
new Image ('bubblegum' ,'IMG/bubblegum.jpg');
new Image ('chair' ,'IMG/chair.jpg');
new Image ('cthulhu' ,'IMG/cthulhu.jpg');
new Image ('dog-duck' ,'IMG/dog-duck.jpg');
new Image ('dragon' ,'IMG/dragon.jpg');
new Image ('pen' ,'IMG/pen.jpg');
new Image ('pet-sweep' ,'IMG/pet-sweep.jpg');
new Image ('scissors' ,'IMG/scissors.jpg');
new Image ('shark' ,'IMG/shark.jpg');
new Image ('sweep' ,'IMG/sweep.png');
new Image ('wine-glass' ,'IMG/wine-glass.jpg');
new Image ('usb' ,'IMG/usb.gif');
new Image ('tauntaun' ,'IMG/tauntaun.jpg');
new Image ('water-can' ,'IMG/water-can.jpg');
new Image ('unicorn' ,'IMG/unicorn.jpg');


console.log(Image.allImages);


function generateRandomIndex (){
return Math.floor(Math.random()*Image.allImages.length);
}


function renderImages (){
    leftImgIndex=generateRandomIndex();
    middleImgIndex=generateRandomIndex();
    rightImgIndex=generateRandomIndex();

    while (leftImgIndex === middleImgIndex || middleImgIndex === rightImgIndex || leftImgIndex === rightImgIndex){
        leftImgIndex=generateRandomIndex();
        Image.allImages[leftImgIndex].imgRender++;
        middleImgIndex=generateRandomIndex();
        Image.allImages[middleImgIndex].imgRender++;
        rightImgIndex=generateRandomIndex();
        Image.allImages[rightImgIndex].imgRender++;
    }
  
    leftImg.src=Image.allImages[leftImgIndex].source;
    middleImg.src=Image.allImages[middleImgIndex].source;
    rightImg.src=Image.allImages[rightImgIndex].source;

}
renderImages();
console.log(containerElement);

containerElement.addEventListener('click',handleClick);

function handleClick(event){
 userAttemCounter++;

    if (userAttemCounter <= maxAtt ){
            if (event.target.id ==='left-img'){
                Image.allImages[leftImgIndex].votes++;
            }else if (event.target.id ==='middle'){
                Image.allImages[middleImgIndex].votes++;
            } else{
                Image.allImages[rightImgIndex].votes++;
            }
            renderImages();
    } else{
        let listUser = document.getElementById('user-li');
        let imageResult;

        for (let i = 0; i < Image.allImages.length; i++) {
           imageResult=document.createElement('li');
           listUser.appendChild(imageResult);

           imageResult.textContent=`${Image.allImages[i].name} has ${Image.allImages[i].votes} votes, and was seen ${Image.allImages[i].imgRender} times`
            
        }
        containerElement.removeEventListener('click',handleClick);

    }
}



