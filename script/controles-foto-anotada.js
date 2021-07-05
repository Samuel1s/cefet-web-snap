const filtroEl = document.querySelector('#filtro-da-foto');
const fotoEl = document.querySelector('.foto-anotada > img');

/** Mudança definitiva é melhor aqui mas, por ser um select o uso do input não teria problema. */
filtroEl.addEventListener('change', () => {
    fotoEl.style.filter = filtroEl.value
})

/** Desafio */
document.querySelector('#imagem').addEventListener('change', e => {
    const imgEl = document.querySelector('.foto-anotada > img'); 
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => { imgEl.src = fileReader.result; });

    fileReader.readAsDataURL(e.target.files[0]);
});