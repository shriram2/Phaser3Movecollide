
   var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
backgroundColor: 0x27ae60,
// physics comes here     
physics: {
        default: 'arcade',
        arcade: {
         //gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
   

    var game = new Phaser.Game(config);
    var platforms;
    var player, player1; 

    function preload ()
    {

     this.load.image('boy', 'asset/boy.png');
    this.load.image('bomb', 'asset/bomb.png');
 this.load.image('ground', 'asset/platform.png');

    }

    function create ()
    {
      platforms = this.physics.add.staticGroup();
    
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.image(50, 400, 'boy');
    player1= this.physics.add.image(300, 100, 'bomb');

// we are making the object collide with the world bounds
    player.setCollideWorldBounds(true);

   this.physics.add.collider(player1, platforms);
    player1.body.setGravityY(20); 
   player.body.setGravityY(20); 

   player1.setBounce(1,1);

// set bounce https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html 

   player.setBounce(0.5,0.5);


  cursors = this.input.keyboard.createCursorKeys();


    }

    function update ()
    {



if (cursors.left.isDown)
{
    player.setVelocityX(-160);

}

this.physics.world.collide(player, player1, function () 
	{
      	player1.destroy(); 
	
	}
	);

    }

