/* =====================================================
   Explore India – script.js
   Images are read from the "images" folder. If an image
   is missing, the CSS gradient background shows instead.
   ===================================================== */

/* ---------- 1. DATA (easy to edit) ---------- */
const destinations = [
  { name: 'Goa', img: 'goa', best: 'November – February', desc: 'Sun, sand, seafood and lively nightlife.', cost: 1.1,
    reach: 'Fly to Dabolim or Mopa airport; trains stop at Madgaon and Thivim.', budget: '₹2,500 – 6,000 per person per day', food: 'Fish curry rice, bebinca, prawn balchão', tip: 'Visit North Goa for parties and South Goa for quiet beaches.',
    more: ['Famous beaches: Baga, Calangute, Palolem', 'Old Goa churches (UNESCO site)', 'Dudhsagar Falls and spice plantations', 'Flea markets at Anjuna and Mapusa'] },
  { name: 'Kashmir', img: 'kashmir', best: 'April – October', desc: 'Snowy mountains, lakes and tulip gardens.', cost: 1.3,
    reach: 'Fly to Srinagar airport; roads connect from Jammu.', budget: '₹3,500 – 8,000 per person per day', food: 'Rogan josh, wazwan, Kashmiri kahwa tea', tip: 'Visit in April for the Tulip Garden, or in winter for snow.',
    more: ['Dal Lake shikara rides and houseboats', 'Gulmarg gondola and skiing', 'Pahalgam and Sonamarg valleys', 'Mughal Gardens: Nishat and Shalimar'] },
  { name: 'Rajasthan', img: 'rajasthan', best: 'October – March', desc: 'Royal forts, palaces and desert culture.', cost: 1.1,
    reach: 'Airports at Jaipur, Jodhpur and Udaipur; good train links from Delhi.', budget: '₹2,500 – 7,000 per person per day', food: 'Dal baati churma, laal maas, ghewar', tip: 'Book heritage hotels early; they fill fast in winter.',
    more: ['Jaipur: Amber Fort and City Palace', 'Udaipur lakes and Lake Palace', 'Jaisalmer desert safari', 'Colourful markets and folk music'] },
  { name: 'Kerala', img: 'kerala', best: 'September – March', desc: 'Backwaters, tea hills and Ayurveda.', cost: 1.1,
    reach: 'Airports at Kochi and Thiruvananthapuram; trains across the state.', budget: '₹2,500 – 6,500 per person per day', food: 'Appam with stew, Kerala sadya, fish moilee', tip: 'Choose a one-night houseboat stay in Alleppey.',
    more: ['Alleppey houseboats', 'Munnar tea plantations', 'Kathakali dance and Ayurveda spas', 'Periyar wildlife sanctuary'] },
  { name: 'Himachal Pradesh', img: 'himachal', best: 'March – June, Dec – Jan', desc: 'Hill towns, treks and snowy passes.', cost: 1.0,
    reach: 'Nearest airports: Chandigarh, Kullu (Bhuntar); buses from Delhi.', budget: '₹2,000 – 5,500 per person per day', food: 'Siddu, dham, Tibetan momos', tip: 'Carry warm clothes even in summer, and check road status for passes.',
    more: ['Shimla and Manali hill stations', 'Spiti Valley and Rohtang Pass', 'Paragliding at Bir Billing', 'Dharamshala and McLeod Ganj'] },
  { name: 'Maharashtra', img: 'maharashtra', best: 'October – February', desc: 'Mumbai, caves, forts and vineyards.', cost: 0.9,
    reach: 'International airports at Mumbai and Pune; strong rail network.', budget: '₹2,000 – 5,500 per person per day', food: 'Vada pav, misal pav, puran poli', tip: 'Take a local train in Mumbai, but avoid rush hours.',
    more: ['Gateway of India and Marine Drive', 'Ajanta and Ellora Caves', 'Nashik vineyards and Trimbakeshwar', 'Lonavala and Mahabaleshwar hills'] },
  { name: 'Andaman & Nicobar', img: 'andaman', best: 'November – April', desc: 'Clear blue seas and coral islands.', cost: 1.5,
    reach: 'Fly to Port Blair from Chennai, Kolkata or Delhi; ferries to islands.', budget: '₹4,000 – 9,000 per person per day', food: 'Fresh seafood, coconut curries, lobster', tip: 'Book ferries and scuba sessions in advance.',
    more: ['Radhanagar Beach, Havelock', 'Scuba diving and snorkelling', 'Cellular Jail light and sound show', 'Ross and Neil Islands'] },
  { name: 'Gujarat', img: 'gujarat', best: 'November – February', desc: 'Lions, white desert and ancient temples.', cost: 0.9,
    reach: 'Airports at Ahmedabad, Vadodara and Rajkot; good road and rail links.', budget: '₹2,000 – 5,000 per person per day', food: 'Dhokla, thepla, Gujarati thali', tip: 'Plan the Rann Utsav visit between November and February.',
    more: ['Gir National Park – Asiatic lions', 'Rann of Kutch white desert', 'Somnath Temple and Statue of Unity', 'Ahmedabad heritage walk'] }
];

