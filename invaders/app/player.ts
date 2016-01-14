class Player implements EngineM.IEntity {
    
    constructor(game: EngineM.Game) {
        this.game = game;
        this.width = 15;
        this.height = 15;
        this.center = {
            x: this.game.size.x / 2,
            y: this.game.size.y - this.height
        };
        this.keyboard = new EngineM.Keyboard();
    }
    
    public game: EngineM.Game;
    public center: EngineM.IPoint;
    public width: number;
    public height: number;
    public keyboard: EngineM.IKeyboard;
    public isShooting: boolean = false;
    
    public update(): void {
        if (this.keyboard.isPressed(this.keyboard.KEYS.LEFT)) {
                this.center.x -= 2;
            } else if (this.keyboard.isPressed(this.keyboard.KEYS.RIGHT)) {
                this.center.x += 2;
            }
            
            if (this.keyboard.isPressed(this.keyboard.KEYS.SPACE) && !this.isShooting) {
                
                var bullet = new Bullet({ x: this.center.x, y: this.center.y - this.width / 2}, { x: 0, y: -6 });
                this.isShooting = true;
                this.game.entities.push(bullet);
                
                // todo: fix sound loader.
                // this.game.sounds['audio/pew.wav']();
                
                setTimeout(() => {
                    this.isShooting = false;
                }, 1000);
            }
    }
    
    public draw(): void {
        // let the dubug mode draw us a rectangle.
    }
}
