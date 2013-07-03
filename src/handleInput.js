define([
  'dojo/keys',
  'frozen/utils/radiansToDegrees'
], function(keys, radiansToDegrees){

  'use strict';
  var speed = 0.3;
  var torque = 4;

  return function handleInput(im, millis){

   var gamePad = navigator.webkitGetGamepads()[0];


    if(gamePad){
      if(gamePad.axes[0] > 0.5){
        this.box.applyTorque('car', torque);
      }else if(gamePad.axes[0] < -0.5){
        this.box.applyTorque('car', -torque);
      }

      if(gamePad.buttons[0] > 0.5){
        this.box.applyImpulse('car', this.entities.car.angle, speed);
      }else if(gamePad.buttons[1] > 0.5){
        this.box.applyImpulse('car', this.entities.car.angle - Math.PI, speed);
      }

    }

    if(im.keyActions[keys.LEFT_ARROW].isPressed() && im.keyActions[keys.UP_ARROW].isPressed()){
      this.box.applyTorque('car', -torque);
    } else if(im.keyActions[keys.RIGHT_ARROW].isPressed() && im.keyActions[keys.UP_ARROW].isPressed()){
      this.box.applyTorque('car', torque);
    }

    if(im.keyActions[keys.UP_ARROW].isPressed()){
      this.box.applyImpulse('car', this.entities.car.angle, speed);
    }else if(im.keyActions[keys.DOWN_ARROW].isPressed()){
      this.box.applyImpulse('car', this.entities.car.angle - Math.PI, speed);
    }
  };

});