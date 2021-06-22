class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      this.contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        this.contestantCount = contestantCountRef.val();
        this.contestant.getCount();
      }
      this.question = new Question()
      this.question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    fill(0);
    textSize(30);
    text("Result of the quiz",340,50);

    //call getContestantInfo( ) here
    contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      //write code to add a note here
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correctly are highlited in green color!",130,230);

      for(var plr in allConstetants){
        var correctAns="2";
        
        if(correctAns=allContestants[plr].answer){
          //write code to highlight contest who answered correctly
          fill("Green");
        }else{
          fill("Red");
        }
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name+":"+allContstants[plr].answer,250,display_Answers);
      }
    }
  }

}
