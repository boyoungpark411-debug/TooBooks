document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.closest('.card');
        
        // Data sudah berhasil diambil
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerText;
        let judul = parent.querySelector('.card-title').innerText;
        let deskripsi = parent.querySelector('.deskripsi')?parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi yang tersedia</i>';  

       

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
         document.querySelector('.modalimage').innerHTML= '';
        document.querySelector('.modalimage').appendChild(image);
        document.querySelector('.modalDeksripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '629635807107';
        let pesan = 'https://api.whatsapp.com/send?phone=${nohp}&text=Halo Bang, saya mau pesan produk ini ${gambar}';

        document.querySelector('.btnBeli').href = pesan;
    });
});