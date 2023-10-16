
        const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const namapengguna = document.getElementById('namapengguna').value;
    const katasandi = document.getElementById('katasandi').value;

    // Ganti namapengguna dan katasandi sesuai dengan yang Anda tentukan
    const validnamapengguna = 'violaainunhani';
    const validkatasandi = '123';

    if (namapengguna === validnamapengguna && katasandi === validkatasandi) {
        // Login berhasil, arahkan ke halaman index
        window.location.href = '../../index.html';
    } else {
        alert('Login gagal. namapengguna atau password salah.');
    }
});