/* [title, image key, description, best time, travel tip] */
const attractions = {
  'Beaches': [
    ['Baga Beach, Goa', 'baga', 'Water sports, beach shacks and sunset music.', 'Nov – Feb', 'Go early morning for calm water.'],
    ['Radhanagar Beach', 'radhanagar', 'White sand and turquoise water on Havelock Island.', 'Nov – Apr', 'Stay until sunset for the best views.'],
    ['Varkala Beach', 'varkala', 'Cliffside cafes above the Arabian Sea.', 'Oct – Mar', 'Walk along the North Cliff at dusk.']],
  'Hill Stations': [
    ['Manali', 'manali', 'Adventure sports near the Beas River.', 'Mar – Jun', 'Try river rafting and Solang Valley.'],
    ['Gulmarg', 'gulmarg', 'Skiing and a high-altitude gondola.', 'Dec – Mar, Jun', 'Book gondola tickets online.'],
    ['Munnar', 'munnar', 'Endless green tea estates and misty hills.', 'Sep – Mar', 'Visit the Tea Museum.']],
  'Historical Places': [
    ['Amber Fort, Jaipur', 'amber', 'A hilltop fort of red sandstone and marble.', 'Oct – Mar', 'Visit early to avoid the crowds.'],
    ['Ajanta & Ellora Caves', 'ajanta', 'Ancient rock-cut art, monasteries and temples.', 'Nov – Feb', 'Ellora is closed on Tuesdays; Ajanta on Mondays.'],
    ['Cellular Jail', 'cellular', 'Colonial-era prison and freedom struggle museum.', 'Nov – Apr', 'Attend the evening light show.']],
  'Wildlife': [
    ['Gir National Park', 'gir', 'The only home of the Asiatic lion.', 'Dec – Mar', 'Book safari permits in advance.'],
    ['Ranthambore', 'ranthambore', 'Famous for tiger sightings near an old fort.', 'Oct – Jun', 'Choose a canter or jeep safari early.'],
    ['Periyar Sanctuary', 'periyar', 'Elephants, bison and boat safaris on the lake.', 'Sep – May', 'Early boat rides give the best sightings.']],
  'Cultural & Religious': [
    ['Somnath Temple', 'somnath', 'A sacred Jyotirlinga temple on the Gujarat coast.', 'Oct – Mar', 'Dress modestly and attend the evening aarti.'],
    ['Trimbakeshwar, Nashik', 'trimbak', 'Ancient temple near the source of the Godavari.', 'Oct – Feb', 'Expect queues on Mondays and festivals.'],
    ['Pushkar', 'pushkar', 'A holy lake town and site of the camel fair.', 'Oct – Mar', 'Visit during Pushkar Fair in November.']]
};

/* Builds the CSS for a picture with a gradient fallback */
/* Pictures with a full path on this computer (works when index.html is opened by double-click) */
const photoPaths = {
  // example: kashmir: 'file:///C:/Folder/kashmir.jpg'   (only works when opened by double-click)
};
const pic = (file) => {
  const list = [photoPaths[file], `images/${file}.jpg`, `images/${file}.svg`].filter(Boolean);
  return 'background-image:' + list.map(u => `url('${u}')`).join(',');
};
const $ = (id) => document.getElementById(id);

/* ---------- 2. NAVIGATION ---------- */
const menu = $('menu');
$('menuBtn').onclick = () => menu.classList.toggle('open');          // mobile menu
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

/* ---------- 3. DESTINATION CARDS + MODAL ---------- */
const destGrid = $('destGrid');
destinations.forEach((d, i) => {
  destGrid.innerHTML += `
    <div class="card">
      <div class="card-img-wrap"><div class="card-img" style="${pic(d.img)}"></div></div>
      <div class="card-body">
        <h3>${d.name}</h3><p>${d.desc}</p>
        <p class="best">Best time: ${d.best}</p>
        <button class="btn" onclick="openModal(${i})">Explore</button>
      </div>
    </div>`;
});

function openModal(i) {
  const d = destinations[i];
  $('modalBody').innerHTML = `
    <div class="card-img" style="${pic(d.img)}"></div>
    <div class="modal-body"><h3>${d.name}</h3><p>${d.desc}</p>
      <p class="best">Best time: ${d.best}</p>
      <h4>Highlights</h4><ul>${d.more.map(m => `<li>${m}</li>`).join('')}</ul>
      <h4>How to reach</h4><p>${d.reach}</p>
      <h4>Approx. budget</h4><p>${d.budget}</p>
      <h4>Local food</h4><p>${d.food}</p>
      <p class="tip">💡 ${d.tip}</p></div>`;
  $('modal').classList.add('open');
}

/* Popular destination chips on the home page */
destinations.slice(0, 5).forEach(d => $('popular').innerHTML += `<a href="#destinations">${d.name}</a>`);

