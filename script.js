// ============================================
// KEDAI NINDY - Script
// ============================================

// ---- DATA PRODUK ----
// Ganti nama, harga, emoji, dan deskripsi sesuai kebutuhan Ibu
const products = [
  // === BERAS ===
  { id: 1, name: "Beras Premium 5kg", price: 65000, category: "beras", emoji: "🍚", desc: "Beras pulen kualitas terbaik", badge: "Best Seller" },
  { id: 2, name: "Beras Medium 5kg", price: 55000, category: "beras", emoji: "🍚", desc: "Beras sehari-hari harga terjangkau" },
  { id: 3, name: "Beras Merah 1kg", price: 22000, category: "beras", emoji: "🌾", desc: "Beras merah organik sehat" },
  { id: 4, name: "Beras Ketan 1kg", price: 25000, category: "beras", emoji: "🍘", desc: "Untuk kue dan jajanan tradisional" },
  { id: 5, name: "Beras Premium 10kg", price: 125000, category: "beras", emoji: "🍚", desc: "Beras premium kemasan besar", badge: "Hemat" },
  { id: 6, name: "Beras Pandan Wangi 5kg", price: 72000, category: "beras", emoji: "🌿", desc: "Nasi wangi alami pandan" },

  // === ROKOK ===
  { id: 7, name: "Gudang Garam Filter", price: 28000, category: "rokok", emoji: "🚬", desc: "GG Filter 12 batang" },
  { id: 8, name: "Djarum Super", price: 26000, category: "rokok", emoji: "🚬", desc: "Djarum Super 12 batang", badge: "Populer" },
  { id: 9, name: "Surya 16", price: 32000, category: "rokok", emoji: "🚬", desc: "Gudang Garam Surya 16 batang" },
  { id: 10, name: "Sampoerna Mild", price: 30000, category: "rokok", emoji: "🚬", desc: "A Mild 16 batang" },
  { id: 11, name: "LA Bold", price: 24000, category: "rokok", emoji: "🚬", desc: "LA Bold 16 batang" },
  { id: 12, name: "Magnum Filter", price: 18000, category: "rokok", emoji: "🚬", desc: "Magnum Filter 12 batang" },

  // === JAJANAN ===
  { id: 13, name: "Chitato Sapi Panggang", price: 10000, category: "jajanan", emoji: "🍟", desc: "Keripik kentang rasa sapi panggang" },
  { id: 14, name: "Indomie Goreng", price: 3500, category: "jajanan", emoji: "🍜", desc: "Mi instan goreng favorit", badge: "Laris" },
  { id: 15, name: "Oreo Original", price: 8000, category: "jajanan", emoji: "🍪", desc: "Biskuit Oreo rasa original" },
  { id: 16, name: "Taro Net", price: 3000, category: "jajanan", emoji: "🥨", desc: "Snack ringan renyah" },
  { id: 17, name: "Richeese Nabati", price: 5000, category: "jajanan", emoji: "🧀", desc: "Wafer keju lezat" },
  { id: 18, name: "Beng-Beng", price: 3500, category: "jajanan", emoji: "🍫", desc: "Wafer karamel cokelat" },
  { id: 19, name: "Qtela Tempe", price: 9000, category: "jajanan", emoji: "🍘", desc: "Keripik tempe original krispi" },
  { id: 20, name: "Pop Mie Ayam", price: 5500, category: "jajanan", emoji: "🍜", desc: "Mi cup rasa ayam" },

  // === MINUMAN DINGIN ===
  { id: 21, name: "Es Teh Pucuk Harum", price: 4000, category: "minuman", emoji: "🧊", desc: "Teh manis dingin segar" },
  { id: 22, name: "Coca-Cola 390ml", price: 6000, category: "minuman", emoji: "🥤", desc: "Minuman bersoda menyegarkan" },
  { id: 23, name: "Aqua 600ml", price: 4000, category: "minuman", emoji: "💧", desc: "Air mineral segar" },
  { id: 24, name: "Pocari Sweat 500ml", price: 8000, category: "minuman", emoji: "🥤", desc: "Minuman isotonik" },
  { id: 25, name: "Teh Botol Sosro", price: 5000, category: "minuman", emoji: "🍵", desc: "Teh manis original", badge: "Favorit" },
  { id: 26, name: "Sprite 390ml", price: 6000, category: "minuman", emoji: "🥤", desc: "Minuman lemon lime segar" },
  { id: 27, name: "Fanta Strawberry", price: 6000, category: "minuman", emoji: "🍓", desc: "Soda rasa stroberi segar" },
  { id: 28, name: "Yakult", price: 3000, category: "minuman", emoji: "🥛", desc: "Minuman probiotik sehat" },
  { id: 29, name: "Es Kopi Susu ABC", price: 5000, category: "minuman", emoji: "☕", desc: "Kopi susu siap minum" },
  { id: 30, name: "Floridina Orange", price: 4000, category: "minuman", emoji: "🍊", desc: "Minuman jeruk dengan bulir asli" },
];

// ---- NOMOR WHATSAPP ----
const WHATSAPP_NUMBER = "6281266002147"; // Ganti dengan nomor WhatsApp Anda

// ---- STATE ----
let cart = [];
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

// ---- RENDER PRODUCTS ----
function renderProducts() {
  let filtered = products;

  if (activeCategory !== "semua") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

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
    const badgeClass = p.badge === "Best Seller" || p.badge === "Laris" || p.badge === "Favorit" || p.badge === "Populer"
      ? "best-seller" : "";
    return `
      <div class="product-card" style="animation-delay:${i * 0.05}s" id="product-${p.id}">
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
        <div class="product-image">${p.emoji}</div>
        <div class="product-info">
          <div class="product-category-label">${getCategoryLabel(p.category)}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-footer">
            <div class="product-price"><span class="currency">Rp</span>${formatPrice(p.price)}</div>
            <button class="add-to-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${p.id})" title="Tambah ke keranjang" aria-label="Tambah ${p.name} ke keranjang">
              ${inCart ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function getCategoryLabel(cat) {
  const labels = { beras: "Beras", rokok: "Rokok", jajanan: "Jajanan", minuman: "Minuman Dingin" };
  return labels[cat] || cat;
}

function formatPrice(n) {
  return n.toLocaleString("id-ID");
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

// ---- CATEGORY FILTER ----
function setCategory(category) {
  activeCategory = category;

  document.querySelectorAll(".category-tab").forEach(tab => {
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
