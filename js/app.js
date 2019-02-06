function Player(py){
    var that=this;
    this.ply=py;
    this.number=0;
    this.ele = document.createElement("div");
    this.ele.innerHTML = "Player "+this.ply+" Number: "+this.number;
    this.ele.addEventListener("click", function(){
        that.addNumber();
    });
    document.body.appendChild(this.ele);
}

Player.prototype.addNumber = function(){
    this.number=this.number+1;
    this.ele.innerHTML = "Player "+this.ply+" Number: "+this.number;
};

function Game(){
    var that=this;
    this.players=[];
    this.createPlayers();
    this.winner = document.createElement("div");
    this.createButton = document.createElement("div");
    this.createButton.innerHTML="New Game";
    this.createButton.addEventListener("click", function(){
        that.createPlayers();
    })
}

Game.prototype.createPlayers = function(){
    var that=this;
    document.body.innerHTML="";
    this.players=[];
    this.players.push(new Player(1), new Player(2));

    for(var i=0; i<2; i++){
        this.players[i].ele.addEventListener("click", function(){
            that.checkWinner()
        })
    }
};

Game.prototype.checkWinner = function(){
    if(this.players[0].number==10){
      this.winner.innerHTML="Player 1 wins";
      document.body.appendChild(this.winner);
      document.body.appendChild(this.createButton);
    }else if(this.players[1].number==10){
        this.winner.innerHTML="Player 2 wins";
        document.body.appendChild(this.winner);
        document.body.appendChild(this.createButton);
    }else{
        console.log("hit");
    }
};

var newGame = new Game();