class Invader extends EngineM.Entity {
    
    constructor(game: EngineM.Game, center: EngineM.IPoint) {
        super();
        this.game = game;
        this.center = center;
        this.width = 15;
        this.height = 15;
        this.speedX = 0.3;
        this.patrolX = 0;
    }
    
    public game: EngineM.Game;
    public patrolX: number;
    public speedX: number;
    
    public update(): void {
        if (this.patrolX < 0 || this.patrolX > 40) {
                this.speedX = -this.speedX;
            }
            
            this.center.x += this.speedX;
            this.patrolX += this.speedX;
            
            if (Math.random() > 0.995 && !this.invadersBelow(this)) {
                var bullet = new Bullet({ x: this.center.x, y: this.center.y + this.width / 2}, { x: Math.random() - 0.5, y: 2 });
                this.game.entities.push(bullet);
            }
    }
    
    private invadersBelow(invader: EngineM.IEntity) {
        return this.game.entities.filter(function(b) {
                return b instanceof Invader &&
                b.center.y > invader.center.y &&
                b.center.x - invader.center.x < invader.width;
            }).length > 0;
    }
}
