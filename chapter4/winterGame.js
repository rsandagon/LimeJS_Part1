//set main namespace
goog.provide('winterGame');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.fill.LinearGradient');
goog.require('winter.Snowman');
goog.require('winter.Snow');
goog.require('winter.Sky');


// entrypoint
winterGame.start = function(){
    var director = new lime.Director(document.body, 800, 640);
    
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(true);
    
    goog.exportSymbol('winterGame.start', winterGame.start);
    
    var scene = new lime.Scene();
    var skyLayer = new lime.Layer();
    var gameLayer = new lime.Layer();
    
    // create the sky
    var sky = new winter.Sky();
    skyLayer.appendChild(sky);
    
    // walking snowman
    var snowman = new winter.Snowman();
    gameLayer.appendChild(snowman);
        
    // append layers
    scene.appendChild(skyLayer);
    scene.appendChild(gameLayer);
    
    // initgame
    snowman.walk();
    
    // generate cloud ??
    
    //not sure how to separate the controller..this is interesting..
    var throwSnow = function(e){
        e.event.stopPropagation(); 
        console.log("throw snow called");
        
        //create snow here
        var snow = new winter.Snow().setPosition(400,640);
        gameLayer.appendChild(snow);
        snow.throwSnow(e.position);
    }
    
    goog.events.listen(scene, ['mousedown', 'touchstart'], throwSnow);
    
    director.replaceScene(scene);
}
