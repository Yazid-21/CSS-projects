//  document.title = `belajar js`

//  const body = document.body
//  const btn1 = document.getElementById(`btn1`)
//  const btn2 = document.getElementById(`btn2`)

//  btn1.style.border = `none`
//  btn1.style.padding = `10px`
//  btn1.style.fontSize = `25px`
//  btn1.style.background = `crimson`

//  function clickButton() {
//      btn1.style.background = `aqua`
//      const textBaru = document.createElement (`p`)
//      textBaru.textContent = `selamat datang`
//      body. append (textBaru)
//  }

//  function over() {
//      btn1.textContent = `anda tertipu`
//  }

//  function out() {
//     btn1.textContent = `hayyuk`
//  }

//  btn2.style.fontSize = `15px`
//  btn2.style.background = `blue`

//  function klik() {
// /    btn2.style.background = `red`
// /   const tulisan = document.createElement(`p`)
//      tulisan.textContent = `pdip pembohong`
// /   body. append (tulisan)
//  }

//  function masuk() {
//      btn2.textContent = `hallo there`/
//      }

//  function keluar() {
//      btn2.textContent = `dilarang berdiri`
//  } **/

//  const arrayYzd = [`yazid`, `muhammad`,`ahad`, `isa`, `adam`]
//  const mencari = arrayYzd.includes(`isa`)/ const posisi = arrayYzd.indexOf(`isa`)

//  if (mencari) {
//      console.log(`ternyata ada`)
//  } else {
//      console.log(`tidak ada`)
//  }

// Array

// const planet = [
//   `saturn`,
//   `mercury`,
//   `venus`,
//   `earth`,
//   `neptune`,
//   `jupitet`,
//   `uranus`,
//   `mars`,
// ];

// const cek = planet.includes(`earth`);

// if (cek) {
//   const cariPosisi = planet.indexOf(`earth`);
//   const Indexsebelum = cariPosisi - 1;
//   const Indexsesudah = cariPosisi + 1;
//   const sebelum = planet[Indexsebelum];
//   const sesudah = planet[Indexsesudah];
//   console.log(`planet sebelum earth adalah ${sebelum}`);
//   console.log(`planet setelah earth adalah ${sesudah}`);
//   console.log(cariPosisi);

//   const awal = planet.shift();
//   console.log(awal);
//   const akhir = planet.pop();
//   console.log(akhir);
// } else {
//   console.log(`saya tidak tau`);
// }

// const awal = [`1`, `2`, `3`, `4`, `5`]
// const akhir = [`first`, `second`, `third`, `maniac`, `savage`]

// const gabungan = awal.concat(akhir)
// console.log(gabungan)

// const datas = [
//     {
//         name: `yazid`,
//         age: `18`,
//         gender: `male`,
//     },
//     {
//         name: `budi`,
//         age: `20`,
//         gender: `male`,
//     },
//     {
//         name: `alice`,
//         age: `19`,
//         gender: `female`,
//     },
//     {
//         name: `andi`,
//         age: `25`,
//         gender: `male`,
//     }
// ]

//   datas.filter ((x) => x.age > 18)
//   .sort ((a,b) => a.age - b.age)
//    .map((values)=> console.log(values))

// const kali = (x, y) => {
//   console.log(x + y);
// };
// kali(597, 5018);

// btn1.addEventListener(`mouseover`, maju);
// btn1.addEventListener(`mouseout`, keluar);

// function maju() {
//     document.body.style = `red`;
//     btn1.style.color = `orange`;
// }

// function keluar() {
//     document.body.style = `black`;
//     btn1.style.color = `blue`;
// }

// const h1 = document.createElement(`h1`);
// const tulisan = document.createTextNode(`anda menang`);

// h1.appendChild(tulisan);

// const ahok = document.getElementById(`ahok`);

// ahok.appendChild(h1);
