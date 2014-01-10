//set main namespace
goog.provide('winter.Snow');

goog.require('lime.Circle');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.FadeTo');

winter.Snow = function(){
    goog.base(this);
    this.setFill('#FFFFFF');
    this.setSize(50,50);
    this.setAnchorPoint(0.5,0.5);
    
    this.throwSnow = function(target_position){
        this.runAction(
            new lime.animation.Spawn(
                new lime.animation.MoveTo(target_position).setDuration(0.5),
                new lime.animation.ScaleTo(1).setDuration(1),
                new lime.animation.ScaleTo(0.1).setDuration(1),
                new lime.animation.FadeTo(0).setDuration(2)        
            )
        );
    };
}

goog.inherits(winter.Snow, lime.Circle);