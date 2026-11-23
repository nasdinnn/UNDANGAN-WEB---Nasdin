
// Ambil file CSV dari komputer

const fileCSV = document.getElementById("fileCSV");

fileCSV.addEventListener("change", function() {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {

        const baris = e.target.result.trim().split(/\r?\n/);

        baris.shift();

        const tabel = document.getElementById("dataTamu");

        tabel.innerHTML = "";

        baris.forEach(function(item) {

            const data = item.split(",");

            const nama = data[1];
            const instansi = data[2];
            const kategori = data[3];
            const nomor = data[4].replace(/\D/g, "");

            // Bikin link undangan khusus

            const link = window.location.href.replace(
                "admin.html", "index.html"
            ) + `?to=${encodeURIComponent(instansi)}&kategori=${encodeURIComponent(kategori)}`;

            // Isi pesan WhatsApp

            const pesan = `Halo ${nama}!

Kami dari panitia Edu Fair & Career Day 2026
mau ngajak perwakilan ${instansi} buat dateng
ke acara kami.

Ini link undangannya:
${link}

Ditunggu kedatangannya, ya!`;

            const tr = document.createElement("tr");

            [nama, instansi, kategori].forEach(function(teks) {

                const td = document.createElement("td");

                td.textContent = teks;

                tr.appendChild(td);

            });

            const aksi = document.createElement("td");

            const tombol = document.createElement("button");

            tombol.textContent = "Kirim WhatsApp";
            tombol.className = "admin-button";

            tombol.onclick = function() {

                if (!nomor) {
                    alert("Nomor WhatsApp tamunya belum diisi!");
                    return;
                }

                window.open(
                    `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
                    "_blank"
                );

            };

            aksi.appendChild(tombol);

            tr.appendChild(aksi);

            tabel.appendChild(tr);

        });

    };

    reader.readAsText(file);

});
