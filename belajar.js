// ELSE IF//

// var semua = 10;
// var mobil = 1;
// var sehat = 6;
// var sakit = 8;

// for (mobil = mobil; mobil <= semua; mobil++)
//   if (mobil <= sehat) {
//     console.log(`mobil no. ${mobil} sedang baik`);
//   } else if (mobil == sakit) {
//     console.log(`mobil no. ${mobil} sedang lembur`);
//   } else {
//     console.log(`mobil no. ${mobil} sedang tidak baik`);
//   }

// game tebak tebakan

// var tanya = true;
// while (tanya == true) {
//   chance = 4;
//   let computer = Math.floor(Math.random() * 20) + 1;
//   let hasil = ``;

//   while (chance >= 1) {
//     alert(`mulai permainan dengan ` + chance + ` kesempatan`);
//     let p = parseInt(prompt(`tebak angka 1-20`));
//     if (p == computer) {
//       hasil = `benar`;
//     } else if (p < computer) {
//       hasil = `rendah`;
//       chance = -1;
//       alert(
//         `nomer yg anda pilih ` +
//           p +
//           ` terlalu rendah dan tersisa ` +
//           chance +
//           ` kesempatan lagi `
//       );
//     } else if (p > computer) {
//       hasil = ` ketinggian `;
//       chance = -1;
//       alert(
//         ` angka yg di pilih` +
//           p +
//           ` terlalu ketinggian dan tersisa ` +
//           chance +
//           ` kesempatan lagi `
//       );
//     }

//     if (chance == 0) {
//       alert(
//         ` kesempatan ada telah habis dan nomer yang di cari adalah ` + computer
//       );
//     }
//   }
//   tanya = confirm(`coba lagi !! ?`);
// }
// alert(`terimakasih telah mencoba`);

// var array = [`yazid`, `ahmad`, `budi`, `jono`, `ardi`, `michael`];

// var array2 = array.slice(1, 3);
// console.log(array2);
