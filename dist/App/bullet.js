var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(center, velocity) {
        _super.call(this);
        this.width = 3;
        this.height = 3;
        this.center = center;
        this.velocity = velocity;
    }
    Bullet.prototype.update = function () {
        this.center.x += this.velocity.x;
        this.center.y += this.velocity.y;
    };
    return Bullet;
})(EngineM.Entity);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bGxldC50cyJdLCJuYW1lcyI6WyJCdWxsZXQiLCJCdWxsZXQuY29uc3RydWN0b3IiLCJCdWxsZXQudXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQXFCQSwwQkFBY0E7SUFFL0JBLGdCQUFZQSxNQUFzQkEsRUFBRUEsUUFBd0JBO1FBQ3hEQyxpQkFBT0EsQ0FBQ0E7UUFDUkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDZkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDaEJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFJTUQsdUJBQU1BLEdBQWJBO1FBQ0tFLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1FBQ2pDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN0Q0EsQ0FBQ0E7SUFDTEYsYUFBQ0E7QUFBREEsQ0FoQkEsQUFnQkNBLEVBaEJvQixPQUFPLENBQUMsTUFBTSxFQWdCbEMiLCJmaWxlIjoiYnVsbGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnVsbGV0IGV4dGVuZHMgRW5naW5lTS5FbnRpdHkge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihjZW50ZXI6IEVuZ2luZU0uSVBvaW50LCB2ZWxvY2l0eTogRW5naW5lTS5JUG9pbnQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAzO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMztcclxuICAgICAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyB2ZWxvY2l0eTogRW5naW5lTS5JUG9pbnQ7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5jZW50ZXIueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
