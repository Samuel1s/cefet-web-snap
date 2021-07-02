/** Exercicio 0 */
const visisbilidadeEl = document.querySelector('#visibilidade-das-marcacoes');
let ancestralEl = document.querySelector('.foto-anotada');

/** Nesse caso tanto input quanto change */
visisbilidadeEl.addEventListener('change', () => {
    ancestralEl.classList.toggle(`${visisbilidadeEl.value}`);
});

/** Exercicio 2 */
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
        /** Formas de Get: const valor = el.dataset.nomeAtributo OU el.getAttribute('data-att') */    
        const iptTituloEl = document.querySelector('#titulo-da-marcacao');
        iptTituloEl.value = e.currentTarget.dataset.titulo;

        const iptConteudoEl = document.querySelector('#conteudo-da-marcacao');
        iptConteudoEl.value = e.currentTarget.dataset.conteudo;

        const iptCorEl = document.querySelector('#cor-da-marcacao');
        iptCorEl.value = e.currentTarget.dataset.cor;

        /** Text-Area 3 */
        const formato = 'formato-oval';
        
        if (formato === e.currentTarget.getAttribute('data-formato')) {
            document.querySelector('input[type=radio][value=formato-oval]').checked = true

        } else {
            document.querySelector('input[type=radio][value=formato-retangular]').checked = true
        }
    });
});

/** Exercicio 3 */
const allIpts = document.querySelectorAll('input[type="number"], input[type="text"], textarea, input[type="color"],input[type="radio"]');

allIpts.forEach(input => {
    /** Nesse caso input é melhor para atualizar instantaneamente. */
    input.addEventListener('input', (e) => {
        let marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');

        switch(e.currentTarget.id) {
            /** Text-Area 1*/
            case 'x-da-marcacao':
                marcacaoSelecionadaEl.style.left = `${e.currentTarget.value}px`;
                break
            case 'y-da-marcacao':
                marcacaoSelecionadaEl.style.top = `${e.currentTarget.value}px`;
                break
            case 'largura-da-marcacao':
                marcacaoSelecionadaEl.style.width = `${e.currentTarget.value}px`;
                break
            case 'altura-da-marcacao':
                marcacaoSelecionadaEl.style.height = `${e.currentTarget.value}px`;
                break
            
            /** Text-Area 2 */
            /** Formas de Set: el.dataset.nomeAtributo = valor OU el.setAttribute('data-att', valor) */    
            case 'titulo-da-marcacao':  
                marcacaoSelecionadaEl.dataset.titulo = e.currentTarget.value
                break
            case 'conteudo-da-marcacao':
                marcacaoSelecionadaEl.dataset.conteudo = e.currentTarget.value
                break 
            case 'cor-da-marcacao':
                marcacaoSelecionadaEl.dataset.cor = e.currentTarget.value
                break

            /** Text-Area 3 */
            default:  /** Os type radio não possuem Id. */
                marcacaoSelecionadaEl.dataset.formato = e.currentTarget.value
                
                /** Maneira mais adequada, com toggle tem chances de adicionar as duas classes. */
                if (e.currentTarget.value === 'formato-oval') {
                    marcacaoSelecionadaEl.classList.add('formato-oval')
                    marcacaoSelecionadaEl.classList.remove('formato-retangular')
                } else {
                    marcacaoSelecionadaEl.classList.add('formato-retangular')
                    marcacaoSelecionadaEl.classList.remove('formato-oval')
                }
                break
        }
    })
})




