var canvas, database;
var question;
var voterCount = 0;
var data;

function setup() {
  database = firebase.database();

  var canvas = createCanvas(displayWidth, displayHeight);

  
  question = new Question();
  question.display();

  data = new Database();
  
}

function draw() {
  background(38, 156, 164);  

  
}