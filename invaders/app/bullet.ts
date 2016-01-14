class Bullet implements EngineM.IEntity {
    
    constructor(center: EngineM.IPoint, velocity: EngineM.IPoint) {
        this.width = 3;
        this.height = 3;
        this.center = center;
        this.velocity = velocity;
    }
    
    public velocity: EngineM.IPoint;
    public center: EngineM.IPoint;
    public width: number;
    public height: number;
    
    public update(): void {
         this.center.x += this.velocity.x;
         this.center.y += this.velocity.y;
    }
    
    public draw(): void {
        // let the dubug mode draw us a rectangle.
    }
}
