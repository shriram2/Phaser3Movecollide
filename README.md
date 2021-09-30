## PhaserMoveCollide
## Table of contents
* [General info](#Getting started in Phaser with basic physics in Phaser)
* [Technologies](#Phaser HTML 5)
* [Setup](# No setup needed Just download the files)

## General info
This project is simple HTML5
	
## Technologies
Project is created with:
* HTML5
* Javascript 
* Phaser 5
	
## Setup
To run this project, install download files in a directory and then click the html files
* The assets can be placed in asset folder
* Enable the Chrome server
* Make the chrome server point to the folder of the main project 
* The basic idea here is show the simple physics. 
* https://phaser.io/tutorials/making-your-first-phaser-3-game is the main reference. 
* The following lines set bounce
*    player1.setBounce(1,1);
*    // set bounce https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html 
*    player.setBounce(0.5,0.5);
*  The following code creates cursory keys and enables key press events
*  cursors = this.input.keyboard.createCursorKeys();
*  The left and right keys can be controlled with the following 
* if (cursors.left.isDown)
* {
* player.setVelocityX(-160);
* }
* 
