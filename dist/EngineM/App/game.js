var EngineM;
(function (EngineM) {
    var Game = (function () {
        function Game(canvasId, context) {
            this.DEBUG_MODE = false;
            this.UTILITY = new EngineM.Utility();
            this.entities = [];
            this.sounds = {};
            this.canvas = document.getElementById(canvasId);
            this.screen = this.canvas.getContext(context || '2d');
            this.size = {
                x: this.canvas.width,
                y: this.canvas.height
            };
        }
        Game.prototype.init = function () {
            this.tick();
        };
        // tick is essentially the game loop that will run ~60x / second.
        Game.prototype.tick = function () {
            var _this = this;
            this.update();
            this.draw();
            // kick off game loop
            requestAnimationFrame(function () {
                _this.tick();
            });
        };
        Game.prototype.update = function () {
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                entity.update();
            }
        };
        Game.prototype.draw = function () {
            // start with a fresh canvas.
            this.screen.clearRect(0, 0, this.size.x, this.size.y);
            for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                entity.draw();
                if (this.DEBUG_MODE) {
                    this.UTILITY.drawRect(this.screen, entity);
                }
            }
        };
        Game.prototype.loadSounds = function (urls) {
            var _this = this;
            var promises = [];
            // wait until all sounds are loaded before resolving promise.
            for (var _i = 0; _i < urls.length; _i++) {
                var url = urls[_i];
                var promise = new Promise(function (resolve, reject) {
                    var sound = new Audio(url);
                    _this.sounds[url] = function () {
                        sound.play();
                    };
                    sound.addEventListener('canplaythrough', function () {
                        sound.removeEventListener('canplaythrough', this, false);
                        resolve();
                    }, false);
                    sound.load();
                });
                promises.push(promise);
            }
            return Promise.all(promises);
        };
        return Game;
    })();
    EngineM.Game = Game;
})(EngineM || (EngineM = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOlsiRW5naW5lTSIsIkVuZ2luZU0uR2FtZSIsIkVuZ2luZU0uR2FtZS5jb25zdHJ1Y3RvciIsIkVuZ2luZU0uR2FtZS5pbml0IiwiRW5naW5lTS5HYW1lLnRpY2siLCJFbmdpbmVNLkdhbWUudXBkYXRlIiwiRW5naW5lTS5HYW1lLmRyYXciLCJFbmdpbmVNLkdhbWUubG9hZFNvdW5kcyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxPQUFPLENBaUZiO0FBakZELFdBQU8sT0FBTyxFQUFDLENBQUM7SUFFWkE7UUFDSUMsY0FBYUEsUUFBZ0JBLEVBQUVBLE9BQWdCQTtZQVN4Q0MsZUFBVUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDNUJBLFlBQU9BLEdBQWFBLElBQUlBLGVBQU9BLEVBQUVBLENBQUNBO1lBS2xDQSxhQUFRQSxHQUFjQSxFQUFFQSxDQUFDQTtZQUN6QkEsV0FBTUEsR0FBT0EsRUFBRUEsQ0FBQ0E7WUFmbkJBLElBQUlBLENBQUNBLE1BQU1BLEdBQXNCQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNuRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBNkJBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLENBQUNBO1lBQ2hGQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQTtnQkFDUkEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0E7Z0JBQ3BCQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQTthQUN4QkEsQ0FBQ0E7UUFDTkEsQ0FBQ0E7UUFXTUQsbUJBQUlBLEdBQVhBO1lBQ0lFLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUVERixpRUFBaUVBO1FBQzFEQSxtQkFBSUEsR0FBWEE7WUFBQUcsaUJBUUNBO1lBUEdBLElBQUlBLENBQUNBLE1B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bW9kdWxlIEVuZ2luZU0ge1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKGNhbnZhc0lkOiBzdHJpbmcsIGNvbnRleHQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbiA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5jYW52YXMuZ2V0Q29udGV4dChjb250ZXh0IHx8ICcyZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgREVCVUdfTU9ERTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHB1YmxpYyBVVElMSVRZOiBJVXRpbGl0eSA9IG5ldyBVdGlsaXR5KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgcHVibGljIHNjcmVlbjogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgICAgIHB1YmxpYyBzaXplOiBJUG9pbnQ7XHJcbiAgICAgICAgcHVibGljIGVudGl0aWVzOiBJRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgc291bmRzOiB7fSA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGljayBpcyBlc3NlbnRpYWxseSB0aGUgZ2FtZSBsb29wIHRoYXQgd2lsbCBydW4gfjYweCAvIHNlY29uZC5cclxuICAgICAgICBwdWJsaWMgdGljaygpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBraWNrIG9mZiBnYW1lIGxvb3BcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcclxuICAgICAgICAgICAgLy8gc3RhcnQgd2l0aCBhIGZyZXNoIGNhbnZhcy5cclxuICAgICAgICAgICAgdGhpcy5zY3JlZW4uY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuREVCVUdfTU9ERSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVVRJTElUWS5kcmF3UmVjdCh0aGlzLnNjcmVlbiwgZW50aXR5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgbG9hZFNvdW5kcyh1cmxzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgYWxsIHNvdW5kcyBhcmUgbG9hZGVkIGJlZm9yZSByZXNvbHZpbmcgcHJvbWlzZS5cclxuICAgICAgICAgICAgZm9yICh2YXIgdXJsIG9mIHVybHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNvdW5kID0gbmV3IEF1ZGlvKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZHNbdXJsXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIHRoaXMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzb3VuZC5sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
