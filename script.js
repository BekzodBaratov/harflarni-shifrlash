"use stict";
// ----------variables--------------------
let newArr = [];
let btnShifr = document.querySelector(".btnShifr");
let btnDeshifr = document.querySelector(".btnDeshifr");
let kiritilgan = document.querySelector(".inpInp");
let outInp = document.querySelector(".outInp");

// --------Functions-------------
let shifr = function (arg1) {
  let arr = arg1.split("");
  for (let el of arr) {
    let b = el.charCodeAt().toString(2);
    newArr.push(b);
  }
  return newArr.join(" ");
};
// --------btn-----------------
btnShifr.addEventListener("click", function () {
  outInp.value = shifr(kiritilgan.value);
});
btnDeshifr.addEventListener("click", function () {
  outInp.value = deShifr(kiritilgan.value);
});

// --------------
let k = "1110011 1100001 1101100 1101111 1101101";

let deShifr = function (arg1) {
  let arr = arg1.split(" ");
  for (let el of arr) {
    let b = el.toString(10);
    console.log(b);
  }
};
// deShifr(k);
console.log(2 ** 256);
console.log(2 ** 32 / 60 / 60 / 24 / 365);
