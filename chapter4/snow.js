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
    var that = this;
    
    this.throwSnow = function(target_position){
        var snow_spawn = new lime.animation.Spawn(
                new lime.animation.MoveTo(target_position).setDuration(0.5),
                new lime.animation.ScaleTo(1).setDuration(1),
                new lime.animation.ScaleTo(0.1).setDuration(1)    
        ); 
    
        //remove snow
        goog.events.listen(snow_spawn, lime.animation.Event.STOP, function() {
            that.setFill('');
            delete that;
        });
        
        this.runAction(snow_spawn);
    };
};

goog.inherits(winter.Snow, lime.Circle);