const filtroEl = document.querySelector('#filtro-da-foto');
const fotoEl = document.querySelector('.foto-anotada > img');

/** Mudança definitiva é melhor aqui mas por ser select input não tem problema. */
filtroEl.addEventListener('change', () => {
    fotoEl.style.filter = filtroEl.value
})