//set main namespace
goog.provide('chapter4');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.fill.LinearGradient');
goog.require('winter.Snowman');


// entrypoint
chapter4.start = function(){
    var director = new lime.Director(document.body, 800, 640);
    
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(true);
    
    var scene1 = new lime.Scene();
    
    // create the sky
    var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,0,1)
            .addColorStop(0,'#6633CC')
            .addColorStop(0.5,'#6699CC')
            .addColorStop(0.70,'#CC99CC')
            .addColorStop(0.75,'#FFFFFF')
            .addColorStop(0.76,'#D8D8D8')
            .addColorStop(1,'#FFFFFF');
    var sky = new lime.Sprite().setSize(800,640).setPosition(0,0).setAnchorPoint(0,0).setFill(sky_gradient);
    scene1.appendChild(sky);
    
    // walking snowman
    //var snowman = new lime.Sprite()
    //.setSize(240,320).setFill('images/snowman.png')
    //.setPosition(300,320).setAnchorPoint(0,0);
    
    // walking snowman
    var snowman = new winter.Snowman().setPosition(300,300);
    scene1.appendChild(snowman);
    snowman.walk();
        
    // generate snowflakes
    
    
    director.replaceScene(scene1);
}
