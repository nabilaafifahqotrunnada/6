//membuat array barang
let barang = [
    {nama: "Rinsoo", harga: 5000},
    {nama: "Moonlight", harga:4000}
]

//keterangan
console.log("Isi array barang : ");
//menampilkan data dalam array barang
console.log(barang);
//menampilkan banyak data dalam array barang
console.log("Jumlah data barang = " + barang.length);

//pembatas antara array barang sebelum dan sesudah diperbarui
console.log("---------------------------------");

//menambahkan data ke array barang
barang.push(
    {
        nama: "Mloto", harga: 1000
    }
)

//keterangan baru
console.log("Isi array barang saat ini : ");
//menampilkan data dalam array barang setelah diperbarui
console.log(barang);
//menampilkan banyak data pada array barang setelah diperbarui
console.log("Jumlah data barang saat ini : " + barang.length);