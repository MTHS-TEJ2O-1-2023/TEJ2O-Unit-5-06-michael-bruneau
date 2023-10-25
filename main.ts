/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Oct 2023
 * This program Dectects distanse uising sonar
*/

// variables
let distanceToObject: number = 0
// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.buttonIsPressed(Button.A, function () {
  distanceToObject = sonar.ping()
})
