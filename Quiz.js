class Quiz{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on('value', function(data){
        gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }

    }
    play(){
        question.hide();
        textSize(24);
        text("Result" ,150,250)
        text("------------------------" ,150,280)
        Contestant.getContestantInfo();
        if(allContestants!==undefined){
            debugger;
            var tp=200;
            for(var plr in allContestants){
                var ca="2";
                if(ca===allContestants[plr].answer){
                     fill("green");
                }else{
                    fill("red");
                }
            
            tp=tp+20;
            textSize(16);
            text(allContestants[plr].name+ ":" + allContestants[plr].answer, 200,tp);
            }
        }

       
        
    }
}