document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.closest('.card');
        
        // Data sudah berhasil diambil
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerText;
        let judul = parent.querySelector('.card-title').innerText;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';  

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalimage').innerHTML = '';
        document.querySelector('.modalimage').appendChild(image);
        
        document.querySelector('.modalDeksripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        // PERBAIKAN DI SINI
        const nohp = '6283839787371';
        // Menggunakan backtick (`) dan encodeURIComponent agar link valid
        let teksPesan = `Halo kak, apakah buku ini masih tersedia?: ${judul}. Link gambar: ${gambar}`;
        let linkWA = `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(teksPesan)}`;

        document.querySelector('.btnBeli').href = linkWA;
    });
});
