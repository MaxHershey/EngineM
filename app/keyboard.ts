module EngineM {
    export interface IKeys {
        LEFT: number;
        RIGHT: number;
        SPACE: number;
    }
    
    export interface IKeyboard {
        isPressed: (number) => void;
        KEYS: IKeys;
    }
    
    export class Keyboard {
        constructor() {
            this.keyState = {};
            
            window.onkeydown = (e) => {
                this.keyState[e.keyCode] = true;
            };
            
            window.onkeyup = (e) => {
                this.keyState[e.keyCode] = false;
            };
        }
        
        // todo: add more keys
        public KEYS: IKeys = { 
            LEFT: 37, 
            RIGHT: 39, 
            SPACE: 32
        };
        
        public keyState: {} = {};
        
        public isPressed(keyCode: number): boolean {
            return this.keyState[keyCode] === true;
        }
    }
}
