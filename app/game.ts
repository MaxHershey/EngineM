module EngineM {
    
    export class Game {
        constructor (canvasId: string, context?: string) {
            this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
            this.screen = <CanvasRenderingContext2D>this.canvas.getContext(context || '2d');
            this.size = {
                x: this.canvas.width,
                y: this.canvas.height
            };
        }
        
        public DEBUG_MODE: boolean = false;
        public UTILITY: IUtility = new Utility();
        
        public canvas: HTMLCanvasElement;
        public screen: CanvasRenderingContext2D;
        public size: IPoint;
        public entities: IEntity[] = [];
        public sounds: {} = {};
        
        public init(): void {
            this.tick();
        }
        
        // tick is essentially the game loop that will run ~60x / second.
        public tick(): void {
            this.update();
            this.draw();
            
            // kick off game loop
            requestAnimationFrame(() => {
                this.tick();
            });
        }
        
        public update(): void {
            for (let entity of this.entities) {
                entity.update();
            }
        }
        
        public draw(): void {
            // start with a fresh canvas.
            this.screen.clearRect(0, 0, this.size.x, this.size.y);
            
            for (let entity of this.entities) {
                entity.draw();
                
                if (this.DEBUG_MODE) {
                    this.UTILITY.drawRect(this.screen, entity);
                }
            }
        }
        
        public loadSounds(urls: string[]): Promise<any> {
            var promises: Promise<any>[] = [];
            
            // wait until all sounds are loaded before resolving promise.
            for (var url of urls) {
                var promise = new Promise<any>((resolve, reject) => {
                    var sound = new Audio(url);
                    sound.addEventListener('canplaythrough', loaded);
                
                    var loaded = () => {
                        sound.removeEventListener('canplaythrough', loaded);
                        this.sounds[url] = () => {
                            sound.load();
                            sound.play();   
                        };
                        
                        resolve();
                    }; 
                    
                    sound.load();       
                });
                
                promises.push(promise);
            }
            
            return Promise.all(promises);
        }
    }
}
