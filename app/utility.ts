module EngineM {
    export interface IUtility {
        hasColided: (entity1: IEntity, entity2: IEntity) => boolean;
        drawRect: (screen: CanvasRenderingContext2D, entity: IEntity) => void;
    }
    
    export class Utility {
        
        public hasColided(entity1: IEntity, entity2: IEntity): boolean {
            return !(
                entity1 === entity2 ||
                entity1.center.x + entity1.width / 2 < entity2.center.x - entity2.width / 2 ||
                entity1.center.y + entity1.height / 2 < entity2.center.y - entity2.height / 2 ||
                entity1.center.x - entity1.width / 2 > entity2.center.x + entity2.width / 2 ||
                entity1.center.y - entity1.height / 2 > entity2.center.y + entity2.height / 2 
            );
        }
        
        public drawRect(screen: CanvasRenderingContext2D, entity: IEntity): void {
            screen.fillRect(entity.center.x - entity.width / 2,
                        entity.center.y - entity.height / 2,
                        entity.width, 
                        entity.height);
        }
    }
}
