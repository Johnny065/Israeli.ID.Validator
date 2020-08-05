const result = document.getElementById('result');

///option 1
function enterId(id) {
  let idd = String(id).trim();
  if (idd.length > 9 || isNaN(idd)) {
    result.innerHTML = `<h4>Please try again!</h4>`;
  }
  idd = idd.length < 9 ? ('000000000' + idd).slice(-9) : idd;
  let arr =
    Array.from(idd, Number).reduce((counter, num, i) => {
      const step = num * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0;
  if (arr == true) {
    result.innerHTML = `<h3>Valid ID!</h3>`;
  } else {
    result.innerHTML = `<h3>Invalid ID!</h3>`;
  }
}

//option 2
// function enterId(id) {
//   const digit = id.slice(-1);
//   let calcArray = Array.from(String(id).slice(0, -1));
//   let res = 0;

//   for (let i = 0; i < calcArray.length; i++) {
//     if (i % 2 == 0) {
//       res += calcArray[i];
//     } else {
//       res += calcArray[i] * 2 > 9 ? calcArray[i] * 2 - 9 : calcArray[i] * 2;
//     }
//   }
//   res = Array.from(res)
//     .map(el => +el)
//     .reduce((a, b) => a + b);
//   res = 10 - (res % 10);

//   res == digit
//     ? (result.innerHTML = `<h3>Valid ID!</h3>`)
//     : (result.innerHTML = `<h3>Invalid ID!</h3>`);
// }
