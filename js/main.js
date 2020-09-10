
const score=document.querySelector('.score'),
    start=document.querySelector('.start'),
    gameArea=document.querySelector('.gameArea'),
    score1=document.querySelector('.score1'),
car=document.createElement('div');
car.classList.add('car');
start.addEventListener('click',startGame);
document.addEventListener('keydown',startRun);
document.addEventListener('keyup',stopRun);

const audio=document.createElement('ember');
audio.src="audio.mp3";
audio.type="audio/mp3";
const  keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowRight:false,
    ArrowLeft:false
};

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'audio.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    start.removeAttribute('onclick')
}
const setting={
    start:false,
    score:0,
    max:0,
    spped:4,
    traffic:2.5
};

function getQuantityElementElements(heightElement) {
 return document.documentElement.clientHeight/heightElement+1;

}

function startGame() {

    gameArea.innerHTML='';

    gameArea.classList.add('camma')
start.classList.add('hide');
gameArea.append(car);
gameArea.append(audio);
    for (let i=0;i<getQuantityElementElements(100);i++){
        const line1=document.createElement('div');
        line1.classList.add('line1');
        line1.style.top = (i*100)+'px';
        line1.y=i*100;

        gameArea.appendChild(line1);
    }
for (let i=0;i<getQuantityElementElements(100*setting.traffic);i++){
    const enemy=document.createElement('div');

    let cars = ["enemy2"];
        var rand = Math.floor(Math.random() * cars.length);




    var arr = ['image/enemy.png', 'image/enemy2.png'];

// Получаем случайный ключ массива
    var rand = Math.floor(Math.random() * arr.length);


    enemy.classList.add('enemy');
    enemy.y=-100 * setting.traffic*(i+1);
    enemy.style.left=Math.floor(Math.random()*(gameArea.offsetWidth-50 )  )+'px';
    enemy.style.top=enemy.y+'px';
    var  img1='image/enemy.png';
 enemy.style.background ='transparent url("'+arr[rand]+'") center / cover no-repeat';
    enemy.style.scale = "1, -1";
    gameArea.appendChild(enemy);
    Object.preventExtensions(keys);
    console.log(keys);

}
setting.score=0;
setting.start=true;
gameArea.appendChild(car);
    car.style.left=gameArea.offsetWidth/2-car.offsetWidth/2;
    car.style.bottom='10px';
    car.style.top='auto';
    setting.x=car.offsetLeft;
    setting.y=car.offsetTop;
requestAnimationFrame(playGame)

}
function playGame() {


if(setting.start){
    setting.score+=setting.spped;
    score.innerHTML='<br>'+'Счет:'+setting.score+'  <br> '+'Рекорд:'+localStorage.getItem('test');

    moveRoad();
    moveEnemy();
    if (keys.ArrowLeft && setting.x>10){

        setting.x-=setting.spped;
    }
    if (keys.ArrowRight && setting.x< (gameArea.offsetWidth-50)){
        setting.x+=setting.spped;
    }
    if (keys.ArrowDown && setting.y<(gameArea.offsetHeight-car.offsetHeight)){

        setting.y+=setting.spped;
    }
    if (keys.ArrowUp && setting.y>0){
        setting.y-=setting.spped;
    }
    car.style.left=setting.x+'px';
    car.style.top=setting.y+'px';
    requestAnimationFrame(playGame);

}
}

function startRun(event) {
event.preventDefault();
keys[event.key]=true;
}
function stopRun(event) {
event.preventDefault();
keys[event.key]=false;
}
function moveRoad() {



    let lines1=document.querySelectorAll('.line1');
    lines1.forEach(function(line1) {
        line1.y+=setting.spped;
        line1.style.top=line1.y+'px';
        if (line1.y>= document.documentElement.clientHeight){
            line1.y=-100;
        }
    })
    
}
var dem=0;
var dem1=0;
var dem2=0;
function foo1() {
   dem=document.querySelector("button[name='example']").value;
    setting.start=false;
    setting.start=true;
    setting.spped=4;
}
function foo2() {
    dem=document.querySelector("button[name='example1']").value;
    setting.start=false;
    setting.start=true;
    setting.spped=5;
}
function foo3() {
    dem=document.querySelector("button[name='example2']").value;

    setting.start=true;
    setting.spped=6;
}
function moveEnemy() {
let enemy=document.querySelectorAll('.enemy');
enemy.forEach(function (item) {
    let carRect=car.getBoundingClientRect();
    let enemyRect=item.getBoundingClientRect();
    if (carRect.top<=enemyRect.bottom &&carRect.right>=enemyRect.left && carRect.left<=enemyRect.right && carRect.bottom>=enemyRect.top){
       setting.start=false;

       if (localStorage.getItem('test')<setting.score){
           localStorage.setItem('test', setting.score);
           alert('Вы побили свой рекорд')
       }

       start.classList.remove('hide');
       start.style.top=score.offsetHeight;

    }

if (dem==1){
    item.y += setting.spped / 1;

}else{
    item.y += setting.spped / 1;
}
    if (dem==2){
        item.y += setting.spped / 0.85;

    }
    if (dem==3){

        item.y += setting.spped / 0.7;
    }
    item.style.top=item.y+'px';

    if (item.y>=document.documentElement.clientHeight){
        item.y=-100*setting.traffic
        item.style.left=Math.floor(Math.random()*(gameArea.offsetWidth-50 )  )+'px';
        var arr = ['image/enemy.png', 'image/enemy2.png'];

// Получаем случайный ключ массива
        var rand = Math.floor(Math.random() * arr.length);

        item.style.background ='transparent url("'+arr[rand]+'") center / cover no-repeat';

    }
});
}
function allClick() {
    var buttons = document.querySelectorAll('.button');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].click();
    };
};