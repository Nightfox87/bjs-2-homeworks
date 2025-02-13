"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - (4*a*c);
  if (d === 0) {
    arr = -b/(2*a);
  }
  if (d > 0) {
    arr = [
      (-b + Math.sqrt(d))/(2*a),
      (-b - Math.sqrt(d) )/(2*a)
    ];
  }
  return arr;
}
