const filtroEl = document.querySelector('#filtro-da-foto');
const fotoEl = document.querySelector('.foto-anotada > img');

/** Mudança definitiva é melhor aqui mas, por ser um select o uso do input não teria problema. */
filtroEl.addEventListener('change', () => {
    fotoEl.style.filter = filtroEl.value
})