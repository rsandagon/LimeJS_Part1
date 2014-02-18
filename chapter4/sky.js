//set main namespace
goog.provide('winter.Sky');

goog.require('lime.Sprite');

winter.Sky = function(){
    goog.base(this);
    
    var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,0,1)
            .addColorStop(0,'#6633CC')
            .addColorStop(0.5,'#6699CC')
            .addColorStop(0.70,'#CC99CC')
            .addColorStop(0.75,'#FFFFFF')
            .addColorStop(0.76,'#D8D8D8')
            .addColorStop(1,'#FFFFFF');
    
    this.setSize(800,640).setPosition(0,0).setAnchorPoint(0,0).setFill(sky_gradient);
};

goog.inherits(winter.Sky, lime.Sprite);