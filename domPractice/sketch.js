var slider;
var time = 1;
var button;
var donut = {
    x:212,
    y:330,
    diameter:20,


		drawDonut: function(){
      fill(0, 0, 0);
			ellipse(this.x, this.y, this.diameter, this.diameter);

		},

		moveDonut: function(){
			if (this.x < 492) {
       this.x = this.x+1;
     } else (this.x > 492);
		}


};

var sun = {
  x:213,
  y:600,
  diameter:100,

  drawSun: function(){
    fill(255, 255, 0);

    ellipse(sun.x, sun.y, sun.diameter, sun.diameter);
  },

    moveSun: function(){
      if (sun.x < 490) {
        sun.x = sun.x+slider.value()/420;
        sun.y = sun.y-0.6;
      } else (sun.x > 512);

    }



};



function setup() {
var backgroundColors = [color('#aabf12'), color('#3ab12'), color('#100ab12'), color('#165512'), color('#fe3fa2'), color('#a345cd')];

  createCanvas(1000, 1000);
  background(backgroundColors[int(random(0, backgroundColors.length))]);
  button = createButton('Yes!');
  button.position(30, 90);
  button.mousePressed(caYes);
  slider = createSlider(0, 645, 0);
  slider.position(200, 400);
  slider.style('width', '300px');
  var val = slider.value();
  button = createButton('No!');
  button.position(600, 90);
  button.mousePressed(caNo);





}

function caYes() {
fill(255,255,255);
rect(25,0,730,625);
textSize(20)
fill(0,100,200)
textSize(15);
text("Janice Vian, a Calgary childhood psychologist, says that the violence of computer games, and the repeated", 30, 50);
text("stimulation designed to keep people playing, are potentially habit-forming, even dangerous.", 30, 70);
text("“...can be very addictive, even destructive.” MUD (multi-user dimensions he says, can also stand for Multiple", 30, 100);
text("Undergraduate Destroyers because “there are a lot of people who have flunked out because of addiction to", 30, 120);
text("these things.”", 30, 140);
text("“With the increase in the amount of stimulation available through computers now,” Herscovitch says, “I can", 30, 170);
text("see the possibility of addictions developing.”", 30, 190);
text("Addiction to computer games is as serious as gambling and drug use, a psychologist has warned. Computer", 30, 220);
text("game addicts spend so much time playing they can lose their jobs, break up their families and stunt their", 30, 240);
text("social development, says clinical psychologist Jo Lamble.", 30, 270);
text("“...spend as much as 80 hours a week playing their cyberspace persona.”", 30, 300);

button = createButton('Clear')
button.position(550, 370);
button.mousePressed(disappear);


}

function disappear(){
  clear(caYes);
}

function caNo(){
clear(disappear)
fill(255, 255, 255);
rect(100, 0, 730, 625);
textSize(20)
fill(0, 100, 200)
textSize(15);
text("Similarly, computers can be a testing ground for identity, she adds, and what appears to be an obsession may in", 30, 50);
text("fact be a healthy process.", 30, 70);
text("“There is absolutely no evidence that spending time online, exchanging e-mail with family and friends, is the least", 30, 100);
text("bit harmful. We know that people who are depressed or anxious are likely to go online for escape and that doing", 30, 120);
text("so helps them.”", 30, 140);
text("And some researchers question the validity of talking about computer addiction at all.", 30, 170);
text("But if other parts of life--like studying and working--do not suffer, the computer time may actually be beneficial to", 30, 200);
text("some people, Turkle says. “Some adolescents go through six months or a year of intensive use, but then the", 30, 220);
text("characters and the experiences have offered them a way to work through personal issues,” ", 30, 240);
text("Although experts have not acknowledged computer addiction as a real problem.", 30, 270);
}


function draw() {
  text("drag me!", 200, 355);
  val = slider.value()
  fill(0, 0, 0);
  noStroke();
  rect(200, 365, 300, 250);
  donut.drawDonut();
  donut.moveDonut();
  sun.drawSun();
  sun.moveSun();


  for (var i=1; i < 645; i++){
  textSize(15);
  fill(0,0,0);
  text("minutes =", 300, 355);
  text(val, 370, 355);
  fill(255, 255, 255);
  rect(370, 340, 25, 20);
  fill(0, 0, 0);
  text(val, 370, 355);
  }
  if (val==645) {
    fill(random(0, 255), random(0, 255), random(0, 255));
    text("TOTAL TIME SPENT ON COMPUTERS", 505, 400);
    text("BY KIDS AGED 8-18 = 645 MINUTES,", 505, 420);
    text("OR 10 HOURS AND 45 MINUTES!", 505, 440);
  }


}
