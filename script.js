document.addEventListener('DOMContentLoaded', function() {
    const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
    const paymentDetails = document.querySelectorAll('.payment-details');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            paymentDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            const selectedDetails = document.getElementById(this.value + '_details');
            if (selectedDetails) {
                selectedDetails.style.display = 'block';
            }
        });
    });
});

function simulatePayment(method) {
    alert(`Simulasi: Pembayaran melalui ${method} berhasil!`);
    sendPaymentNotification();
}

function sendPaymentNotification() {
    const adminWaNumber = document.getElementById('admin_wa').value;
    const message = encodeURIComponent("Halo admin, saya sudah melakukan pembayaran untuk pesanan saya.");
    const whatsappLink = `https://wa.me/${adminWaNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
    alert("Pesan notifikasi pembayaran otomatis dikirim via WhatsApp (simulasi).");
    // Di implementasi sebenarnya, Anda akan menggunakan AJAX untuk mengirim notifikasi ke server.
}
