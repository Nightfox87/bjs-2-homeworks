"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - (4*a*c);
  if (D === 0) {
    arr = -b/(2*a);
  }
  if (D > 0) {
    arr = [
      (-b + Math.sqrt(D))/(2*a),
      (-b - Math.sqrt(D) )/(2*a)
    ];
  }
  if (D < 0) {
    arr = null;
  }
  return arr;
}
