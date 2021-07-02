/** Exercicio 1 */
const balaozinhoEl = document.querySelector('#balaozinho');
let marcacoesEl = document.querySelectorAll('.marcacao');

/* Criação das tags para o balanzinho. */
const balao_h2 = document.createElement('h2');
const balao_p = document.createElement('p');

/* Não sei se é a maneira mais correta. */
marcacoesEl.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        balao_h2.innerHTML = e.currentTarget.getAttribute('data-titulo');
        balao_p.innerHTML = e.currentTarget.getAttribute('data-conteudo');
        balaozinhoEl.appendChild(balao_h2).appendChild(balao_p);
        balaozinhoEl.style.color = e.currentTarget.getAttribute('data-cor');
    });

    item.addEventListener('mousemove', (e) => {
        balaozinhoEl.style.left = `${e.pageX}px`
        balaozinhoEl.style.top = `${e.pageY}px`
    });

    item.addEventListener('mouseout', () => {
        balao_h2.remove();
        balao_p.remove();
    });
});