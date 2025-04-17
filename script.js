const paketHarga = {
  Mini: 25000,
  Medium: 30000,
  Pro: 35000
};

const promoKode = {
  PROMOHEMAT: 5000,
  DISKON3K: 3000
};

const form = document.getElementById("orderForm");
const totalDiv = document.getElementById("total");

function formatRupiah(angka) {
  return "Rp" + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

form.addEventListener("change", () => {
  const paket = document.getElementById("paket").value;
  const kode = document.getElementById("promo").value.trim().toUpperCase();
  let total = paketHarga[paket] || 0;
  if (promoKode[kode]) total -= promoKode[kode];
  total = Math.max(total, 0);
  totalDiv.innerText = `Total: ${formatRupiah(total)}`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const namavps = document.getElementById("namavps").value;
  const domain = document.getElementById("domain").value;
  const paket = document.getElementById("paket").value;
  const kode = document.getElementById("promo").value.trim().toUpperCase();
  const harga = Math.max((paketHarga[paket] || 0) - (promoKode[kode] || 0), 0);

  const pesan = `Halo admin, saya ingin pesan VPS:\\n\\n` +
    `Nama: ${nama}\\n` +
    `WhatsApp: ${wa}\\n` +
    `Nama VPS: ${namavps}\\n` +
    `Domain: ${domain}\\n` +
    `Paket: ${paket}\\n` +
    (promoKode[kode] ? `Kode Promo: ${kode}\\n` : "") +
    `Total: ${formatRupiah(harga)}\\n\\n` +
    `Silakan diproses ya!`;

  const encoded = encodeURIComponent(pesan);
  const url = `https://wa.me/6281227480576?text=${encoded}`;
  window.open(url, "_blank");

  const apiData = {
    username: "OK492171",
    key: "eyJhcHAiOiIxNzAxNTAiLCJhdXRoIjoiMjAyNTAyMjAiLCJzaWduIjoiZXhCZkphWmdWc3pWRDFLcHFUMnRxUT09In0",
    action: "order",
    service: paket,
    target: domain,
    pin: "321654"
  };

  fetch("https://orderkuota.com/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(apiData)
  })
  .then(response => response.json())
  .then(data => console.log("OrderKuota response:", data))
  .catch(err => console.error("OrderKuota error:", err));
});
