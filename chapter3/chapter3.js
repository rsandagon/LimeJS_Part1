//set main namespace
goog.provide('chapter3');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Circle');

// entrypoint
chapter3.start = function(){
    var director = new lime.Director(document.body, 800, 640);
    
    director.makeMobileWebAppCapable();
    director.setDisplayFPS(false);
    
    var scene1 = new lime.Scene();
    var rectangle = new lime.Sprite().setSize(800,640).setFill('#000000').setPosition(0,0).setAnchorPoint(0,0);
    var image1 = new lime.Sprite().setSize(140,140).setFill('images/image1.jpg').setPosition(300,100).setAnchorPoint(0,0);
    var circle = new lime.Circle().setSize(20,20).setFill('#FF0000').setPosition(370,180);
    
    scene1.appendChild(rectangle);
    scene1.appendChild(image1);
    scene1.appendChild(circle);   
    
    director.replaceScene(scene1);
}
