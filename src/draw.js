define([
  'frozen/plugins/loadImage!images/track.png'
], function(trackImg){

  'use strict';

  return function(ctx){
    //ctx.fillRect(0, 0, this.width, this.height);
    ctx.drawImage(trackImg, 0, 0);
    this.entities.car.draw(ctx);
    for(var id in this.entities){
      //this.entities[id].draw(ctx);
    }
  };

});