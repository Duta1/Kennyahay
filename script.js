document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Mencegah pengiriman form default
    
    const vpsName = document.getElementById('vpsName').value;
    const domain = document.getElementById('domain').value;
    
    if (!vpsName || !domain) {
        alert("Mohon isi semua field!");
        return;
    }
    
    // Mengirim data ke WhatsApp (nomor admin) dengan format pesan
    const whatsappMessage = `Order VPS\nNama VPS: ${vpsName}\nDomain: ${domain}`;
    const whatsappURL = `https://wa.me/081227480576?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Mengarahkan ke WhatsApp
    window.open(whatsappURL, '_blank');
});
