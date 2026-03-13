// ============================================
// KEDAI NINDY - Script
// Data produk dimuat dari products.js (DEFAULT_PRODUCTS)
// ============================================

// ---- DATA PRODUK ----
// Cek localStorage dulu (dari Admin Panel), kalau kosong pakai default dari products.js
const _savedProducts = localStorage.getItem("kedaiNindyProducts");
let products = _savedProducts ? JSON.parse(_savedProducts) : [...DEFAULT_PRODUCTS];

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
