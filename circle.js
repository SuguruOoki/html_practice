(function(){

var
w = window,
d = document,

COLOR_RED = '#FF0000',

// 円の半径
RADIUS = 150,
// 軌跡を描く円のサイズ
LOCUS_CIRCLE_SIZE = 25,

Circle;

proxy = function(a,b){return function(){return a.apply(b, arguments)}};

Circle = function(){

    d.addEventListener('DOMContentLoaded', proxy(this.init, this));
};

Circle.prototype = {

    /**
     * 初期処理
     */
    init: function(){

        var
        self  = this,
        canvas = d.getElementByClassName('canvas');

        if (!canvas || !canvas.getContext){
            return false;
        }

        // 三角関数に渡す角度
        self.angle = 1;
        self.point = {
            x : 50,
            y : 50
        };

        self.canvas = canvas;
        self.center = {
            x : canvas.width  / 2,
            y : canvas.height / 2
        };

        self.timer = null;

        self.ctx = self.canvas.getContext('2d');

        // 処理を実行(タイマーで)
        self.setTimer();
    },

    /**
     * アニメーションを実行
     */
    animate: function(x, y){

        var
        self = this,

        ctx    = self.ctx,
        center = self.center,
        width  = self.canvas.width,
        height = self.canvas.height;

        // アニメーションを実行(clear -> draw)
        ctx.clearRect(0, 0, width, height);

        // ベースとなる円
        ctx.beginPath();
        ctx.arc(center.x, center.y, RADIUS, 0, Math.PI * 2, false);
        ctx.stroke();

        // 軌跡
        ctx.beginPath();
        ctx.fillStyle = COLOR_RED;
        ctx.arc(x, y, LOCUS_CIRCLE_SIZE, 0, Math.PI * 2, false);
        ctx.fill();
    },

    /**
     * 描画に必要なパラメータを設定
     */
    setParam: function(){

        var
        self   = this,
        center = self.center;

        // 三角関数で円の軌跡を描く
        self.point.x = RADIUS * Math.cos(self.angle * Math.PI/180) + center.x;
        self.point.y = RADIUS * Math.sin(self.angle * Math.PI/180) + center.y;

        // アニメーションの実行
        self.animate(self.point.x, self.point.y);

        // 角度を加算
        self.angle++;
    },

    /**
     * タイマー
     */
    setTimer: function(){

        var
        self  = this,
        delay = 10;

        clearInterval(self.timer);
        self.timer = setInterval(function(){
            self.setParam();
        }, delay);
    }

};

new Circle();

})();
