// Script Untuk Menambahkan Shadow Saat Navbar discroll:
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar_top');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar_shadow');
    } else {
        navbar.classList.remove('navbar_shadow');
    }
});

// Script Untuk Memainkan suara VN Risu
let button = document.getElementById('voice_btn');
let audio = new Audio('assets/audio/risu.mp3'); 

button.addEventListener('click', function() {
    audio.play();
});