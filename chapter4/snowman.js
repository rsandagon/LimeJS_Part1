//set main namespace
goog.provide('winter.Snowman');

goog.require('lime.Sprite');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.Loop');

winter.Snowman = function(){
    goog.base(this);
    this.setFill('images/snowman.png');
    this.setSize(240,320);
    this.setAnchorPoint(0,0);
  
    this.walk = function(){
        var bend = 2;
        var that = this;
        
        var durationRand = parseInt(3 + Math.random() * 3);
        // walk
        var snowman_move_left = new lime.animation.MoveTo(10, 320)
                .setDuration(durationRand)
                .setEasing(lime.animation.Easing.EASEOUT)
                .enableOptimizations();
        
        var snowman_move_right = new lime.animation.MoveTo(550, 320)
            .setDuration(durationRand)
            .setEasing(lime.animation.Easing.EASEOUT)
            .enableOptimizations();
        
        goog.events.listen(snowman_move_left, lime.animation.Event.STOP, function() {
            that.setRotation(bend);
            that.runAction(snowman_move_right);
        });
        
        goog.events.listen(snowman_move_right, lime.animation.Event.STOP, function() {
            that.setRotation(-bend);
            that.runAction(snowman_move_left);
        });

        that.setRotation(-bend);
        that.runAction(snowman_move_left);
    };
}
goog.inherits(winter.Snowman, lime.Sprite);