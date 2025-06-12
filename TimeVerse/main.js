// const INSTAGRAM_USERNAME = "timeverse_official";
// const featuredGrid = document.getElementById('featured-grid');

// document.addEventListener('DOMContentLoaded', function () {
//     const themeBtn = document.getElementById('theme-toggle');
//     if (!localStorage.getItem('theme')) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//         localStorage.setItem('theme', 'dark');
//     } else if (localStorage.getItem('theme') === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         themeBtn.innerText = "🌙";
//     }
//     themeBtn.onclick = function () {
//         if (document.documentElement.getAttribute('data-theme') === 'dark') {
//             document.documentElement.setAttribute('data-theme', 'light');
//             themeBtn.innerText = "🌙";
//             localStorage.setItem('theme', 'light');
//         } else {
//             document.documentElement.setAttribute('data-theme', 'dark');
//             themeBtn.innerText = "☀️";
//             localStorage.setItem('theme', 'dark');
//         }
//     };
// });

// function toggleMenu() {
//     const nav = document.querySelector('header nav');
//     nav.classList.toggle('active');
// }

// function fadeInOnScroll() {
//     document.querySelectorAll('.fade-in').forEach(el => {
//         const pos = el.getBoundingClientRect();
//         if (pos.top < window.innerHeight - 60) {
//             el.classList.add('visible');
//         }
//     });
// }
// window.addEventListener('scroll', fadeInOnScroll);
// window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// function showFeatured(products) {
//     featuredGrid.innerHTML = '';
//     let featuredProducts = products.slice(0, 6);
//     featuredProducts.forEach((product, idx) => {
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         setTimeout(() => card.classList.add('visible'), 80 + idx * 60);
//         card.innerHTML = `
//       <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
//       <h3>${product.title}</h3>
//       <div class="price">&#8377;${product.price}</div>
//       <p>${product.description}</p>
//       <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
//     `;
//         featuredGrid.appendChild(card);
//     });
// }

// function enquireProduct(productId, productTitle) {
//     const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
//     const modal = document.createElement('div');
//     modal.style.position = "fixed";
//     modal.style.inset = "0";
//     modal.style.background = "rgba(0,0,0,0.85)";
//     modal.style.display = "flex";
//     modal.style.alignItems = "center";
//     modal.style.justifyContent = "center";
//     modal.style.zIndex = 9999;
//     modal.innerHTML = `
//     <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
//       <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
//       <textarea style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
//       <div>
//         <button onclick="navigator.clipboard.writeText('${msg.replace(/'/g, "\\'")}');this.innerText='Copied!';" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
//         <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
//       </div>
//       <div style="margin-top:1.2rem;">
//         <button onclick="this.closest('div').parentNode.remove();" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
//       </div>
//     </div>
//   `;
//     document.body.appendChild(modal);
// }

// window.zoomImage = function (imgUrl) {
//     const modal = document.createElement('div');
//     modal.style.position = "fixed"; modal.style.inset = "0";
//     modal.style.background = "rgba(0,0,0,0.86)";
//     modal.style.display = "flex"; modal.style.alignItems = "center"; modal.style.justifyContent = "center";
//     modal.style.zIndex = 9999;
//     modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
//     <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
//     modal.onclick = e => { if (e.target === modal) modal.remove(); }
//     document.body.appendChild(modal);
// }

// fetch('products.json')
//     .then(response => response.json())
//     .then(products => {
//         showFeatured(products);
//     })
//     .catch(() => {
//         featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
//     });

const INSTAGRAM_USERNAME = "timeverse_official";
const featuredGrid = document.getElementById('featured-grid');

document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-toggle');
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️";
        localStorage.setItem('theme', 'dark');
    } else if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerText = "🌙";
    }
    themeBtn.onclick = function () {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.innerText = "🌙";
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.innerText = "☀️";
            localStorage.setItem('theme', 'dark');
        }
    };
});

function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

function fadeInOnScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const pos = el.getBoundingClientRect();
        if (pos.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

function showFeatured(products) {
    featuredGrid.innerHTML = '';
    let featuredProducts = products.slice(0, 6);
    featuredProducts.forEach((product, idx) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        setTimeout(() => card.classList.add('visible'), 80 + idx * 60);
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
            <h3>${product.title}</h3>
            <div class="price">&#8377;${product.price}</div>
            <p>${product.description}</p>
            <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
        `;
        featuredGrid.appendChild(card);
    });
}

function enquireProduct(productId, productTitle) {
    const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = 9999;
    modal.innerHTML = `
        <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
            <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
            <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
            <div>
                <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
                <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
            </div>
            <div style="margin-top:1.2rem;">
                <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Attach event listeners for copy and close
    modal.querySelector("#copy-btn").onclick = function () {
        const text = modal.querySelector("#insta-msg").value;
        navigator.clipboard.writeText(text)
            .then(() => { this.innerText = "Copied!"; })
            .catch(() => { this.innerText = "Failed!"; });
    };
    modal.querySelector("#close-btn").onclick = function () {
        modal.remove();
    };
}

window.enquireProduct = enquireProduct;

window.zoomImage = function (imgUrl) {
    const modal = document.createElement('div');
    modal.style.position = "fixed"; modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.86)";
    modal.style.display = "flex"; modal.style.alignItems = "center"; modal.style.justifyContent = "center";
    modal.style.zIndex = 9999;
    modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
    <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
    modal.onclick = e => { if (e.target === modal) modal.remove(); }
    document.body.appendChild(modal);
}

fetch('products.json')
    .then(response => response.json())
    .then(products => {
        showFeatured(products);
    })
    .catch(() => {
        featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
    });


const reviewsKey = "timeverseReviews";
const reviewsList = document.getElementById('reviews-list');
const reviewForm = document.getElementById('review-form');
const starSelect = document.getElementById('star-select');
const ADMIN_NAME = "Ekansh05060"; // your login

// Star select state
let selectedStars = 5;
let hoverStars = 0;

// Render stars for the form
function renderStarSelect() {
    starSelect.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("viewBox", "0 0 24 24");
        star.classList.add("star");
        if (hoverStars >= i) {
            star.classList.add("hovered");
        } else if (!hoverStars && selectedStars >= i) {
            star.classList.add("selected");
        }
        star.innerHTML = `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`;
        star.addEventListener('mouseenter', () => { hoverStars = i; renderStarSelect(); });
        star.addEventListener('mouseleave', () => { hoverStars = 0; renderStarSelect(); });
        star.addEventListener('click', () => { selectedStars = i; renderStarSelect(); });
        starSelect.appendChild(star);
    }
}

// Render review cards
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
    reviewsList.innerHTML = '';
    if (reviews.length === 0) {
        reviewsList.innerHTML = "<p style='color:var(--text-muted)'>No reviews yet. Be the first to review!</p>";
        return;
    }
    reviews.slice().reverse().forEach((r, idx) => {
        const realIdx = reviews.length - 1 - idx;
        const div = document.createElement('div');
        div.className = "review-card";
        let deleteBtn = '';
        if (getCurrentUsername() === ADMIN_NAME) {
            deleteBtn = `<button class="delete-btn" title="Delete review" data-index="${realIdx}">🗑️</button>`;
        }
        div.innerHTML = `
      <div class="stars">
        ${getStarsSVG(r.stars)}
      </div>
      <span class="review-date">${r.date}</span>
      <div>
        <span class="quote">“</span>
        <span class="review-text">${escapeHtml(r.text)}</span>
        <span class="quote" style="float:right;">”</span>
      </div>
      <div class="review-meta">
        <span class="avatar">${getInitial(r.name)}</span>
        <span class="meta-names">
          <span class="reviewer">${escapeHtml(r.name)}</span>
          <span class="email">${escapeHtml(r.email)}</span>
        </span>
      </div>
      ${deleteBtn}
    `;
        reviewsList.appendChild(div);
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = function () {
            const i = parseInt(this.getAttribute('data-index'));
            if (confirm("Delete this review?")) {
                deleteReview(i);
            }
        }
    });
}

// Use sessionStorage for simple admin check
function getCurrentUsername() {
    let user = sessionStorage.getItem("currentUser");
    if (!user) {
        user = prompt("Enter your admin name for full control (leave blank for guest):") || "Guest";
        sessionStorage.setItem("currentUser", user);
    }
    return user;
}

function deleteReview(index) {
    const reviews = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
    reviews.splice(index, 1);
    localStorage.setItem(reviewsKey, JSON.stringify(reviews));
    loadReviews();
}

function escapeHtml(text) {
    return text.replace(/[<>&"']/g, c => ({
        '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;'
    })[c]);
}

function getInitial(name) {
    return name?.trim().charAt(0).toUpperCase() || "U";
}

function getStarsSVG(count) {
    const starSVG = `<svg viewBox="0 0 24 24" class="star" style="width:22px;height:22px;fill:#183153;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    return starSVG.repeat(count);
}

function getReadableDate(date) {
    if (!date) return "";
    const now = new Date();
    const d = typeof date === "string" ? new Date(date) : date;
    const diff = (now - d) / 86400000;
    if (diff < 1 && now.getDate() === d.getDate()) return "Today";
    if (diff < 2 && now.getDate() - d.getDate() === 1) return "Yesterday";
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

if (reviewForm) {
    reviewForm.onsubmit = function (e) {
        e.preventDefault();
        const name = document.getElementById('reviewer').value.trim() || "Anonymous";
        const email = document.getElementById('review-email').value.trim() || "N/A";
        const text = document.getElementById('review-text').value.trim();
        if (!text || !email || selectedStars < 1) return;
        const reviews = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
        reviews.push({
            name: name,
            email: email,
            text: text,
            stars: selectedStars,
            date: getReadableDate(new Date())
        });
        localStorage.setItem(reviewsKey, JSON.stringify(reviews));
        reviewForm.reset();
        selectedStars = 5; hoverStars = 0; renderStarSelect();
        loadReviews();
    };
}

// Initial render
renderStarSelect();
loadReviews();