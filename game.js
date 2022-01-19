class Game {
    constructor() {}    
   
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
    
   
   
   
   
   
   
   
    start() {
        player = new Player();
        playerCount = player.getCount();
    
         form = new Form();
         form.display();

         boy1 = createSprite(width/2 -250, height-180);
         boy1.addAnimation("boy1walking",boy1img);
         boy1.scale = 0.8

         
         boy2 = createSprite(width/2 -250, height-95);
         boy2.addAnimation("boy2walking",boy2img);
         boy2.scale = 1

         boys = [boy1,boy2];

        
         water = new Group();
         powerCoins = new Group();

          // Adding fuel sprite in the game
          this.addSprites(water, 4, waterImage, 0.02);

           // Adding coin sprite in the game
            this.addSprites(powerCoins, 18, powerCoinImage, 0.09);

        
    }

    handleElements() {
        form.hide();
        //form.titleImg.position(40, 50);
        //form.titleImg.class("gameTitleAfterEffect");
    }

    play() {

        this.handleElements();
        Player.getPlayersInfo(); 
        if (allPlayers !== undefined) {image(track, -width*5, 0, width, height); 
            
            drawSprites(); }
    
      }
    

    }
