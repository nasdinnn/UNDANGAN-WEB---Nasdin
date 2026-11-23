
// Ambil nama tamu dari link undangan

const url = new URLSearchParams(window.location.search);

const namaTamu = url.get("to");
const kategoriTamu = url.get("kategori");

// Tampilkan nama tamu

if (namaTamu) {
    document.getElementById("penerima").textContent = namaTamu;
    document.getElementById("namaInline").textContent = namaTamu;
}

if (kategoriTamu) {
    document.getElementById("kategori").textContent = kategoriTamu;
}

// Bagian konfirmasi kehadiran

document.getElementById("formRSVP").addEventListener("submit", function(e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const instansi = document.getElementById("instansi").value;
    const status = document.getElementById("status").value;

    const pesan = `Halo Panitia Edu Fair 2026!

Nama: ${nama}
Instansi: ${instansi}
Konfirmasi: ${status}

Terima kasih, ya!`;

    // Ganti nomor ini dengan nomor panitia

    const nomor = "6281234567890";

    window.open(
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );

});
