# zapp-linter
Linter with Haptic feedback to correct unwanted muscle memory

## why? 
If you experiencing repetitive mistakes typing keywords, it might be caused by the muscle memory kicking in. 
A regular linter might not correct these behaviours since its the Visual cortex that notice the error.
When you corrected the typo the muscle memory wont get any feedback that it did wrong.

That why! you need a linter with "haptic" feedback to correct errors caused by unwanted muscle memory. 
Usually when the muscle memory is incorrect you will hurt yourself ie:
- you will fall over
- you will cut yourself
- you will bite your tongue

So the muscle memory is evolved around getting feedback from the pain receptors.

## What it does
When you make a typo based on unwanted muscle memory, a electrical current is sent in to you skin and gives you a unpleasant electrical shock.


## how it works 
A micro controller is connected to a modified bug racket zapper. 
The wire mesh of the racket have mean replaced with 2 wires that are attached to a bracelet around the users wrist.

A plugin in the atom text editor detects a few typos and sends a http get request that triggers the Arduino to send a electrical shock.
