document.addEventListener('DOMContentLoaded', function() {

    const botoesTimeline = document.querySelectorAll('.timeline__button');
    const panesTimeline = document.querySelectorAll('.timeline__content__pane');
    const botoesCor = document.querySelectorAll('.sabre-spectrum__botao');
    const paineisInfo = document.querySelectorAll('.sabre-spectrum__painel');


    //transforma cada letra num span para dar início à animação de "decodificação"
    function prepareElementForAnimation(element) {
        if (!element || element.dataset.isPrepared) {
            return;
        }
        const originalText = element.textContent;
        element.dataset.originalText = originalText;
        element.innerHTML = '';
        const words = originalText.split(' ');
        let charIndex = 0;
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word';
            const letters = word.split('');
            letters.forEach(letter => {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'letter';
                letterSpan.innerHTML = letter;
                letterSpan.style.setProperty('--delay', `${charIndex * 25}ms`);
                wordSpan.appendChild(letterSpan);
                charIndex++;
            });
            element.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                element.appendChild(document.createTextNode(' '));
            }
        });
        element.dataset.isPrepared = 'true';
    }


    //faz a animação de decodificação em sequência, após o término do primeiro parágrafo, se dá início ao segundo e assim por diante!!
    function animateParagraphsSequentially(paragraphs) {
        let paragraphIndex = 0;

        function animateNextParagraph() {
            if (paragraphIndex >= paragraphs.length) {
                return;
            }

            const currentParagraph = paragraphs[paragraphIndex];
            
            prepareElementForAnimation(currentParagraph);
            
            currentParagraph.classList.remove('decoded');

            const letters = currentParagraph.querySelectorAll('.letter');
            if (letters.length === 0) {
                //se não tiver mais letras, passa para o próximo parágrafo
                paragraphIndex++;
                animateNextParagraph();
                return;
            }
            // calcula o tempo estimado de cada parágrafo através de quantas letras # Não faço ideia de como funciona #
            // isso foi criado apenas para ser compatível com dispositivos mobiles, pois pela economia de energia, esses dispositivos não lidam com funções de promessa e espera!!
            const lastLetter = letters[letters.length - 1];
            const delayString = lastLetter.style.getPropertyValue('--delay');
            const delay = parseInt(delayString, 10) || 0;
            const animationDuration = 200;
            const totalDuration = delay + animationDuration + 50;

            //Dá start na animação
            void currentParagraph.offsetWidth;
            requestAnimationFrame(() => {
                currentParagraph.classList.add('decoded');
            });

            //passa para o próximo parágrafo após o término da animação 
            paragraphIndex++;
            setTimeout(animateNextParagraph, totalDuration);
        }

        animateNextParagraph();
    }

    //reseta a animação após a div ser trocada 
    function handleTimelineClick(event) {
        const botaoClicado = event.currentTarget;
        const targetId = botaoClicado.getAttribute('data-target');
        if (!targetId) return;
        const targetPane = document.getElementById(targetId);

        botoesTimeline.forEach(btn => btn.classList.remove('timeline__button--active'));
        panesTimeline.forEach(pane => pane.classList.remove('timeline__content__pane--active'));

        botaoClicado.classList.add('timeline__button--active');
        
        if (targetPane) {
            targetPane.classList.add('timeline__content__pane--active');
            const textsToAnimate = targetPane.querySelectorAll('.text--big');
            animateParagraphsSequentially(textsToAnimate);
        }
    }

    function initialLoadAnimation() {
        const activePaneOnLoad = document.querySelector('.timeline__content__pane--active');
        if (activePaneOnLoad) {
            const textsToAnimateOnLoad = activePaneOnLoad.querySelectorAll('.text--big');
            animateParagraphsSequentially(textsToAnimateOnLoad);
        }
    }

    // para carregar a fonte antes de começar a animar (evita erros de parar do nada)
    document.fonts.ready.then(function () {
        console.log('Fontes prontas. A preparar e iniciar animações.');
        
        const allTextElements = document.querySelectorAll('.text--big');
        allTextElements.forEach(prepareElementForAnimation);

        botoesTimeline.forEach(botao => {
            botao.addEventListener('click', handleTimelineClick);
        });

        initialLoadAnimation();
    });

    function handleSabreColorClick(event) {
        const botaoClicado = event.currentTarget;
        const targetId = botaoClicado.getAttribute('data-target');
        if (!targetId) return;
        const targetPane = document.getElementById(targetId);

        //Remove os --actives
        botoesCor.forEach(btn => btn.classList.remove('sabre-spectrum__botao--active'));
        paineisInfo.forEach(pane => pane.classList.remove('sabre-spectrum__painel--active'));

        //adiciona o --active
        botaoClicado.classList.add('sabre-spectrum__botao--active');
        if (targetPane) {
            targetPane.classList.add('sabre-spectrum__painel--active');
        }
    }

    botoesCor.forEach(botao => {
        botao.addEventListener('click', handleSabreColorClick);
    });

});
