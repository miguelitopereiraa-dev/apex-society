const cars = [
  { id: 1, brand: 'Ferrari', model: 'SF90 Stradale', year: '2024', type: 'V8 híbrido', price: 'R$ 8.500.000', country: 'Itália', transmission: 'Automático 8cv', torque: '800 Nm', fuel: 'Híbrido Gasolina', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=900&q=85', description: 'A síntese da performance Ferrari: potência elétrica instantânea combinada ao icônico V8 biturbo.', specs: ['986 cv', '2.5s 0-100', '340 km/h'] },
  { id: 2, brand: 'Porsche', model: '911 GT3 RS', year: '2024', type: 'Flat-6 aspirado', price: 'R$ 4.200.000', country: 'Alemanha', transmission: 'PDK 8 marchas', torque: '465 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85', description: 'Nasceu para o autódromo, mas carrega a elegância que tornou o 911 uma lenda nas ruas.', specs: ['525 cv', '3.2s 0-100', '296 km/h'] },
  { id: 3, brand: 'Lamborghini', model: 'Revuelto', year: '2025', type: 'V12 híbrido', price: 'R$ 9.800.000', country: 'Itália', transmission: 'Automático 8cv', torque: '720 Nm', fuel: 'Híbrido Gasolina', image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=900&q=85', description: 'O próximo capítulo do V12 italiano, com linhas impossíveis e eletrificação sem perder o drama.', specs: ['1.001 cv', '2.5s 0-100', '350 km/h'] },
  { id: 4, brand: 'Ford', model: 'Mustang Dark Horse', year: '2024', type: 'V8 americano', price: 'R$ 2.100.000', country: 'Estados Unidos', transmission: 'Manual 6 marchas', torque: '610 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=900&q=85', description: 'A atitude bruta do muscle car em sua configuração mais afiada e visceral.', specs: ['500 cv', '4.2s 0-100', '250 km/h'] },
  { id: 5, brand: 'Chevrolet', model: 'Corvette Z06', year: '2024', type: 'V8 flat-plane', price: 'R$ 3.600.000', country: 'Estados Unidos', transmission: 'Automático 8cv', torque: '700 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85', description: 'Motor central, aerodinâmica de pista e o som de um V8 que parece não ter fim.', specs: ['670 cv', '2.6s 0-100', '312 km/h'] },
  { id: 6, brand: 'McLaren', model: '750S', year: '2024', type: 'V8 biturbo', price: 'R$ 5.500.000', country: 'Reino Unido', transmission: 'Automático 7cv', torque: '800 Nm', fuel: 'Gasolina', image: 'https://d31dpzy4bseog7.cloudfront.net/media/2025/12/05145516/Why-the-McLaren-750S-is-the-Ultimate-Purebred-Supercar-The-Local-Project-Image-3-819x1024.png', description: 'Leve, preciso e brutalmente rápido: engenharia britânica no seu estado mais puro.', specs: ['750 cv', '2.8s 0-100', '332 km/h'] },
  { id: 7, brand: 'Bugatti', model: 'Chiron Super Sport', year: '2024', type: 'W16 biturbo', price: 'R$ 22.000.000', country: 'França', transmission: 'Automático 7cv', torque: '1.600 Nm', fuel: 'Gasolina de alta octanagem', image: 'https://www.ilusso.com/wp-content/uploads/Blog-Image-01-3-1024x668.png', description: 'O ápice da engenharia francesa: 1.600 cv de pura brutalidade numa carroceria aerodinâmica que desafia a física.', specs: ['1.600 cv', '2.4s 0-100', '440 km/h'] },
  { id: 8, brand: 'Mercedes-AMG', model: 'GT Black Series', year: '2024', type: 'V8 biturbo', price: 'R$ 4.800.000', country: 'Alemanha', transmission: 'Dual-clutch 9cv', torque: '900 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85', description: 'O GT mais radical já construído: aerodinâmica ativa, suspensão derivada da Fórmula 1 e obsessão por cada grama.', specs: ['730 cv', '3.2s 0-100', '329 km/h'] },
  { id: 9, brand: 'Audi', model: 'R8 V10 Performance', year: '2024', type: 'V10 aspirado', price: 'R$ 3.200.000', country: 'Alemanha', transmission: 'Dual-clutch 7cv', torque: '580 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=900&q=85', description: 'Um dos últimos V10 naturais aspirados do mercado, com tração integral Quattro e precisão alemã.', specs: ['610 cv', '3.1s 0-100', '330 km/h'] },
  { id: 10, brand: 'BMW', model: 'M4 CSL', year: '2024', type: '6 cilindros inline', price: 'R$ 2.800.000', country: 'Alemanha', transmission: 'Automatico 8cv', torque: '550 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85', description: 'A reinterpretação mais pura do M4: lighter, mais rígida e feita para quem sente cada curva na espinha.', specs: ['510 cv', '3.6s 0-100', '305 km/h'] },
  { id: 11, brand: 'Toyota', model: 'GR Supra RZ', year: '2024', type: '6 cilindros inline', price: 'R$ 1.600.000', country: 'Japão', transmission: 'Automático 8cv', torque: '500 Nm', fuel: 'Gasolina', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=85', description: 'O retorno do lendário Supra com a parceria da BMW: um cupê esguio, ágil e feito para drifts controlados.', specs: ['382 cv', '4.3s 0-100', '250 km/h'] },
  { id: 12, brand: 'Koenigsegg', model: 'Jesko Absolut', year: '2025', type: 'V8 twin-fire', price: 'R$ 30.000.000', country: 'Suécia', transmission: 'Multi-clutch', torque: '1.385 Nm', fuel: 'Gasolina de alta octanagem', image: 'https://thetrillionairelife.com/wp-content/uploads/2026/05/Koenigsegg-Jesko-Absolut-top-speed.png', description: 'Superesportivo sueco construído artesanalmente, com transmissão de múltiplas embreagens e velocista projetado para bater recordes.', specs: ['1.630 cv', '2.8s 0-100', '483 km/h'] }
];

const grid = document.querySelector('#carGrid');
const emptyState = document.querySelector('#emptyState');
const searchInput = document.querySelector('#searchInput');
const favoriteCount = document.querySelector('#favoriteCount');
const modal = document.querySelector('#carModal');
let activeBrand = 'Todos';
let favorites = JSON.parse(localStorage.getItem('apex-favorites') || '[]');

function renderCars() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = cars.filter(car => (activeBrand === 'Todos' || car.brand === activeBrand) && `${car.brand} ${car.model}`.toLowerCase().includes(query));
  grid.innerHTML = filtered.map(car => `
    <article class="car-card" data-id="${car.id}">
      <div class="car-card-image" style="background-image:url('${car.image}')"></div>
      <button class="favorite-card ${favorites.includes(car.id) ? 'saved' : ''}" data-favorite="${car.id}" aria-label="${favorites.includes(car.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">${favorites.includes(car.id) ? '★' : '☆'}</button>
      <div class="card-body"><p class="card-meta">${car.brand} / ${car.type}</p><h3>${car.model}</h3><p class="card-details"><span>${car.country}</span><span class="card-price">${car.price}</span></p><div class="card-footer"><span>${car.year}</span><span>Ver detalhes ↗</span></div></div>
    </article>`).join('');
  emptyState.hidden = filtered.length > 0;
  favoriteCount.textContent = favorites.length;
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  localStorage.setItem('apex-favorites', JSON.stringify(favorites));
  renderCars();
}

function openModal(car) {
  document.querySelector('#modalImage').style.backgroundImage = `url('${car.image}')`;
  document.querySelector('#modalBrand').textContent = `${car.brand} / ${car.type}`;
  document.querySelector('#modalTitle').textContent = car.model;
  document.querySelector('#modalDescription').textContent = car.description;
  document.querySelector('#modalSpecs').innerHTML = car.specs.map((spec, index) => `<div class="spec"><strong>${spec}</strong><small>${['POTÊNCIA', '0-100 KM/H', 'MÁXIMA'][index]}</small></div>`).join('');
  document.querySelector('#modalExtra').innerHTML = `<div class="modal-extra-grid"><div class="modal-extra-item"><strong>${car.price}</strong><small>PREÇO ESTIMADO</small></div><div class="modal-extra-item"><strong>${car.country}</strong><small>PAÍS DE ORIGEM</small></div><div class="modal-extra-item"><strong>${car.transmission}</strong><small>TRANSMISSÃO</small></div><div class="modal-extra-item"><strong>${car.torque}</strong><small>TORQUE</small></div><div class="modal-extra-item"><strong>${car.fuel}</strong><small>COMBUSTÍVEL</small></div><div class="modal-extra-item"><strong>${car.year}</strong><small>ANO</small></div></div>`;
  document.querySelector('#modalFavorite').dataset.id = car.id;
  document.querySelector('#modalFavorite').innerHTML = favorites.includes(car.id) ? '★ Na sua garagem' : '☆ Adicionar à garagem';
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}
function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

document.querySelector('#brandFilters').addEventListener('click', event => { if (!event.target.matches('.filter')) return; activeBrand = event.target.dataset.brand; document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button === event.target)); renderCars(); });
searchInput.addEventListener('input', renderCars);
grid.addEventListener('click', event => { const favorite = event.target.closest('[data-favorite]'); if (favorite) { event.stopPropagation(); toggleFavorite(Number(favorite.dataset.favorite)); return; } const card = event.target.closest('.car-card'); if (card) openModal(cars.find(car => car.id === Number(card.dataset.id))); });
document.querySelector('#closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target.dataset.close) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
document.querySelector('#modalFavorite').addEventListener('click', event => { toggleFavorite(Number(event.currentTarget.dataset.id)); const car = cars.find(item => item.id === Number(event.currentTarget.dataset.id)); event.currentTarget.innerHTML = favorites.includes(car.id) ? '★ Na sua garagem' : '☆ Adicionar à garagem'; });
document.querySelector('#favoritesToggle').addEventListener('click', () => { activeBrand = 'Todos'; searchInput.value = ''; document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.brand === 'Todos')); renderCars(); document.querySelector('#colecao').scrollIntoView({ behavior: 'smooth' }); });
renderCars();
