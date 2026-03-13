// ============================================
// KEDAI NINDY - Script
// ============================================

// ---- DATA PRODUK ----
const products = [
  // === BERAS ===
  { id: 1, name: "Beras Premium 5kg", price: 65000, category: "beras", mainCat: "jualan", emoji: "🍚", desc: "Beras pulen kualitas terbaik", badge: "Best Seller" },
  { id: 2, name: "Beras Medium 5kg", price: 55000, category: "beras", mainCat: "jualan", emoji: "🍚", desc: "Beras sehari-hari harga terjangkau" },
  { id: 3, name: "Beras Merah 1kg", price: 22000, category: "beras", mainCat: "jualan", emoji: "🌾", desc: "Beras merah organik sehat" },
  { id: 4, name: "Beras Ketan 1kg", price: 25000, category: "beras", mainCat: "jualan", emoji: "🍘", desc: "Untuk kue dan jajanan tradisional" },
  { id: 5, name: "Beras Premium 10kg", price: 125000, category: "beras", mainCat: "jualan", emoji: "🍚", desc: "Beras premium kemasan besar", badge: "Hemat" },
  { id: 6, name: "Beras Pandan Wangi 5kg", price: 72000, category: "beras", mainCat: "jualan", emoji: "🌿", desc: "Nasi wangi alami pandan" },

  // === ROKOK ===
  { id: 7, name: "Gudang Garam Filter", price: 28000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "GG Filter 12 batang" },
  { id: 8, name: "Djarum Super", price: 26000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "Djarum Super 12 batang", badge: "Populer" },
  { id: 9, name: "Surya 16", price: 32000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "Gudang Garam Surya 16 batang" },
  { id: 10, name: "Sampoerna Mild", price: 30000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "A Mild 16 batang" },
  { id: 11, name: "LA Bold", price: 24000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "LA Bold 16 batang" },
  { id: 12, name: "Magnum Filter", price: 18000, category: "rokok", mainCat: "jualan", emoji: "🚬", desc: "Magnum Filter 12 batang" },

  // === JAJANAN ===
  { id: 13, name: "Chitato Sapi Panggang", price: 10000, category: "jajanan", mainCat: "jualan", emoji: "🍟", desc: "Keripik kentang rasa sapi panggang" },
  { id: 14, name: "Indomie Goreng", price: 3500, category: "jajanan", mainCat: "jualan", emoji: "🍜", desc: "Mi instan goreng favorit", badge: "Laris" },
  { id: 15, name: "Oreo Original", price: 8000, category: "jajanan", mainCat: "jualan", emoji: "🍪", desc: "Biskuit Oreo rasa original" },
  { id: 16, name: "Taro Net", price: 3000, category: "jajanan", mainCat: "jualan", emoji: "🥨", desc: "Snack ringan renyah" },
  { id: 17, name: "Richeese Nabati", price: 5000, category: "jajanan", mainCat: "jualan", emoji: "🧀", desc: "Wafer keju lezat" },
  { id: 18, name: "Beng-Beng", price: 3500, category: "jajanan", mainCat: "jualan", emoji: "🍫", desc: "Wafer karamel cokelat" },
  { id: 19, name: "Qtela Tempe", price: 9000, category: "jajanan", mainCat: "jualan", emoji: "🍘", desc: "Keripik tempe original krispi" },
  { id: 20, name: "Pop Mie Ayam", price: 5500, category: "jajanan", mainCat: "jualan", emoji: "🍜", desc: "Mi cup rasa ayam" },

  // === MINUMAN DINGIN ===
  { id: 21, name: "Es Teh Pucuk Harum", price: 4000, category: "minuman", mainCat: "jualan", emoji: "🧊", desc: "Teh manis dingin segar" },
  { id: 22, name: "Coca-Cola 390ml", price: 6000, category: "minuman", mainCat: "jualan", emoji: "🥤", desc: "Minuman bersoda menyegarkan" },
  { id: 23, name: "Aqua 600ml", price: 4000, category: "minuman", mainCat: "jualan", emoji: "💧", desc: "Air mineral segar" },
  { id: 24, name: "Pocari Sweat 500ml", price: 8000, category: "minuman", mainCat: "jualan", emoji: "🥤", desc: "Minuman isotonik" },
  { id: 25, name: "Teh Botol Sosro", price: 5000, category: "minuman", mainCat: "jualan", emoji: "🍵", desc: "Teh manis original", badge: "Favorit" },
  { id: 26, name: "Sprite 390ml", price: 6000, category: "minuman", mainCat: "jualan", emoji: "🥤", desc: "Minuman lemon lime segar" },
  { id: 27, name: "Fanta Strawberry", price: 6000, category: "minuman", mainCat: "jualan", emoji: "🍓", desc: "Soda rasa stroberi segar" },
  { id: 28, name: "Yakult", price: 3000, category: "minuman", mainCat: "jualan", emoji: "🥛", desc: "Minuman probiotik sehat" },
  { id: 29, name: "Es Kopi Susu ABC", price: 5000, category: "minuman", mainCat: "jualan", emoji: "☕", desc: "Kopi susu siap minum" },
  { id: 30, name: "Floridina Orange", price: 4000, category: "minuman", mainCat: "jualan", emoji: "🍊", desc: "Minuman jeruk dengan bulir asli" },

  // === JUALAN AYAM ===
  { id: 31, name: "Ayam Potong Utuh", price: 45000, category: "ayam", mainCat: "ayam", emoji: "🐔", desc: "Ayam potong segar utuh per ekor", badge: "Segar" },
  { id: 32, name: "Dada Ayam 1kg", price: 38000, category: "ayam", mainCat: "ayam", emoji: "🍗", desc: "Dada ayam fillet tanpa tulang" },
  { id: 33, name: "Paha Ayam 1kg", price: 35000, category: "ayam", mainCat: "ayam", emoji: "🍗", desc: "Paha ayam atas segar", badge: "Laris" },
  { id: 34, name: "Sayap Ayam 1kg", price: 32000, category: "ayam", mainCat: "ayam", emoji: "🍗", desc: "Sayap ayam segar untuk digoreng" },
  { id: 35, name: "Ceker Ayam 1kg", price: 18000, category: "ayam", mainCat: "ayam", emoji: "🐔", desc: "Ceker ayam segar untuk soto/sup" },
  { id: 36, name: "Ati Ampela 1kg", price: 28000, category: "ayam", mainCat: "ayam", emoji: "🫀", desc: "Ati ampela ayam segar" },
  { id: 37, name: "Ayam Kampung", price: 75000, category: "ayam", mainCat: "ayam", emoji: "🐓", desc: "Ayam kampung utuh per ekor", badge: "Premium" },
  { id: 38, name: "Kulit Ayam 1kg", price: 15000, category: "ayam", mainCat: "ayam", emoji: "🍗", desc: "Kulit ayam untuk kerupuk/goreng" },

  // === OBAT HERBALIFE ===
  { id: 39, name: "Shake Mix Vanilla", price: 310000, category: "herbalife", mainCat: "herbalife", emoji: "🥤", desc: "Nutritional Shake Mix rasa vanila", badge: "Best Seller" },
  { id: 40, name: "Shake Mix Coklat", price: 310000, category: "herbalife", mainCat: "herbalife", emoji: "🍫", desc: "Nutritional Shake Mix rasa coklat" },
  { id: 41, name: "Shake Mix Berry", price: 310000, category: "herbalife", mainCat: "herbalife", emoji: "🍓", desc: "Nutritional Shake Mix rasa berry" },
  { id: 42, name: "Herbal Aloe Mango", price: 195000, category: "herbalife", mainCat: "herbalife", emoji: "🥭", desc: "Herbal Aloe Concentrate rasa mangga", badge: "Favorit" },
  { id: 43, name: "Herbal Tea Concentrate", price: 195000, category: "herbalife", mainCat: "herbalife", emoji: "🍵", desc: "Teh herbal pelangsing & energi" },
  { id: 44, name: "NRG Tea", price: 210000, category: "herbalife", mainCat: "herbalife", emoji: "⚡", desc: "Teh guarana untuk stamina & fokus" },
  { id: 45, name: "Liftoff Effervescent", price: 145000, category: "herbalife", mainCat: "herbalife", emoji: "🚀", desc: "Tablet energi instan 10 sachet" },
  { id: 46, name: "Fiber & Herb", price: 165000, category: "herbalife", mainCat: "herbalife", emoji: "🌿", desc: "Suplemen serat untuk pencernaan" },
  { id: 47, name: "Protein Powder PPP", price: 280000, category: "herbalife", mainCat: "herbalife", emoji: "💪", desc: "Personalized Protein Powder" },
  { id: 48, name: "Cell-U-Loss", price: 175000, category: "herbalife", mainCat: "herbalife", emoji: "💧", desc: "Membantu mengurangi retensi air" },

  // === SERVICE HP & ELEKTRO ===
  { id: 49, name: "Ganti LCD HP", price: 150000, category: "service", mainCat: "service", emoji: "📱", desc: "Ganti LCD/layar HP (harga mulai dari)", badge: "Populer" },
  { id: 50, name: "Ganti Baterai HP", price: 75000, category: "service", mainCat: "service", emoji: "🔋", desc: "Ganti baterai HP semua merk" },
  { id: 51, name: "Service Software HP", price: 50000, category: "service", mainCat: "service", emoji: "⚙️", desc: "Flash, unlock, install ulang HP" },
  { id: 52, name: "Ganti Konektor Cas", price: 60000, category: "service", mainCat: "service", emoji: "🔌", desc: "Ganti port charging HP" },
  { id: 53, name: "Service Kipas Angin", price: 40000, category: "service", mainCat: "service", emoji: "🌀", desc: "Service & perbaikan kipas angin" },
  { id: 54, name: "Service Setrika", price: 35000, category: "service", mainCat: "service", emoji: "👔", desc: "Perbaikan setrika listrik" },
  { id: 55, name: "Service Rice Cooker", price: 45000, category: "service", mainCat: "service", emoji: "🍚", desc: "Perbaikan magic com/rice cooker" },
  { id: 56, name: "Pasang Tempered Glass", price: 20000, category: "service", mainCat: "service", emoji: "🛡️", desc: "Pasang anti gores kaca HP" },
  { id: 57, name: "Service Dispenser", price: 50000, category: "service", mainCat: "service", emoji: "💧", desc: "Perbaikan dispenser air" },
  { id: 58, name: "Isi Ulang Tinta Printer", price: 25000, category: "service", mainCat: "service", emoji: "🖨️", desc: "Refill tinta printer semua merk" },

  // === TOP UP GAME ===
  { id: 59, name: "Mobile Legends 86 Diamond", price: 19000, category: "topup", mainCat: "topup", emoji: "⚔️", desc: "Top up diamond ML via ID", badge: "Terlaris" },
  { id: 60, name: "Mobile Legends 172 Diamond", price: 37000, category: "topup", mainCat: "topup", emoji: "⚔️", desc: "Top up diamond ML via ID" },
  { id: 61, name: "Mobile Legends 344 Diamond", price: 72000, category: "topup", mainCat: "topup", emoji: "⚔️", desc: "Top up diamond ML via ID" },
  { id: 62, name: "Mobile Legends 706 Diamond", price: 143000, category: "topup", mainCat: "topup", emoji: "⚔️", desc: "Top up diamond ML via ID", badge: "Hemat" },
  { id: 63, name: "Free Fire 100 Diamond", price: 15000, category: "topup", mainCat: "topup", emoji: "🔥", desc: "Top up diamond FF via ID", badge: "Populer" },
  { id: 64, name: "Free Fire 310 Diamond", price: 46000, category: "topup", mainCat: "topup", emoji: "🔥", desc: "Top up diamond FF via ID" },
  { id: 65, name: "Free Fire 520 Diamond", price: 72000, category: "topup", mainCat: "topup", emoji: "🔥", desc: "Top up diamond FF via ID" },
  { id: 66, name: "PUBG Mobile 60 UC", price: 15000, category: "topup", mainCat: "topup", emoji: "🎯", desc: "Top up UC PUBG Mobile" },
  { id: 67, name: "PUBG Mobile 325 UC", price: 75000, category: "topup", mainCat: "topup", emoji: "🎯", desc: "Top up UC PUBG Mobile" },
  { id: 68, name: "Genshin Impact 60 Genesis", price: 16000, category: "topup", mainCat: "topup", emoji: "🌟", desc: "Top up Genesis Crystal Genshin" },
  { id: 69, name: "Genshin Impact 330 Genesis", price: 79000, category: "topup", mainCat: "topup", emoji: "🌟", desc: "Top up Genesis Crystal Genshin", badge: "Hot" },
  { id: 70, name: "Valorant 125 VP", price: 15000, category: "topup", mainCat: "topup", emoji: "🎮", desc: "Top up Valorant Points" },
  { id: 71, name: "Valorant 425 VP", price: 50000, category: "topup", mainCat: "topup", emoji: "🎮", desc: "Top up Valorant Points" },
  { id: 72, name: "Roblox 80 Robux", price: 15000, category: "topup", mainCat: "topup", emoji: "🧱", desc: "Top up Robux Roblox", badge: "Gen Z Fav" },
  { id: 73, name: "Roblox 400 Robux", price: 70000, category: "topup", mainCat: "topup", emoji: "🧱", desc: "Top up Robux Roblox" },
  { id: 74, name: "Roblox 800 Robux", price: 135000, category: "topup", mainCat: "topup", emoji: "🧱", desc: "Top up Robux Roblox" },
  { id: 75, name: "Honkai Star Rail 60 Oneiric", price: 16000, category: "topup", mainCat: "topup", emoji: "✨", desc: "Top up Oneiric Shard HSR" },
  { id: 76, name: "Honkai Star Rail 330 Oneiric", price: 79000, category: "topup", mainCat: "topup", emoji: "✨", desc: "Top up Oneiric Shard HSR" },
  { id: 77, name: "Clash of Clans 80 Gems", price: 15000, category: "topup", mainCat: "topup", emoji: "🏰", desc: "Top up Gems COC" },
  { id: 78, name: "Clash of Clans 500 Gems", price: 75000, category: "topup", mainCat: "topup", emoji: "🏰", desc: "Top up Gems COC" },
  { id: 79, name: "Call of Duty Mobile 80 CP", price: 15000, category: "topup", mainCat: "topup", emoji: "💀", desc: "Top up CP CODM" },
  { id: 80, name: "Fortnite 1000 V-Bucks", price: 60000, category: "topup", mainCat: "topup", emoji: "🎯", desc: "Top up V-Bucks Fortnite" },
  { id: 81, name: "Stumble Guys 250 Gems", price: 30000, category: "topup", mainCat: "topup", emoji: "🏃", desc: "Top up Gems Stumble Guys" },
  { id: 82, name: "Minecraft 1720 Minecoins", price: 75000, category: "topup", mainCat: "topup", emoji: "⛏️", desc: "Top up Minecoins Minecraft" },
  { id: 83, name: "Among Us Stars 50", price: 25000, category: "topup", mainCat: "topup", emoji: "🚀", desc: "Top up Stars Among Us" },
  { id: 84, name: "Arena of Valor 90 Voucher", price: 20000, category: "topup", mainCat: "topup", emoji: "🗡️", desc: "Top up Voucher AOV" },
  { id: 85, name: "Zenless Zone Zero 60 Polychrome", price: 16000, category: "topup", mainCat: "topup", emoji: "⚡", desc: "Top up Polychrome ZZZ" },
  { id: 86, name: "Wuthering Waves 60 Lunite", price: 16000, category: "topup", mainCat: "topup", emoji: "🌊", desc: "Top up Lunite Wuthering Waves" },
  { id: 87, name: "Tower of Fantasy 60 Tanium", price: 16000, category: "topup", mainCat: "topup", emoji: "🗼", desc: "Top up Tanium ToF" },
  { id: 88, name: "FIFA Mobile 100 Points", price: 15000, category: "topup", mainCat: "topup", emoji: "⚽", desc: "Top up FIFA Points" },

  // === AKUN PREMIUM ===
  { id: 89, name: "Netflix Premium 1 Bulan", price: 45000, category: "akun", mainCat: "akun", emoji: "🎬", desc: "Akun Netflix Premium UHD 4K", badge: "Best Seller" },
  { id: 90, name: "Netflix Premium 3 Bulan", price: 120000, category: "akun", mainCat: "akun", emoji: "🎬", desc: "Netflix Premium 3 bulan hemat", badge: "Hemat" },
  { id: 91, name: "Spotify Premium 1 Bulan", price: 15000, category: "akun", mainCat: "akun", emoji: "🎵", desc: "Spotify Premium tanpa iklan", badge: "Laris" },
  { id: 92, name: "Spotify Premium 6 Bulan", price: 75000, category: "akun", mainCat: "akun", emoji: "🎵", desc: "Spotify Premium 6 bulan hemat" },
  { id: 93, name: "YouTube Premium 1 Bulan", price: 20000, category: "akun", mainCat: "akun", emoji: "▶️", desc: "YouTube tanpa iklan + Music", badge: "Populer" },
  { id: 94, name: "YouTube Premium 3 Bulan", price: 55000, category: "akun", mainCat: "akun", emoji: "▶️", desc: "YouTube Premium 3 bulan hemat" },
  { id: 95, name: "Disney+ Hotstar 1 Bulan", price: 20000, category: "akun", mainCat: "akun", emoji: "🏰", desc: "Disney+ Hotstar Premium" },
  { id: 96, name: "Disney+ Hotstar 1 Tahun", price: 100000, category: "akun", mainCat: "akun", emoji: "🏰", desc: "Disney+ Hotstar Premium setahun", badge: "Hemat" },
  { id: 97, name: "Canva Pro 1 Bulan", price: 25000, category: "akun", mainCat: "akun", emoji: "🎨", desc: "Canva Pro full fitur design" },
  { id: 98, name: "Canva Pro 1 Tahun", price: 150000, category: "akun", mainCat: "akun", emoji: "🎨", desc: "Canva Pro setahun super hemat", badge: "Best Deal" },
  { id: 99, name: "ChatGPT Plus 1 Bulan", price: 200000, category: "akun", mainCat: "akun", emoji: "🤖", desc: "ChatGPT Plus GPT-4 akses penuh", badge: "Hot" },
  { id: 100, name: "Microsoft 365 1 Tahun", price: 85000, category: "akun", mainCat: "akun", emoji: "💼", desc: "Word, Excel, PowerPoint 1TB OneDrive" },
  { id: 101, name: "Zoom Pro 1 Bulan", price: 45000, category: "akun", mainCat: "akun", emoji: "📹", desc: "Zoom meeting tanpa batas 30 jam" },
  { id: 102, name: "WeTV VIP 1 Bulan", price: 15000, category: "akun", mainCat: "akun", emoji: "📺", desc: "WeTV Premium drakor & variety show" },
  { id: 103, name: "Vidio Premium 1 Bulan", price: 20000, category: "akun", mainCat: "akun", emoji: "🎞️", desc: "Vidio Premium film & sport" },
  { id: 104, name: "VIU Premium 1 Bulan", price: 15000, category: "akun", mainCat: "akun", emoji: "📱", desc: "VIU Premium drakor tanpa iklan" },
  { id: 105, name: "Apple Music 1 Bulan", price: 20000, category: "akun", mainCat: "akun", emoji: "🍎", desc: "Apple Music full catalog premium" },
  { id: 106, name: "Amazon Prime Video", price: 25000, category: "akun", mainCat: "akun", emoji: "📦", desc: "Amazon Prime Video 1 bulan" },
  { id: 107, name: "Grammarly Premium 1 Bulan", price: 35000, category: "akun", mainCat: "akun", emoji: "✍️", desc: "Grammarly Premium cek grammar AI" },
  { id: 108, name: "NordVPN Premium 1 Bulan", price: 20000, category: "akun", mainCat: "akun", emoji: "🔒", desc: "NordVPN akses server global" },
  { id: 109, name: "Adobe Creative Cloud", price: 75000, category: "akun", mainCat: "akun", emoji: "🖌️", desc: "Photoshop, Illustrator, Premiere 1 bln" },
  { id: 110, name: "IMEI Registration", price: 50000, category: "akun", mainCat: "akun", emoji: "📲", desc: "Jasa daftar IMEI HP resmi Kemenperin" },
  { id: 111, name: "iCloud Storage 50GB", price: 15000, category: "akun", mainCat: "akun", emoji: "☁️", desc: "iCloud 50GB penyimpanan 1 bulan" },
  { id: 112, name: "iCloud Storage 200GB", price: 45000, category: "akun", mainCat: "akun", emoji: "☁️", desc: "iCloud 200GB penyimpanan 1 bulan" },
  { id: 113, name: "HBO GO Premium", price: 25000, category: "akun", mainCat: "akun", emoji: "🎭", desc: "HBO GO Premium 1 bulan" },
  { id: 114, name: "IQIYI VIP 1 Bulan", price: 15000, category: "akun", mainCat: "akun", emoji: "📺", desc: "IQIYI VIP Premium tanpa iklan" },
  { id: 115, name: "Duolingo Plus 1 Bulan", price: 30000, category: "akun", mainCat: "akun", emoji: "🦉", desc: "Duolingo Plus belajar bahasa premium" },
  { id: 116, name: "Scribd Premium 1 Bulan", price: 25000, category: "akun", mainCat: "akun", emoji: "📚", desc: "Scribd unlimited buku & audiobook" },
];