/* ---------- 4. ATTRACTION TABS ---------- */
function showCategory(cat) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.textContent === cat));
  $('attGrid').innerHTML = attractions[cat].map(a => `
    <div class="card">
      <div class="card-img-wrap"><div class="card-img" style="${pic(a[1])}"></div></div>
      <div class="card-body"><h3>${a[0]}</h3><p>${a[2]}</p>
        <p class="best">Best time: ${a[3]}</p><p class="tip">💡 ${a[4]}</p></div>
    </div>`).join('');
}
Object.keys(attractions).forEach(cat => {
  const b = document.createElement('button');
  b.className = 'tab'; b.textContent = cat;
  b.onclick = () => showCategory(cat);
  $('tabs').appendChild(b);
});
showCategory('Beaches');

/* ---------- 5. DESTINATION DROPDOWNS (planner + contact) ---------- */
destinations.forEach((d, i) => {
  $('pDest').innerHTML += `<option value="${i}">${d.name}</option>`;
  $('cDest').innerHTML += `<option value="${d.name}">${d.name}</option>`;
});

/* ---------- 6. TRIP BUDGET CALCULATOR ---------- */
$('planForm').onsubmit = (e) => {
  e.preventDefault();
  const name = $('pName').value.trim();
  const people = +$('pPeople').value, days = +$('pDays').value;
  if (name.length < 2 || people < 1 || days < 1) {
    $('planErr').textContent = 'Please enter your name, at least 1 traveller and at least 1 day.';
    return;
  }
  $('planErr').textContent = '';
  const d = destinations[$('pDest').value];
  const perDay = +$('pBudget').value * d.cost * +$('pPref').value;   // cost per person per day
  const stay = Math.round(perDay * days * people);                    // stay + food + activities
  const travel = 3000 * people;                                       // approx. transport per person
  const fmt = (n) => '₹' + n.toLocaleString('en-IN');
  $('planResult').innerHTML = `
    <h3>Hello ${name}!</h3>
    <p>${days} days in ${d.name} for ${people} traveller(s)</p>
    <div class="total">${fmt(stay + travel)}</div>
    <ul><li>Stay, food and activities: ${fmt(stay)}</li><li>Transport (approx.): ${fmt(travel)}</li></ul>
    <p><small>This is only an approximate estimate.</small></p>`;
};

/* ---------- 7. GALLERY + LIGHTBOX ---------- */
let current = 0;
destinations.forEach((d, i) => {
  $('galGrid').innerHTML += `<div class="g-item" style="${pic(d.img)}" onclick="openLightbox(${i})" title="${d.name}"></div>`;
});
function openLightbox(i) {
  current = (i + destinations.length) % destinations.length;
  $('lbImg').style.cssText = pic(destinations[current].img);
  $('lbCap').textContent = destinations[current].name;
  $('lightbox').classList.add('open');
}
$('prev').onclick = () => openLightbox(current - 1);
$('next').onclick = () => openLightbox(current + 1);

/* ---------- 8. CLOSE MODAL / LIGHTBOX ---------- */
document.querySelectorAll('[data-close]').forEach(b => b.onclick = closeAll);
document.querySelectorAll('.overlay').forEach(o => o.onclick = (e) => { if (e.target === o) closeAll(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
function closeAll() { document.querySelectorAll('.overlay').forEach(o => o.classList.remove('open')); }

/* ---------- 9. CONTACT FORM VALIDATION ---------- */
$('contactForm').onsubmit = (e) => {
  e.preventDefault();
  const checks = [
    ['cName',  (v) => v.length >= 3,                              'Enter your full name (at least 3 letters).'],
    ['cEmail', (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),        'Enter a valid email, e.g. name@example.com.'],
    ['cPhone', (v) => /^[6-9]\d{9}$/.test(v),                      'Enter a 10-digit Indian mobile number.'],
    ['cDest',  (v) => v !== '',                                    'Please choose a destination.'],
    ['cMsg',   (v) => v.length >= 10,                              'Message should be at least 10 characters.']
  ];
  let ok = true;
  checks.forEach(([id, test, msg]) => {
    const field = $(id), error = field.parentElement.querySelector('.error');
    const valid = test(field.value.trim());
    error.textContent = valid ? '' : msg;
    field.classList.toggle('bad', !valid);
    if (!valid) ok = false;
  });
  const box = $('success');
  if (ok) {
    box.textContent = `Thank you, ${$('cName').value.trim()}! Your enquiry has been received. We will contact you soon.`;
    box.classList.add('show');
    e.target.reset();
  } else {
    box.classList.remove('show'); box.textContent = '';
  }
};

/* ---------- 10. BACK-TO-TOP + ACTIVE LINK ---------- */
const toTop = $('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 400 ? 'block' : 'none';
  document.querySelectorAll('section[id]').forEach(s => {           // highlight current section
    const r = s.getBoundingClientRect();
    if (r.top <= 120 && r.bottom > 120)
      menu.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + s.id));
  });
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

/* ---------- 11. SCROLL REVEAL ANIMATION ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); observer.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
