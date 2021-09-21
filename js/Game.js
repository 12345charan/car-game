class Game {
  constructor() {}

  start() {
    player=new Player()
    playerCount=player.getCount()
    form = new Form()
    form.display();
  }
  getState() {
    var gamestateref=database.ref("gameState");
    gamestateref.on("value",function (data) {
    gamestate=data.val()
    })
  }
  update(state){
    database.ref("/").update({
      gamestate:state
    })
  }
  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}
