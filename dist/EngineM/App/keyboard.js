var EngineM;
(function (EngineM) {
    var Keyboard = (function () {
        function Keyboard() {
            var _this = this;
            // todo: add more keys
            this.KEYS = {
                LEFT: 37,
                RIGHT: 39,
                SPACE: 32
            };
            this.keyState = {};
            this.keyState = {};
            window.onkeydown = function (e) {
                _this.keyState[e.keyCode] = true;
            };
            window.onkeyup = function (e) {
                _this.keyState[e.keyCode] = false;
            };
        }
        Keyboard.prototype.isPressed = function (keyCode) {
            return this.keyState[keyCode] === true;
        };
        return Keyboard;
    })();
    EngineM.Keyboard = Keyboard;
})(EngineM || (EngineM = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleWJvYXJkLnRzIl0sIm5hbWVzIjpbIkVuZ2luZU0iLCJFbmdpbmVNLktleWJvYXJkIiwiRW5naW5lTS5LZXlib2FyZC5jb25zdHJ1Y3RvciIsIkVuZ2luZU0uS2V5Ym9hcmQuaXNQcmVzc2VkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE9BQU8sQ0FzQ2I7QUF0Q0QsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQVlaQTtRQUNJQztZQURKQyxpQkF5QkNBO1lBWkdBLHNCQUFzQkE7WUFDZkEsU0FBSUEsR0FBVUE7Z0JBQ2pCQSxJQUFJQSxFQUFFQSxFQUFFQTtnQkFDUkEsS0FBS0EsRUFBRUEsRUFBRUE7Z0JBQ1RBLEtBQUtBLEVBQUVBLEVBQUVBO2FBQ1pBLENBQUNBO1lBRUtBLGFBQVFBLEdBQU9BLEVBQUVBLENBQUNBO1lBbEJyQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFFbkJBLE1BQU1BLENBQUNBLFNBQVNBLEdBQUdBLFVBQUNBLENBQUNBO2dCQUNqQkEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDcENBLENBQUNBLENBQUNBO1lBRUZBLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLFVBQUNBLENBQUNBO2dCQUNmQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNyQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTkEsQ0FBQ0E7UUFXTUQsNEJBQVNBLEdBQWhCQSxVQUFpQkEsT0FBZUE7WUFDNUJFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLElBQUlBLENBQUNBO1FBQzNDQSxDQUFDQTtRQUNMRixlQUFDQTtJQUFEQSxDQXpCQUQsQUF5QkNDLElBQUFEO0lBekJZQSxnQkFBUUEsV0F5QnBCQSxDQUFBQTtBQUNMQSxDQUFDQSxFQXRDTSxPQUFPLEtBQVAsT0FBTyxRQXNDYiIsImZpbGUiOiJrZXlib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBFbmdpbmVNIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleXMge1xyXG4gICAgICAgIExFRlQ6IG51bWJlcjtcclxuICAgICAgICBSSUdIVDogbnVtYmVyO1xyXG4gICAgICAgIFNQQUNFOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleWJvYXJkIHtcclxuICAgICAgICBpc1ByZXNzZWQ6IChudW1iZXIpID0+IHZvaWQ7XHJcbiAgICAgICAgS0VZUzogSUtleXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGUgPSB7fTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmtleWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZVtlLmtleUNvZGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpbmRvdy5vbmtleXVwID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RhdGVbZS5rZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyB0b2RvOiBhZGQgbW9yZSBrZXlzXHJcbiAgICAgICAgcHVibGljIEtFWVM6IElLZXlzID0geyBcclxuICAgICAgICAgICAgTEVGVDogMzcsIFxyXG4gICAgICAgICAgICBSSUdIVDogMzksIFxyXG4gICAgICAgICAgICBTUEFDRTogMzJcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBrZXlTdGF0ZToge30gPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgaXNQcmVzc2VkKGtleUNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlTdGF0ZVtrZXlDb2RlXSA9PT0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
