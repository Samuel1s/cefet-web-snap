/** Exercicio 1 */
const balaozinhoEl = document.querySelector('#balaozinho');
let marcacoesEl = document.querySelectorAll('.marcacao');

/* Não sei se é a maneira mais correta. */
marcacoesEl.forEach(item => {

    /* Criação das tags para o balanzinho. Aproveita o :empty */
    const create_h2 = document.createElement('h2');
    const create_p = document.createElement('p');

    item.addEventListener('mouseover', (e) => {
        create_h2.innerHTML = e.currentTarget.getAttribute('data-titulo');
        create_p.innerHTML = e.currentTarget.getAttribute('data-conteudo');
        balaozinhoEl.appendChild(create_h2).appendChild(create_p);

        balaozinhoEl.style.color = e.currentTarget.getAttribute('data-cor');
    });

    item.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.left = `${e.pageX}px`
        balaozinhoEl.style.top = `${e.pageY}px`
    });

    item.addEventListener('mouseout', () => {
        /** Remove os elementos criados. */
        create_h2.remove();
        create_p.remove();
    });
});