//set main namespace
goog.provide('winterGame');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.fill.LinearGradient');
goog.require('winter.Snowman');
goog.require('winter.Sky');


// entrypoint
winterGame.start = function(){
    var director = new lime.Director(document.body, 800, 640);
    
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(true);
    
    var scene = new lime.Scene();
    var skyLayer = new lime.Layer();
    var gameLayer = new lime.Layer();
    
    // create the sky
    var sky = new winter.Sky();
    skyLayer.appendChild(sky);
    
    // walking snowman
    var snowman = new winter.Snowman().setPosition(300,300);
    gameLayer.appendChild(snowman);
        
    // generate cloud ??
    
    // generate snow ??
    
    
    // append layers
    scene.appendChild(skyLayer);
    scene.appendChild(gameLayer);
    
    // intigame
    snowman.walk();
    
    //not sure how to separate the controller..this is interesting..
    
    director.replaceScene(scene);
}
