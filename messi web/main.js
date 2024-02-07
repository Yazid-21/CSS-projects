// tugas pak dea

// let saldoAwal = prompt (`masukan saldo awal`)
// let saldoTambahan = prompt (`masukan saldo tambahan`)
// const jumlahTotal = saldoAwal + saldoTambahan

// alert (`maka saldo anda menjadi  ${jumlahTotal}`)

// let hari = new Date(). getDay()

// console.log (`maka hari ini adalah hari ${hari}`)

// document.title = `bang messi`

// const saya = document.createComment(`p`)
// saya.innerhtml = `<marquee> saya adalah mannusia</marquee>`

const Btn = document.getElementById(`Btn`);

Btn.onclick = function () {
  Btn.classList.toggle(`active`);
  Btn.classList.toggle(`face`);
};
