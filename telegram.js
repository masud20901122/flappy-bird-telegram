// File Name: src/telegram.js
class TelegramIntegration {
    constructor() {
        this.tg = window.Telegram.WebApp;
        this.init();
    }
    
    init() {
        // Expand to fullscreen
        this.tg.expand();
        
        // Set theme
        document.body.classList.add(this.tg.themeParams);
        
        // Setup main button
        this.tg.MainButton.setText('Share Score')
            .setColor('#4CAF50')
            .show()
            .onClick(() => this.shareScore());
        
        // Get user info
        const user = this.tg.initDataUnsafe.user;
        if (user) {
            console.log(`Welcome ${user.first_name}!`);
        }
        
        // Send ready signal
        this.tg.ready();
    }
    
    shareScore(score) {
        // Share to Telegram
        this.tg.sendData(JSON.stringify({
            action: 'share_score',
            score: score,
            userId: this.tg.initDataUnsafe.user?.id
        }));
    }
    
    showAd() {
        // Show Telegram ad
        this.tg.showAd();
    }
}

// Initialize Telegram
const telegram = new TelegramIntegration();