// ---- NOMOR WHATSAPP ----
const WHATSAPP_NUMBER = "6281266002147";

// ---- STATE ----
let cart = [];
let activeMainCategory = "jualan";
let activeCategory = "semua";
let searchQuery = "";

// ---- DOM ELEMENTS ----
const productsGrid = document.getElementById("productsGrid");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEls = document.querySelectorAll(".cart-count");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const waBtn = document.getElementById("waBtn");
const toastContainer = document.getElementById("toastContainer");
const searchInput = document.getElementById("searchInput");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const subTabs = document.getElementById("subTabs");
const transferSection = document.getElementById("transferSection");

// ---- MAIN CATEGORY ----
function setMainCategory(mainCat) {
  activeMainCategory = mainCat;

  // Update main tabs
  document.querySelectorAll(".main-tabs .category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === mainCat);
  });

  // Show/hide sub tabs (only for jualan)
  if (mainCat === "jualan") {
    subTabs.style.display = "";
    transferSection.style.display = "none";
    productsGrid.style.display = "";
    activeCategory = "semua";
    // Reset sub-tab active
    document.querySelectorAll(".sub-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === "semua");
    });
  } else if (mainCat === "transfer") {
    subTabs.style.display = "none";
    transferSection.style.display = "";
    productsGrid.style.display = "none";
    return; // Don't render products
  } else {
    subTabs.style.display = "none";
    transferSection.style.display = "none";
    productsGrid.style.display = "";
  }

  renderProducts();
}

