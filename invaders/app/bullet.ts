class Bullet extends EngineM.Entity {
    
    constructor(center: EngineM.IPoint, velocity: EngineM.IPoint) {
        super();
        this.width = 3;
        this.height = 3;
        this.center = center;
        this.velocity = velocity;
    }
    
    public velocity: EngineM.IPoint;

    public update(): void {
         this.center.x += this.velocity.x;
         this.center.y += this.velocity.y;
    }
}
