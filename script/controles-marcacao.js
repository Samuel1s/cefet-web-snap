/** Exercicio 0 */
const visisbilidadeEl = document.querySelector('#visibilidade-das-marcacoes');
let ancestralEl = document.querySelector('.foto-anotada');

visisbilidadeEl.addEventListener('change', () => {
    ancestralEl.classList.toggle(`${visisbilidadeEl.value}`);
});

/** Exercicio 3 */
const marcacaoEl = document.querySelectorAll('.marcacao');

marcacaoEl.forEach(select => {
    select.addEventListener('click', (e) => {   
        /** Jeito me */   
        marcacaoEl[0].classList.toggle('selecionada')
        marcacaoEl[1].classList.toggle('selecionada')
      
        /** Text-Area 1*/
        const iptXEl = document.querySelector('#x-da-marcacao');
        iptXEl.value = parseInt(e.currentTarget.style.left);

        const iptYEl = document.querySelector('#y-da-marcacao');
        iptYEl.value = parseInt(e.currentTarget.style.top);

        const iptWidthEl = document.querySelector('#largura-da-marcacao');
        iptWidthEl.value = parseInt(e.currentTarget.style.width);

        const iptHeightEl = document.querySelector('#altura-da-marcacao');
        iptHeightEl.value = parseInt(e.currentTarget.style.height);

    
        /** Text-Area 2 */
        const iptTituloEl = document.querySelector('#titulo-da-marcacao');
        iptTituloEl.value = e.currentTarget.getAttribute('data-titulo');

        const iptConteudoEl = document.querySelector('#conteudo-da-marcacao');
        iptConteudoEl.value = e.currentTarget.getAttribute('data-conteudo');

        const iptCorEl = document.querySelector('#cor-da-marcacao');
        iptCorEl.value = e.currentTarget.getAttribute('data-cor')

        
        /** Text-Area 3 */
        const formato = 'formato-oval';
        
        if (formato === e.currentTarget.getAttribute('data-formato')) {
            document.querySelector('input[type=radio][value=formato-oval]').checked = true

        } else {
            document.querySelector('input[type=radio][value=formato-retangular]').checked = true
        }
    });
});




