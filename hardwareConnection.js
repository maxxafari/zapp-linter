"use strict";

const five = require("johnny-five");

console.log("init board");
const board = new five.Board();

let ready = false;
let zapper = {};
board.on("ready", () => {
  // Create an Led on pin 13
  zapper = new five.Relay({
    pin: 12,
    isOn: false,
    type: "NC"
  });
  zapper.open();
  //zapper.high();
  ready = true;
  console.log("board ready...");
});

function zapp() {
  if (ready === true) {
    zapper.close();
    setTimeout(() => {
      zapper.open();
    }, 200);
  }
}

module.exports = { zapp };
