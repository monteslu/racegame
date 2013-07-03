define([
  'dcl',
  'frozen/box2d/entities/Rectangle',
  'frozen/plugins/loadImage!images/car.png'
], function(dcl, Rectangle, carImg){

  'use strict';

  return dcl(Rectangle, {
    restitution: 0.05,
    angularDamping: 0.9,
    draw: dcl.superCall(function(sup){
      return function(ctx, scale){
        scale = scale || this.scale || 1;

        ctx.save();
        ctx.translate(this.x * scale, this.y * scale);
        ctx.rotate(this.angle);
        ctx.translate(-(this.x) * scale, -(this.y) * scale);
        ctx.drawImage(carImg, this.x * scale - (carImg.width / 2), this.y * scale - (carImg.height / 2));
        ctx.restore();
      };
    })
  });

});