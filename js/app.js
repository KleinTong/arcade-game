// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = (Math.floor(Math.random() * 3) + 1) * 70;
    this.speed = (Math.floor(Math.random() * 5) + 1) * 100;
    this.changeY = function(){
        this.y = (Math.floor(Math.random() * 3) + 1) * 70;
    };
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 500){
        this.x = -50;
        this.changeY();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.consoleY = function() {
    console.log(this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 280;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(){
    // this.handleInput();
    if(this.x > 500 || this.x < -101){
        this.x = 200;
        this.y = 280;
    }

    if(this.y > 450 || this.y < -10){
        this.x = 200;
        this.y = 280;
    }
};

Player.prototype.handleInput = function(key){
    if(key === 'left'){
        this.x -= 100;
    }
    if(key === 'right'){
        this.x += 100;
    }
    if(key === 'up'){
        this.y -= 70;
    }
    if(key === 'down'){
        this.y += 70;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemyOne = new Enemy();
var enemyTwo = new Enemy();
var enemyThree = new Enemy();
enemyOne.consoleY();
enemyTwo.consoleY();
var allEnemies = [enemyOne,enemyTwo,enemyThree];

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
