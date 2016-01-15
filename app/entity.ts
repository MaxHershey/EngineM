module EngineM {
    export interface IEntity {
        update: Function;
        draw: Function;
        center: IPoint;
        width: number;
        height: number;
    }
    
    export class Entity implements IEntity {
        
        public center: IPoint = { x: 0, y: 0 };
        public width: number = 0;
        public height: number = 0;
        
        public draw(): void {
            
        }
        
        public update(): void {
            
        }
    }
}
