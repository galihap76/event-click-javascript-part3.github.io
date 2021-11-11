//buat variabel
let foo1 = document.getElementsByTagName('h2')[0];
let foo2 = document.getElementsByTagName('h2')[1];
let btn = document.getElementsByTagName('button')[0];

//ketika tombol di klik
btn.addEventListener('click', function(){
    tampilkan Halo saya javascript :D
    foo1.style.display = 'block';
    tampilkan Salam kenal calon programmer :D dalam 2 detik
    setTimeout(function(){
        foo2.style.display = 'block';
        dan hilangkan Halo saya javascript :D dalam 2 detik
        foo1.style.display = 'none';
    }, 2000);
});