// ---- RENDER PRODUCTS ----
function renderProducts() {
  let filtered = products;

  // Filter by main category
  if (activeMainCategory === "jualan") {
    filtered = filtered.filter(p => p.mainCat === "jualan");
    if (activeCategory !== "semua") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
  } else {
    filtered = filtered.filter(p => p.mainCat === activeMainCategory);
  }

  // Search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:#7f8c8d;">
        <div style="font-size:3rem; margin-bottom:16px;">🔍</div>
        <p style="font-weight:600; font-size:1.1rem;">Produk tidak ditemukan</p>
        <span style="font-size:0.9rem;">Coba kata kunci lain atau pilih kategori berbeda</span>
      </div>`;
    return;
  }

  productsGrid.innerHTML = filtered.map((p, i) => {
    const inCart = cart.find(c => c.id === p.id);
    const badgeClass = p.badge === "Best Seller" || p.badge === "Laris" || p.badge === "Favorit" || p.badge === "Populer" || p.badge === "Segar" || p.badge === "Premium" || p.badge === "Terlaris" || p.badge === "Gen Z Fav" || p.badge === "Hot" || p.badge === "Best Deal"
      ? "best-seller" : "";

    // For service items, show "Mulai dari" prefix
    const pricePrefix = p.mainCat === "service" ? '<span class="price-prefix">mulai </span>' : '';

    return `
      <div class="product-card" style="animation-delay:${i * 0.05}s" id="product-${p.id}">
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
        <div class="product-image ${p.mainCat === 'ayam' ? 'ayam-bg' : ''} ${p.mainCat === 'herbalife' ? 'herbalife-bg' : ''} ${p.mainCat === 'service' ? 'service-bg' : ''} ${p.mainCat === 'topup' ? 'topup-bg' : ''} ${p.mainCat === 'akun' ? 'akun-bg' : ''}">${p.emoji}</div>
        <div class="product-info">
          <div class="product-category-label">${getCategoryLabel(p.category, p.mainCat)}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <div class="product-price">${pricePrefix}<span class="currency">Rp</span>${formatPrice(p.price)}</div>
            <button class="add-to-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${p.id})" title="Tambah ke keranjang" aria-label="Tambah ${p.name} ke keranjang">
              ${inCart ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function getCategoryLabel(cat, mainCat) {
  const labels = {
    beras: "Beras", rokok: "Rokok", jajanan: "Jajanan", minuman: "Minuman Dingin",
    ayam: "Jualan Ayam", herbalife: "Obat Herbalife", service: "Service HP & Elektro",
    topup: "Top Up Game", akun: "Akun Premium"
  };
  return labels[cat] || cat;
}

function formatPrice(n) {
  return n.toLocaleString("id-ID");
}

// ---- TRANSFER FEE CALCULATOR ----
function calculateTransferFee() {
  const input = document.getElementById("transferAmount");
  const nominalEl = document.getElementById("transferNominal");
  const feeEl = document.getElementById("transferFee");
  const totalEl = document.getElementById("transferTotal");

  // Remove non-numeric characters for calculation
  let rawValue = input.value.replace(/[^0-9]/g, "");
  let amount = parseInt(rawValue) || 0;

  // Format the input value with dots
  if (rawValue) {
    input.value = parseInt(rawValue).toLocaleString("id-ID");
  }

  let fee = 0;
  if (amount > 0) {
    if (amount > 5000000) {
      fee = 20000;
    } else if (amount > 2000000) {
      fee = 15000;
    } else if (amount >= 500000) {
      fee = 10000;
    } else {
      fee = 5000;
    }
  }

  nominalEl.textContent = `Rp${formatPrice(amount)}`;
  feeEl.textContent = `Rp${formatPrice(fee)}`;
  totalEl.textContent = `Rp${formatPrice(amount + fee)}`;
}

// ---- CART FUNCTIONS ----
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
  renderProducts();
  showToast(`${product.emoji} ${product.name} ditambahkan!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
  renderProducts();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  updateCart();
}

function updateCart() {
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);

  // Update counts
  cartCountEls.forEach(el => {
    el.textContent = totalItems;
    el.classList.add("pulse");
    setTimeout(() => el.classList.remove("pulse"), 400);
  });

  // Update total
  cartTotalEl.textContent = `Rp${formatPrice(totalPrice)}`;

  // Enable/disable WA button
  waBtn.disabled = cart.length === 0;

  // Render items
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Keranjang masih kosong</p>
        <span>Yuk pilih produk favorit Anda!</span>
      </div>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-emoji">${item.emoji}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">Rp${formatPrice(item.price)} × ${item.qty} = <strong>Rp${formatPrice(item.price * item.qty)}</strong></div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Kurangi">−</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Tambah">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Hapus">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  // Save to localStorage
  localStorage.setItem("kedaiNindyCart", JSON.stringify(cart));
}

// ---- CART SIDEBAR TOGGLE ----
function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ---- WHATSAPP ORDER ----
function sendWhatsApp() {
  if (cart.length === 0) return;

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  let message = `🛒 *Pesanan dari Kedai Nindy*\n\n`;

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.emoji} ${item.name}\n`;
    message += `   ${item.qty} × Rp${formatPrice(item.price)} = *Rp${formatPrice(item.price * item.qty)}*\n`;
  });

  message += `\n──────────────\n`;
  message += `💰 *Total: Rp${formatPrice(total)}*\n\n`;
  message += `Terima kasih! 🙏`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ---- CATEGORY FILTER (sub-category for Jualan) ----
function setCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".sub-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });

  renderProducts();
}

// ---- SEARCH ----
function handleSearch(e) {
  searchQuery = e.target.value;
  renderProducts();
}

// ---- TOAST NOTIFICATION ----
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✅</span> ${message}`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ---- NAVBAR SCROLL ----
function handleScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- MOBILE MENU ----
function toggleMobileMenu() {
  document.querySelector(".navbar-links").classList.toggle("mobile-open");
}

// ---- INITIALIZE ----
document.addEventListener("DOMContentLoaded", () => {
  // Load saved cart
  const saved = localStorage.getItem("kedaiNindyCart");
  if (saved) {
    try { cart = JSON.parse(saved); } catch (e) { cart = []; }
  }

  renderProducts();
  updateCart();

  // Events
  searchInput.addEventListener("input", handleSearch);
  window.addEventListener("scroll", handleScroll);

  // Close mobile menu on link click
  document.querySelectorAll(".navbar-links a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".navbar-links").classList.remove("mobile-open");
    });
  });
});
