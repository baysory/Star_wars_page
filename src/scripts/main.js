document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.timeline__button');
    const panes = document.querySelectorAll('.timeline__content__pane');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);

            // Remove a classe ativa de todos os botões e painéis
            botoes.forEach(btn => btn.classList.remove('timeline__button--active'));
            panes.forEach(pane => pane.classList.remove('timeline__content__pane--active'));

            // Adiciona a classe ativa ao botão clicado e ao painel alvo
            this.classList.add('timeline__button--active');
            targetPane.classList.add('timeline__content__pane--active');
        });
    });
});