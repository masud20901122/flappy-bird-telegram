// File Name: src/game.js
class FlappyBirdGame {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.score = 0;
        this.highScore = 0;
        this.gameStarted = false;
        this.gameOver = false;
        
        this.init();
    }
    
    init() {
        // Setup canvas size
        this.canvas.width = 360;
        this.canvas.height = 640;
        
        // Game objects
        this.bird = {
            x: 50,
            y: this.canvas.height / 2,
            width: 34,
            height: 24,
            gravity: 0.5,
            velocity: 0,
            jump: -10,
            image: new Image()
        };
        this.bird.image.src = 'assets/images/bird.png';
        
        // Pipes
        this.pipes = [];
        this.pipeWidth = 52;
        this.pipeGap = 150;
        this.pipeFrequency = 1500; // milliseconds
        
        // Start game loop
        this.gameLoop();
    }
    
    drawBird() {
        this.ctx.drawImage(this.bird.image, this.bird.x, this.bird.y, 
                          this.bird.width, this.bird.height);
    }
    
    gameLoop() {
        if (!this.gameStarted || this.gameOver) return;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background
        this.drawBackground();
        
        // Update and draw bird
        this.updateBird();
        this.drawBird();
        
        // Update and draw pipes
        this.updatePipes();
        this.drawPipes();
        
        // Check collisions
        this.checkCollisions();
        
        // Draw score
        this.drawScore();
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    // ... (more game methods)
}

// Start game when loaded
window.addEventListener('load', () => {
    window.game = new FlappyBirdGame();
});