document.getElementById('showMemory').addEventListener('click', function() {
  // Menampilkan efek hati besar
  const heartEffect = document.getElementById('heartEffect');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heartEffect.appendChild(heart);

  // Efek animasi hati
  setTimeout(() => {
    heartEffect.style.opacity = 1;
  }, 100);

  // Menyembunyikan tombol dan menampilkan video
  const memory = document.getElementById('memoryContent');
  memory.classList.remove('hidden');
  document.getElementById('showMemory').classList.add('hidden');

  // Play video secara otomatis
  const video = document.getElementById('memoryVideo');
  video.play();
});
