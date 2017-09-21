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

  const relayPower = new five.Pin({
    pin: 8,
    type: "digital",
    mode: "1"
  });
  // turn on relayPower after relays controller pin is set to high
  // or the relay will fire every time it restarts untill board is "ready"
  relayPower.high();

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
