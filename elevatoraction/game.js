/**
* Elevator Action
* Crafty JS
*/
$(document).ready(function() {
	Crafty.init(20); //start the game
	$("#canvas").attr({width: $(window).width(), height: $(window).height()}); //set the canvas to fullscreen
	
	//Initialize the sprite
	Crafty.sprite(32, "images/sprite.png", {
		player: [0,0,1,2],
		door: [1,0,1,2],
		reddoor: [2,0,1,2]
	}).canvas(document.getElementById("canvas"));
	
	//Create the player
	var player = Crafty.e("2D, door, canvas, gravity, controls, twoway, collision");
	Crafty(player).attr({"y":1, z: 30}).twoway(3,10).collision("floor", function(e) {
		this.stopFalling(e);
	});
	
	//Generate some doors
	for(var i = 1; i <= 10; i++) {
		var door = Crafty.e("2D, door, canvas");
		Crafty(door).attr({x: 250, y: i*80, z: i});
		
		var red = Crafty.e("2D, reddoor, canvas");
		Crafty(red).attr({x: 450, y: i*80, z: i});
	}
	
	var red = Crafty.e("2D, reddoor, canvas");
	Crafty(red).attr({x: 260, y: 90, z: 35});
	
	var red = Crafty.e("2D, reddoor, canvas");
	Crafty(red).attr({x: 230, y: 90, z: 35});
	
	var floor = Crafty.e("2D, floor");
	Crafty(floor).attr({y: 200, w: Crafty.window.width, h: 50});
});