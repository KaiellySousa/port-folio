const cards = document.querySelectorAll('.card-projeto');

// Função de clique nos cards
cards.forEach(card => {
    const conteudoExtra = card.querySelector('.conteudo-extra');

    card.addEventListener('click', () => {
        const isOpen = card.classList.contains('ativo');

        cards.forEach(c => {
            c.classList.remove('ativo');
            c.querySelector('.conteudo-extra').style.maxHeight = null;
        });

        if (!isOpen) {
            card.classList.add('ativo');
            conteudoExtra.style.maxHeight = conteudoExtra.scrollHeight + 'px';
        }
    });
});

// Faz os cards abrirem 
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash; // Ex: #projeto-simulador
    if (hash) {
        const card = document.querySelector(hash);
        if (card) {
            const conteudoExtra = card.querySelector('.conteudo-extra');

            // Fecha todos antes
            cards.forEach(c => {
                c.classList.remove('ativo');
                c.querySelector('.conteudo-extra').style.maxHeight = null;
            });

            // Abre o card do hash
            card.classList.add('ativo');
            conteudoExtra.style.maxHeight = conteudoExtra.scrollHeight + 'px';

            // Scroll até ele (opcional)
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});
