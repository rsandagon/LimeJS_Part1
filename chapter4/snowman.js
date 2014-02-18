//set main namespace
goog.provide('winter.Snowman');

goog.require('lime.Sprite');
goog.require('lime.animation.RotateBy');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.Loop');
goog.require('lime.animation.Spawn');

winter.Snowman = function(){
    goog.base(this);
    this.setFill('#000000');
    //this.setFill('images/snowman.png');
    this.setSize(240,320);
    this.setPosition(300,500);
    this.setAnchorPoint(0.5,0.5);
  
    this.walk = function(){
        var that = this;
        var durationRand = parseInt(3 + Math.random() * 3);
        
        var snowman_move_left = new lime.animation.MoveTo(10, 500)
                .setDuration(durationRand)
                .setEasing(lime.animation.Easing.EASEOUT)
                .enableOptimizations();
        
        var snowman_move_right = new lime.animation.MoveTo(550, 500)
            .setDuration(durationRand)
            .setEasing(lime.animation.Easing.EASEOUT)
            .enableOptimizations();
        
        var anim = new lime.animation.Loop(new lime.animation.Sequence(snowman_move_left,snowman_move_right));
        that.runAction(anim);
    };
    
    this.blink = function(){
        this.runAction(
            new lime.animation.Spawn(
                new lime.animation.ScaleTo(1).setDuration(1),
                new lime.animation.ScaleTo(0.5).setDuration(1),
                new lime.animation.ScaleTo(1).setDuration(1)
            )
        );
    };
};

goog.inherits(winter.Snowman, lime.Sprite);