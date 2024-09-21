function buatTabel(jumlahBaris, jumlahKolom) {
    // Buat elemen tabel
    const tabel = document.createElement('table');
  
    // Buat baris dan kolom
    for (let i = 0; i < jumlahBaris; i++) {
      const baris = tabel.insertRow();
      for (let j = 0; j < jumlahKolom; j++) {
        const sel = baris.insertCell();
        sel.textContent = `Baris ${i + 1}, Kolom ${j + 1}`;
      }
    }
  
    // Tambahkan tabel ke dalam dokumen
    document.body.appendChild(tabel);
  }
  
  // Panggil fungsi untuk membuat tabel 3x4
  buatTabel(3, 4);