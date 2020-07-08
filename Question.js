class Question {
    constructor(){
      this.title = createElement('h2', "Please answer the questions correctly");
      this.input = createInput("Name");
      this.email = createInput("E-mail");
      this.button = createButton("Submit");
      this.question1 = createElement('h3', "Do you have corona symptoms?");
      this.radio1 = createButton("Yes");
      this.radio2 = createButton("No");
      this.question2 = createElement('h3', "How many times do you wash your hand per day?");
      this.radio3 = createButton("2-4 times");
      this.radio4 = createButton("5-7 times");
      this.question3 = createElement('h3', "Do you think lockdown should be continued?");
      this.radio5 = createButton("Yes");
      this.radio6 = createButton("No");
      this.question4 = createElement('h3', "What are your views on lockdown?");
      this.radio7 = createInput("Type...");
      this.question5 = createElement('h3', "Do you think lockdown can be proved beneficial?");
      this.radio9 = createButton("Yes");
      this.radio10 = createButton("No");
      this.question6 = createElement('h3', "");
      this.radio11 = createRadio();
      this.radio12 = createRadio();
    }

    display() {
        this.title.position(displayWidth/4-440, displayHeight/2-550);
        this.input.position(displayWidth/4-410, displayHeight/2-490);
        this.email.position(displayWidth/4-410, displayHeight/2-460);
        this.button.position(displayWidth/4-410, displayHeight/2-430);

        this.question1.position(displayWidth/4-430, displayHeight/2-380);
        this.radio1.style('font-size', '15px');
        this.radio1.position(displayWidth/4-420, displayHeight/2-330);
        this.radio2.style('font-size', '15px');
        this.radio2.position(displayWidth/4-350, displayHeight/2-330);

        this.question2.position(displayWidth/4-435, displayHeight/2-290);
        this.radio3.style('font-size', '15px');
        this.radio3.position(displayWidth/4-432, displayHeight/2-232);
        this.radio4.style('font-size', '15px');
        this.radio4.position(displayWidth/4-342, displayHeight/2-232);
        
        this.question3.position(displayWidth/4-439, displayHeight/2-190);
        this.radio5.position(displayWidth/4-429, displayHeight/2-140);
        this.radio5.style('font-size', '15px');
        this.radio6.position(displayWidth/4-350, displayHeight/2-140);
        this.radio6.style('font-size', '15px');
       
        this.question4.position(displayWidth/4-440, displayHeight/2-80);
        this.radio7.position(displayWidth/4-430, displayHeight/2-20);
        this.radio7.style('font-size', '15px');
        this.radio7.size(250, 50);

        this.question5.position(displayWidth/4-440, displayHeight-500);
        this.radio9.position(displayWidth/4-400, displayHeight-450);
        this.radio9.style('font-size', '15px');
        this.radio10.position(displayWidth/4-300, displayHeight-450);
        this.radio10.style('font-size', '15px');

        this.button.mousePressed(()=>{
          this.input.hide();
          this.email.hide();
          this.button.hide();
          voterCount += 1;
          data.updateCount(voterCount);
          data.name = this.input.value();
          data.updateName();
          data.email = this.email.value();
          data.updateEmail();
      })
    }
}