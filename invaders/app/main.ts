class Main extends EngineM.Game {
    constructor() {
        super('screen');
        this.DEBUG_MODE = true;
        
        // kick it
        this.init();
    }
    
    public init(): void {
        this.entities = this.createInvaders().concat(new Player(this));
        
        this.loadSounds(['audio/pew.wav']).then(() => {
            // todo init in here once sounds are loading properly
        });
        
        super.init();
    }
    
    public update(): void {
        var entities = this.entities;
        var notCollidingWithAnything = (b1: EngineM.IEntity) => {
            return entities.filter((b2: EngineM.IEntity) => {
                return this.UTILITY.hasColided(b1, b2);
            }).length === 0;
        };
        
        this.entities = this.entities.filter(notCollidingWithAnything);
        super.update();
    }
    
    private createInvaders(): EngineM.IEntity[] {
        var invaders: EngineM.IEntity[] = [];
        
        for (var i = 0; i < 24; i++) {
            var x = 30 + (i % 8) * 30; // 8 in a row
            var y = 30 + (i % 3) * 30; // 3 rows
            
            invaders.push(new Invader(this, { x: x, y: y }));
        }
        
        return invaders;
    }
}


window.onload = function() {
    new Main();
};
