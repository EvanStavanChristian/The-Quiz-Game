class Contestant{
    constructor(){
      this.index=null;
      this.name=null;
      this.answer=0;
    }
    getCount(){
        var contestantcountref = database.ref("contestantCount");
        contestantcountref.on('value', function(data){
        contestantCount=data.val();
        })
    }
    update(){
        var pIndex='contestants/contestant'+ this.index;
        database.ref(pIndex).set({
            name:this.name,
             answer:this.answer
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        })
    }
    static getContestantInfo(){
        var inforef = database.ref("contestants");
        inforef.on('value', function(data){
          allContestants=data.val();
    })
}

}