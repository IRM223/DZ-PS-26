let addressLat = 10;
let addressLong = 9;
let positionLat = 8;
let positionLong = 7;

let diffLat = addressLat - positionLat;      // 2
let diffLong = addressLong - positionLong;   // 2

let squareLat = diffLat ** 2;               // 4
let squareLong = diffLong ** 2;             // 4

let distance = (squareLat + squareLong) ** 0.5; // √8 ≈ 2.8284271247461903

console.log(distance);