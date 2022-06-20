let CPU = 0;
let UserHP = 220;
let CpuHP = 220;
let PImg, RImg, SImg, AIWImg, AILImg, USWImg, USLImg, RSPImg, LoseImg, WinImg;
let Song, EffectS, WinS, LoseS, WEnd, LEnd;
let Button;

function preload() {
  Song = loadSound('Bgm.flac');
  EffectS = loadSound('Button.mp3')
  WinS = loadSound('WinS.mp3')
  LoseS = loadSound('LoseS.mp3')
  WEnd = loadSound('WEnd.flac')
  LEnd = loadSound('LEnd.flac')
}

function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  Button = createButton('Start Game');
  Button.position(200, 280);
  Button.mousePressed(PerFormance); 
  Button.size(190,50);
  createCanvas(600, 400);
  StartScreen();
  PImg = loadImage('paper.png');
  RImg = loadImage('rock.png');
  SImg = loadImage('scissor.png');
  AIWImg = loadImage('AIwin.jpg');
  AILImg = loadImage('AIlose.jpg');
  USWImg = loadImage('USERwin.jpg');
  USLImg = loadImage('USERlose.jpg');
  RSPImg = loadImage('RSPImg.png');
  LoseImg = loadImage('Lose.jpg');
  WinImg = loadImage('Win.jpg');
  Song.loop();
  Song.setVolume(0.5);
  EffectS.setVolume(0.5);
  WinS.setVolume(0.5);
  LoseS.setVolume(0.5); 
  WEnd.setVolume(0.5);
  LEnd.setVolume(0.5);
}

function draw() {    
  if(CpuHP<1 && UserHP>0)
  {
    background(255);
    fill(0);
    rect(0, 0, width, height);
    image(WinImg, 140, 70, WinImg.width / 2, WinImg.height / 2);
    push();
    fill(255);
    textAlign(CENTER);
    textSize(15);
    text("Press 'F5' to restart", width/2, height/2 + 60);
    pop();
    WEnd.play();
    noLoop();
    Song.pause();
    EffectS.pause();
    WinS.pause();
    LoseS.pause();
  }
  else if(UserHP<1 && CpuHP>0)
  {
    background(255);
    fill(0);
    rect(0, 0, width, height);
    image(LoseImg, 120, 80, LoseImg.width / 2, LoseImg.height / 2);
    push();
    fill(255,0,0);
    textAlign(CENTER);
    textSize(15);
    text("Press 'F5' to restart", width/2, height/2 + 60);
    pop();
    LEnd.play();
    noLoop();
    Song.pause();
    EffectS.pause();
    WinS.pause();
    LoseS.pause();
  }
}

function StartScreen() { 
  textAlign(CENTER);
  background(0);
  push();
  fill(255);
  strokeWeight(3);
  textSize(50);
  text("ROCK PAPER SCISSORS", width/2, height/2);
  pop();
  push();
  fill(255);
  strokeWeight(3);
  textSize(15);
  text("-PRESS START BUTTON-", width/2, height/2+150);
  pop();
}

function keyPressed() {
  let user = Number(key);
  if (user > 0 && user < 4 && UserHP > 0 && CpuHP > 0){
      EffectS.play();  
      CPU = int(random(1, 4)) % 3 +1;
  }
  if (user == 1 && UserHP > 0 && CpuHP > 0) { 
    PerFormance();
  } 
  else if (user == 2 && UserHP > 0 && CpuHP > 0) {
    PerFormance();
  } 
  else if (user == 3 && UserHP > 0 && CpuHP > 0) {
    PerFormance();
  }    
}

function PerFormance() {
  fill(255);
  rect(0, 0, width, height);
  UserInfo();
  CompInfo();
  OutComeNUM();
  UhpRect();
  ChpRect();
  fill(0);
  strokeWeight(3);
  textSize(15);
  text("USER", 55, 35);
  text("CPU", 352, 35);
  image(RSPImg, 200, 320, RSPImg.width/5, RSPImg.height/5);  
  Button.hide();
}

function UserInfo() {
  if (key === '1') {
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("SCISSORS", width/2-140, height/2+110);
    image(SImg, 40, height / 6, SImg.width / 6, SImg.height / 6);
    }
  else if (key === '2') {
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("ROCK", width/2-140, height/2+110);
    image(RImg, 40, height / 6, RImg.width / 6, RImg.height / 6);
    }
  else if (key === '3') {
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("PAPER", width/2-140, height/2+110);
    image(PImg, 40, height / 6, PImg.width / 6, PImg.height / 6);
  }
}

function CompInfo() { 
  if (CPU === 1) {    
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("SCISSORS", width/2+140, height/2+110);
    image(SImg, 350, height / 6, SImg.width / 6, SImg.height / 6);
  } else if (CPU === 2) {    
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("ROCK", width/2+140, height/2+110);
    image(RImg, 350, height / 6, RImg.width / 6, RImg.height / 6);
  } else if (CPU === 3) {
    fill(0);
    strokeWeight(3);
    textSize(15); 
    text("PAPER", width/2+140, height/2+110);
    image(PImg, 350, height / 6, PImg.width / 6, PImg.height / 6);
  }
}

function OutComeNUM() {
  if ((key == 1 && CPU == 1) || (key == 2 && CPU == 2) || (key == 3 && CPU == 3)) {
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("Draw", width/2, height/2-20);
  }
  if ((key == 1 && CPU == 3) || (key == 2 && CPU == 1) || (key == 3 && CPU == 2)) {
    WinS.play();
    if(CpuHP > 0){
      CpuHP -= 22
    }
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("You Win", width/2, height/2-20);
    image(AILImg, 480, height / 6, AILImg.width / 6, AILImg.height / 6);
    image(USWImg, 30, height / 6, USWImg.width / 6, USWImg.height / 6);
  }
  if ((key == 1 && CPU == 2) || (key == 2 && CPU == 3) || (key == 3 && CPU == 1)) {
    LoseS.play();
    if(UserHP > 0){
      UserHP -= 22

    }
    fill(0);
    strokeWeight(3);
    textSize(15);
    text("You Lose", width/2, height/2-20);
    image(AIWImg, 480, height / 6, AIWImg.width / 3, AIWImg.height / 3);
    image(USLImg, 30, height / 6, USLImg.width / 13, USLImg.height / 13);
  }
}

function UhpRect() {
  push();
  fill(255);
  rect(38,44,220,20);
  pop();
  push();
  noStroke();
  fill(255, 0, 0);
  rect(38, 45, UserHP, 18);
  pop();
}

function ChpRect() {
  push();
  fill(255);
  rect(338,44,220,20);
  pop();
  push();
  noStroke();
  fill(255, 0, 0);
  rect(338, 45, CpuHP, 18);
  pop();
}
