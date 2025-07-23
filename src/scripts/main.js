document.addEventListener('DOMContentLoaded', function() {

    const botoesTimeline = document.querySelectorAll('.timeline__button');
    const panesTimeline = document.querySelectorAll('.timeline__content__pane');
    const botoesCor = document.querySelectorAll('.sabre-spectrum__botao');
    const paineisInfo = document.querySelectorAll('.sabre-spectrum__painel');
    const pedestals = document.querySelectorAll('.holocron-pedestal');
    const archiveModal = document.querySelector('.holocron-archive');
    const archiveContent = document.querySelector('.holocron-archive__content');
    const archiveNav = document.querySelector('.holocron-archive__nav');
    const archiveDisplayTitle = document.querySelector('.archive-display__title');
    const archiveDisplayText = document.querySelector('.archive-display__text');
    const closeBtn = document.querySelector('.holocron-archive__close-btn');

    const teachings = {
                jedi: [
                    { title: 'O Código Jedi', text: `Não há emoção, há paz.\nNão há ignorância, há conhecimento.\nNão há paixão, há serenidade.\nNão há caos, há harmonia.\nNão há morte, há a Força.` },
                    { title: 'Os Três Pilares', text: `A Ordem Jedi é construída sobre três pilares: a Força, o Conhecimento e a Autodisciplina. A Força é a energia que nos conecta. O Conhecimento guia as nossas ações. A Autodisciplina garante que usamos ambos com sabedoria.` },
                    { title: 'As Provas Jedi', text: `Para se tornar um Cavaleiro, um Padawan deve passar por cinco provas: a Prova de Habilidade, a Prova de Coragem, a Prova da Carne, a Prova do Espírito e a Prova de Discernimento. Cada uma testa um aspeto fundamental do ser de um Jedi.` },
                    { title: 'Meditação de Batalha', text: `Uma técnica avançada da Força usada por alguns Mestres Jedi para aumentar o moral e a coordenação das tropas aliadas, enquanto semeia o medo e a confusão nas fileiras inimigas. É uma demonstração do poder da Força como uma ferramenta de união.` },
                    { title: 'Forma I: Shii-Cho', text: `A Forma da Determinação. É a mais antiga e fundamental forma de combate com sabre de luz, ensinada a todos os Younglings. Foca-se em movimentos amplos e ataques básicos, sendo eficaz contra múltiplos oponentes.` },
                    { title: 'Forma II: Makashi', text: `A Forma da Contenção. Elegante e precisa, Makashi foi desenvolvida para duelos de sabre contra sabre. Foca-se em paradas, estocadas e movimentos económicos, como demonstrado pelo Conde Dookan.` },
                    { title: 'Forma III: Soresu', text: `A Forma da Resiliência. Soresu é uma forma de combate puramente defensiva, projetada para desviar disparos de blaster e ataques de sabre de luz com o mínimo de esforço. É a expressão máxima da filosofia Jedi de ser um guardião, não um agressor.` },
                    { title: 'Forma IV: Ataru', text: `A Forma da Agressão. Uma forma acrobática e ofensiva, que utiliza a Força para saltos, piruetas e ataques rápidos de todos os ângulos. É a forma preferida de mestres ágeis como Yoda e Qui-Gon Jinn.` },
                    { title: 'O Conselho Jedi', text: `O corpo governante da Ordem Jedi, composto por 12 dos mais sábios e poderosos Mestres Jedi. As suas decisões guiavam a Ordem e influenciavam a política da República Galáctica.` },
                    { title: 'Cristais Kyber', text: `Cristais vivos que estão em sintonia com a Força e que formam o coração de um sabre de luz. O cristal escolhe o Jedi, e a sua cor reflete a conexão do utilizador com a Força.` }
                ],
                sith: [
                    { title: 'O Código Sith', text: `A paz é uma mentira, só existe paixão.\nAtravés da paixão, ganho força.\nAtravés da força, ganho poder.\nAtravés do poder, ganho a vitória.\nAtravés da vitória, minhas correntes se quebram.\nA Força me libertará.` },
                    { title: 'A Regra de Dois', text: `Estabelecida por Darth Bane, a Regra de Dois decreta que só podem existir dois Lordes Sith de cada vez: um Mestre para incorporar o poder, e um Aprendiz para o cobiçar. Isto concentra o poder do lado sombrio e previne as lutas internas que destruíram o antigo Império Sith.` },
                    { title: 'A Profecia do Sith\'ari', text: `Uma antiga profecia Sith que fala de um ser perfeito, livre de todas as restrições, que levaria os Sith à glória e os destruiria. A arrogância de muitos Lordes Sith levou-os a acreditar que eles próprios eram o Sith'ari.` },
                    { title: 'Transferência de Essência', text: `Uma arte sombria e perigosa que permite a um Lorde Sith transferir a sua consciência para outro corpo ou objeto, enganando a morte. Apenas os mais poderosos, como o Imperador Palpatine, dominaram esta técnica proibida.` },
                    { title: 'Alquimia Sith', text: `Uma prática sombria que usa a Força para manipular a matéria e a própria vida. Através de rituais arcanos, os Alquimistas Sith podem criar armas aprimoradas pela Força, bestas aterrorizantes e até mesmo prolongar a sua existência para além dos limites naturais.` },
                    { title: 'Raios da Força', text: `Uma manifestação pura do lado sombrio, onde o utilizador canaliza a sua raiva e ódio em arcos de energia elétrica. É uma técnica usada para torturar e incapacitar os seus inimigos.` },
                    { title: 'Sangramento de Cristais', text: `Um Lorde Sith não encontra um cristal kyber; ele domina-o. O processo de "sangramento" envolve derramar toda a sua dor, raiva e medo no cristal, corrompendo-o e forçando-o a produzir uma lâmina vermelha.` },
                    { title: 'Forma VII: Juyo / Vaapad', text: `A Forma da Ferocidade. Juyo é uma forma de combate imprevisível e caótica que se alimenta das emoções do lutador. A sua variante, Vaapad, criada por Mace Windu, flerta perigosamente com o lado sombrio, canalizando a escuridão do oponente de volta contra ele.` },
                    { title: 'Holocrons Sith', text: `Dispositivos em forma de pirâmide que contêm os ensinamentos e segredos dos antigos Lordes Sith. Apenas um utilizador poderoso do lado sombrio pode abri-los e aceder ao conhecimento proibido que guardam.` },
                    { title: 'O Grande Plano', text: `Um plano de mil anos orquestrado por Darth Bane e continuado pelos seus sucessores. O objetivo era minar a República e os Jedi a partir de dentro, culminando na ascensão de Darth Sidious e na criação do Império Galáctico.` }
                ],
                jedi_heroes: [
                    { title: 'Luke Skywalker', text: `De um simples rapaz de quinta em Tatooine a um dos mais lendários Mestres Jedi, a sua jornada para derrubar o Império e redimir o seu pai inspirou uma galáxia inteira.` },
                    { title: 'Obi-Wan Kenobi', text: `Um mestre do combate defensivo Soresu e um dos membros mais sábios do Conselho Jedi. Ele treinou Anakin Skywalker e, mais tarde, o seu filho Luke, desempenhando um papel crucial na saga.` },
                    { title: 'Mestre Yoda', text: `Com quase 900 anos de idade, o Grande Mestre Yoda liderou a Ordem Jedi durante os seus dias de glória. A sua sabedoria e o seu domínio da Força eram inigualáveis.` },
                    { title: 'Ahsoka Tano', text: `A antiga Padawan de Anakin Skywalker que abandonou a Ordem Jedi. Forjou o seu próprio caminho, tornando-se uma guerreira formidável e uma figura chave na Rebelião, provando que se pode servir à luz sem ser um Jedi.` },
                    { title: 'Qui-Gon Jinn', text: `Um Mestre Jedi que seguia a Força Viva, muitas vezes desafiando o Conselho. Foi ele quem descobriu Anakin Skywalker e o primeiro Jedi moderno a redescobrir o caminho para a imortalidade através da Força.` },
                    { title: 'Mace Windu', text: `Um dos duelistas mais formidáveis da Ordem, criador da perigosa forma de combate Vaapad. O seu sabre de luz roxo era tão único quanto a sua filosofia, que beirava a linha entre a luz e a escuridão.` },
                    { title: 'Rey Skywalker', text: `Uma sucateira de Jakku que descobriu a sua poderosa conexão com a Força. Treinada por Luke Skywalker e Leia Organa, ela enfrentou a sua linhagem sombria para se tornar a última esperança dos Jedi.` },
                    { title: 'Kanan Jarrus', text: `Um sobrevivente da Ordem 66 que viveu escondido por anos. Ele redescobriu o seu caminho como Jedi ao liderar a tripulação da Ghost e ao treinar o seu próprio Padawan, Ezra Bridger, durante a era da Rebelião.` },
                    { title: 'Plo Koon', text: `Um Mestre Kel Dor conhecido pela sua calma e pela sua perícia como piloto. Foi ele quem descobriu Ahsoka Tano e a trouxe para a Ordem Jedi. Era um general respeitado durante as Guerras Clónicas.` },
                    { title: 'Kit Fisto', text: `Um Mestre Nautolano com um sorriso contagiante e um estilo de combate Shii-Cho pouco ortodoxo. Era um dos melhores espadachins da Ordem e um membro do Conselho Jedi durante as Guerras Clónicas.` }
                ],
                sith_legends: [
                    { title: 'Darth Vader', text: `Outrora o herói Jedi Anakin Skywalker, a sua queda para o lado sombrio transformou-o no executor do Imperador e num símbolo de medo e poder em toda a galáxia.` },
                    { title: 'Darth Sidious', text: `Conhecido publicamente como Sheev Palpatine, este mestre da manipulação orquestrou as Guerras Clónicas, destruiu os Jedi e transformou a República no seu Império Galáctico.` },
                    { title: 'Darth Maul', text: `Um Zabrak de Dathomir treinado por Sidious. A sua ferocidade em combate e o seu icónico sabre de luz de lâmina dupla tornaram-no um adversário temível, movido por um desejo de vingança.` },
                    { title: 'Darth Revan', text: `Um Jedi que caiu para o lado sombrio para derrotar os Mandalorianos, tornando-se um poderoso Lorde Sith antes de ser redimido. A sua história complexa explora a dualidade entre a luz e a escuridão como poucos.` },
                    { title: 'Conde Dookan (Darth Tyranus)', text: `Um antigo Mestre Jedi que abandonou a Ordem, desiludido com a corrupção da República. Como aprendiz de Sidious, ele liderou o movimento Separatista durante as Guerras Clónicas.` },
                    { title: 'Darth Bane', text: `O Lorde Sith que reformou a Ordem Sith após a sua quase destruição. Ele instituiu a "Regra de Dois", garantindo que o poder do lado sombrio se concentrasse e crescesse em segredo por mil anos.` },
                    { title: 'Darth Plagueis', text: `O mestre de Darth Sidious. Um Muun obcecado em manipular os midi-chlorians para criar vida e alcançar a imortalidade. Ironicamente, foi assassinado durante o sono pelo seu próprio aprendiz.` },
                    { title: 'Asajj Ventress', text: `Uma acólita do lado sombrio e assassina pessoal do Conde Dookan durante as Guerras Clónicas. Embora nunca tenha sido formalmente uma Sith, a sua habilidade com dois sabres de luz e a sua crueldade tornaram-na uma ameaça constante para os Jedi.` },
                    { title: 'Kylo Ren (Ben Solo)', text: `Neto de Darth Vader, Ben Solo foi seduzido para o lado sombrio por Snoke. Como Kylo Ren, ele liderou os Cavaleiros de Ren e procurou terminar o que o seu avô começou, lutando constantemente contra o chamado da luz.` },
                    { title: 'Exar Kun', text: `Um antigo e poderoso Lorde Sombrio da Velha República. A sua sede de poder e conhecimento proibido levou-o a travar uma guerra devastadora contra a República e a Ordem Jedi. O seu espírito permaneceu preso em Yavin 4 por milénios.` }
                ],
                rebelde: [
                    { title: 'A Declaração da Rebelião', text: `Um manifesto formal que declarou a formação da Aliança para Restaurar a República. Nele, líderes como Mon Mothma listaram as tiranias do Império e proclamaram a sua intenção de restaurar a liberdade na galáxia.` },
                    { title: 'O Símbolo da Fênix', text: `Também conhecido como Starbird, o símbolo da Aliança Rebelde representa a Fênix, uma criatura que renasce das cinzas. Simboliza a esperança de que a República irá renascer das cinzas do Império.` },
                    { title: 'Táticas de Guerrilha', text: `Com recursos limitados, a Rebelião dependia de táticas de "bater e correr". Usando caças ágeis como o X-Wing e o A-Wing, eles realizavam ataques rápidos e precisos contra alvos imperiais estratégicos, desaparecendo antes que a esmagadora Frota Imperial pudesse retaliar.` },
                    { title: 'Mon Mothma', text: `Uma das fundadoras e a principal líder da Aliança Rebelde. A sua coragem em denunciar publicamente o Imperador e a sua habilidade em unir as diversas células rebeldes foram cruciais para o sucesso da Rebelião.` },
                    { title: 'General Dodonna', text: `Um brilhante estratega que planeou o ataque à primeira Estrela da Morte. A sua análise dos planos roubados permitiu-lhe encontrar a falha fatal que levou à vitória na Batalha de Yavin.` },
                    { title: 'Bases Secretas', text: `Para sobreviver, a Rebelião dependia de bases escondidas em planetas remotos como Dantooine, Yavin 4 e Hoth. Estas bases eram constantemente movidas para evitar a deteção pela vasta rede de espionagem do Império.` },
                    { title: 'Caça Estelar X-Wing', text: `O caça mais icónico da Aliança. A sua combinação de poder de fogo, escudos e um hipermotor tornaram-no superior ao TIE Fighter imperial e um símbolo da própria Rebelião.` },
                    { title: 'Almirante Ackbar', text: `Um Mon Calamari e um dos maiores comandantes da Frota Rebelde. A sua liderança foi fundamental na Batalha de Endor, onde a sua famosa frase "É uma armadilha!" salvou a frota da aniquilação.` },
                    { title: 'Bothans', text: `Uma espécie conhecida pela sua rede de espionagem. "Muitos Bothans morreram para nos trazer esta informação" é uma frase que imortaliza o seu sacrifício para obter os planos da segunda Estrela da Morte.` },
                    { title: 'A Doutrina da Esperança', text: `Mais do que uma força militar, a Rebelião era um movimento alimentado pela esperança. A sua doutrina era inspirar a galáxia a levantar-se contra a tirania, provando que mesmo uma pequena faísca de coragem pode incendiar uma revolução.` }
                ],
                imperio: [
                    { title: 'A Doutrina Tarkin', text: `Criada pelo Grande Moff Tarkin, esta doutrina afirmava que o medo de uma superarma, como a Estrela da Morte, era a forma mais eficaz de manter a ordem e o controlo sobre a galáxia, em vez de manter uma presença militar em todos os sistemas.` },
                    { title: 'Ordem 66', text: `Um protocolo secreto implantado nos soldados clones, que os forçava a ver os Jedi como traidores e a executá-los imediatamente. Foi a arma que permitiu a Palpatine aniquilar a Ordem Jedi e transformar a República no Império.` },
                    { title: 'O Inquisitorius', text: `Um programa de caçadores de Jedi liderado pelo Grande Inquisidor. Os Inquisidores eram, em sua maioria, ex-Jedi que caíram para o lado sombrio, torturados e corrompidos para caçar os seus antigos companheiros.` },
                    { title: 'Projeto Stardust', text: `O nome de código secreto para o projeto de construção da primeira Estrela da Morte. A sua existência foi mantida em segredo absoluto, e a sua conclusão marcou o auge do poder tecnológico e militar do Império.` },
                    { title: 'Grande Almirante Thrawn', text: `Um Chiss e um dos estrategas mais brilhantes da história do Império. A sua genialidade tática baseava-se no estudo da arte e da filosofia dos seus inimigos para prever os seus movimentos.` },
                    { title: 'Stormtroopers', text: `O rosto do poder imperial. Diferente dos clones, os stormtroopers eram recrutas humanos doutrinados para serem absolutamente leais ao Imperador, sacrificando a individualidade pela ordem.` },
                    { title: 'O Compnor', text: `A "Comissão para a Preservação da Nova Ordem". Era a vasta máquina de propaganda do Império, responsável por reescrever a história, censurar a HoloNet e garantir o apoio popular ao regime.` },
                    { title: 'O Bureau de Segurança Imperial (BSI)', text: `A polícia secreta e a agência de inteligência do Império. O BSI era responsável por espionagem, contra-insurgência e pela eliminação de qualquer ameaça interna ao poder do Imperador.` },
                    { title: 'A Mão do Imperador', text: `Agentes secretos que respondiam apenas ao próprio Palpatine. Operando fora da hierarquia imperial, eles realizavam as missões mais secretas e cruéis. Mara Jade era uma das mais famosas.` },
                    { title: 'A Contingência', text: `Um plano secreto criado por Palpatine para garantir que, se ele morresse, o Império não sobreviveria a ele. A sua filosofia era que um Império que não conseguiu proteger o seu Imperador não merecia existir. Este plano levou à formação da Primeira Ordem.` }
                ],
                resistencia: [
                    { title: 'Poe Dameron', text: `O melhor piloto da Resistência. A sua coragem e liderança inspiram todos os que lutam contra a Primeira Ordem. Comandante do Esquadrão Negro, a sua lealdade à General Organa é inabalável.` },
                    { title: 'Finn (FN-2187)', text: `Um stormtrooper que desertou da Primeira Ordem após testemunhar a sua brutalidade. A sua jornada de um soldado sem nome a um herói da Resistência prova que qualquer um pode escolher o seu próprio destino.` },
                    { title: 'Rey Skywalker', text: `Uma sucateira de Jakku que descobriu a sua poderosa conexão com a Força. Treinada por Luke Skywalker e Leia Organa, ela enfrentou a sua linhagem sombria para se tornar a última esperança dos Jedi.` },
                    { title: 'General Leia Organa', text: `A "faísca" da Resistência. Após ser marginalizada na política da Nova República, Leia fundou a Resistência como uma força militar privada para combater a ameaça crescente da Primeira Ordem.` },
                    { title: 'Bombardeiros MG-100 StarFortress', text: `Lentos e vulneráveis, estes bombardeiros eram a principal arma da Resistência para destruir naves capitais da Primeira Ordem. A sua operação exigia coragem e sacrifício, como visto na Batalha de D'Qar.` },
                    { title: 'A Manobra Holdo', text: `Uma tática desesperada e de último recurso, onde uma nave salta para o hiperespaço através de um objeto massivo. A Vice-Almirante Holdo usou esta manobra para destruir a nave de Snoke, o Supremacy, num ato de sacrifício heroico.` },
                    { title: 'Canto Bight', text: `Uma cidade-casino no planeta Cantonica. A missão de Finn e Rose a este local mostrou a corrupção da galáxia, onde os ricos lucravam com a guerra, vendendo armas tanto para a Primeira Ordem quanto para a Resistência.` },
                    { title: 'O Chamado de Exegol', text: `A transmissão do Imperador Palpatine ressuscitado, revelando a sua frota da Ordem Final. Este evento forçou a Resistência a uma corrida contra o tempo para encontrar o planeta Sith escondido e impedir a sua ascensão.` },
                    { title: 'A Frota Cidadã', text: `Na Batalha de Exegol, quando toda a esperança parecia perdida, Lando Calrissian chegou com uma frota de milhares de naves civis de toda a galáxia, respondendo ao chamado da Resistência. Este ato simbolizou a união da galáxia contra a tirania.` },
                    { title: 'O Legado', text: `A Resistência provou que, mesmo após a queda da República, uma pequena faísca de esperança, mantida por um grupo de bravos guerreiros, é suficiente para inspirar a galáxia a lutar pela sua liberdade.` }
                ],
                primeira_ordem: [
                    { title: 'Líder Supremo Snoke', text: `Uma figura misteriosa e poderosa no lado sombrio que liderou a Primeira Ordem. Secretamente uma criação de Palpatine, Snoke foi usado para seduzir Ben Solo e preparar o retorno dos Sith.` },
                    { title: 'General Hux', text: `Um oficial implacável e fanático da Primeira Ordem, que acredita na tecnologia e na disciplina rígida para impor a ordem na galáxia. A sua rivalidade com Kylo Ren define a dinâmica de poder interna.` },
                    { title: 'Stormtroopers de Elite', text: `Diferente dos clones da República ou dos recrutas do Império, os stormtroopers da Primeira Ordem são raptados em criança e submetidos a uma vida inteira de doutrinação e treino rigoroso, transformando-os em soldados leais e eficientes.` },
                    { title: 'Base Starkiller', text: `Uma superarma construída num planeta gelado, capaz de absorver a energia de uma estrela inteira para disparar um raio que pode destruir múltiplos planetas num sistema de uma só vez. A sua destruição foi a primeira grande vitória da Resistência.` },
                    { title: 'Capitã Phasma', text: `A comandante dos stormtroopers da Primeira Ordem. A sua armadura cromada, feita a partir de uma nave de Naboo, era um símbolo do seu status. A sua lealdade, no entanto, provou ser menos resistente que a sua armadura.` },
                    { title: 'O Dreadnought "Fulminatrix"', text: `Uma nave de cerco massiva, equipada com canhões de auto-carregamento capazes de realizar bombardeamentos orbitais devastadores. A sua destruição no início de "Os Últimos Jedi" foi uma vitória custosa para a Resistência.` },
                    { title: 'Rastreador Hiperespacial', text: `Uma tecnologia revolucionária que permitiu à Primeira Ordem rastrear naves através do hiperespaço, algo que se pensava ser impossível. Esta inovação quase levou à aniquilação total da frota da Resistência.` },
                    { title: 'Os Cavaleiros de Ren', text: `Um grupo enigmático de guerreiros do lado sombrio liderados por Kylo Ren. Eram antigos estudantes de Luke Skywalker que caíram para o lado sombrio com Ben Solo. As suas armas e estilos de luta eram únicos e brutais.` },
                    { title: 'O Projeto Ressurreição', text: `Um plano secreto dos cultistas Sith em Exegol para garantir o retorno do Imperador Palpatine. Eles usaram uma combinação de clonagem e tecnologia sombria para criar um novo corpo para o espírito do Imperador.` },
                    { title: 'A Ordem Final', text: `A frota massiva de Star Destroyers da classe Xyston, cada um equipado com um superlaser axial capaz de destruir um planeta. Esta frota, construída em segredo em Exegol, era a arma definitiva de Palpatine para reconquistar a galáxia.` }
                ],
                mandaloriano: [
                    { title: 'O Credo', text: `O "Caminho do Mandalore" é um conjunto de crenças seguido por clãs mais ortodoxos. A regra mais conhecida é nunca remover o capacete na presença de outros. "This is the Way" ("Este é o Caminho") é o seu lema.` },
                    { title: 'O Darksaber', text: `Uma arma ancestral única, criada pelo primeiro Mandaloriano a se tornar Jedi. É um símbolo de liderança. Aquele que o empunha em combate pode reivindicar o direito de governar todo o povo de Mandalore.` },
                    { title: 'A Grande Purga', text: `Um evento cataclísmico onde o Império Galáctico atacou Mandalore, roubando o seu Beskar e devastando o planeta. Este genocídio espalhou os sobreviventes pela galáxia e tornou a sua cultura um conjunto de clãs escondidos.` },
                    { title: 'Armadura de Beskar', text: `O aço Mandaloriano, conhecido como Beskar, é uma das ligas mais resistentes da galáxia, capaz de resistir a disparos de blaster e até mesmo a golpes de sabre de luz. A armadura é sagrada para um Mandaloriano.` },
                    { title: 'O Mitossauro', text: `Uma criatura colossal e lendária de Mandalore. As antigas profecias diziam que o ressurgimento do Mitossauro anunciaria uma nova era para o povo Mandaloriano. Aquele que o domar, domará Mandalore.` },
                    { title: 'Foundlings (Enjeitados)', text: `Crianças órfãs de qualquer espécie que são adotadas na cultura Mandaloriana. Elas são criadas como Mandalorianos, aprendendo o Credo e o caminho do guerreiro. "Foundling" não é um nascimento, é uma honra.` },
                    { title: 'A Vigia (The Watch)', text: `Um clã fundamentalista de Mandalorianos que sobreviveu à Grande Purga. Liderados pela Armeira, eles seguem uma interpretação estrita do Credo, acreditando que o Caminho é a única coisa que lhes resta.` },
                    { title: 'Bo-Katan Kryze', text: `Uma líder Mandaloriana e a última da sua linhagem. Ela já empunhou o Darksaber e luta para unir todos os clãs Mandalorianos e restaurar o seu planeta natal, Mandalore, à sua antiga glória.` },
                    { title: 'As Minas de Mandalore', text: `Localizadas sob a cidade de Sundari, as Águas Vivas nas profundezas das minas são um local sagrado para os Mandalorianos. É lá que um apóstata pode se redimir e ser aceite de volta no Caminho.` },
                    { title: 'A Guilda de Caçadores de Recompensas', text: `Embora não seja exclusivamente Mandaloriana, muitos Mandalorianos, como Din Djarin, encontram trabalho na Guilda. A sua reputação como os melhores guerreiros da galáxia torna-os caçadores de recompensas altamente procurados.` }
                ],
                forca: [
                    { title: 'A Força Viva', text: `A filosofia de que a Força é gerada por todos os seres vivos no presente. Jedi como Qui-Gon Jinn focavam-se em "ouvir" a vontade da Força no momento, em vez de se preocuparem excessivamente com o futuro.` },
                    { title: 'A Força Unificadora', text: `Uma visão mais cósmica da Força, que a vê como uma entidade que une o passado, o presente e o futuro. Esta interpretação é o que permite as profecias e as visões do futuro, mas também pode ser perigosa se mal interpretada.` },
                    { title: 'O Equilíbrio', text: `O conceito central da profecia do Escolhido. O equilíbrio não significa uma quantidade igual de luz e escuridão, mas sim a ausência do lado sombrio, que é visto como uma corrupção da Força natural. A destruição dos Sith era necessária para restaurar este equilíbrio.` },
                    { title: 'A Diada na Força', text: `Um fenómeno raro e poderoso onde dois seres sensíveis à Força, como Rey e Ben Solo, estão conectados através do espaço e do tempo, partilhando habilidades e agindo como um só na Força. O seu poder combinado é imenso.` },
                    { title: 'Fantasmas da Força', text: `Uma habilidade secreta que permite a certos Jedi manter a sua consciência após a morte e interagir com os vivos. Qui-Gon Jinn foi o primeiro a redescobrir esta técnica, ensinando-a depois a Yoda e Obi-Wan.` },
                    { title: 'O Mundo Entre Mundos', text: `Um plano místico dentro da Força que conecta todo o espaço e o tempo. Portais neste local permitem ver o passado e o futuro, e até mesmo influenciar eventos. É um dos segredos mais profundos e perigosos da galáxia.` },
                    { title: 'Midi-chlorians', text: `Organismos microscópicos e inteligentes que vivem dentro das células de todos os seres vivos. Eles atuam como um canal, permitindo que os seres sensíveis à Força se comuniquem e interajam com ela. Uma contagem elevada de midi-chlorians indica um grande potencial na Força.` },
                    { title: 'Psicometria', text: `Uma habilidade rara da Força que permite a um Jedi sentir "ecos" ou memórias de eventos passados ao tocar num objeto. Cal Kestis é um utilizador notável desta habilidade.` },
                    { title: 'Vergens da Força', text: `Locais ou objetos onde a Força é excecionalmente forte. Podem ser imbuídos com o lado da luz (como o primeiro Templo Jedi em Ahch-To) ou com o lado sombrio (como a caverna em Dagobah), e têm um grande impacto nos seres sensíveis à Força que os visitam.` },
                    { title: 'A Vontade da Força', text: `A crença de que a Força tem uma consciência e um propósito próprios. Os Jedi procuram seguir a Vontade da Força, enquanto os Sith tentam dobrá-la aos seus próprios desejos. Eventos como o nascimento de Anakin Skywalker são vistos como manifestações diretas da Vontade da Força.` }
                ],
                cacadores: [
                    { title: 'Boba Fett', text: `Um clone inalterado do lendário Jango Fett, Boba é um dos caçadores de recompensas mais temidos da galáxia. Conhecido pela sua armadura Mandaloriana e pela sua nave, a Slave I, a sua reputação de eficiência é inigualável.` },
                    { title: 'Din Djarin', text: `Um membro devoto do Credo Mandaloriano, Din Djarin, também conhecido como "Mando", viaja pela Orla Exterior. A sua vida muda para sempre quando o seu alvo se torna a sua responsabilidade: uma criança misteriosa chamada Grogu.` },
                    { title: 'Cad Bane', text: `Um caçador de recompensas implacável da era das Guerras Clónicas. Famoso pelos seus blasters duplos e pela sua astúcia, Cad Bane nunca hesita em enfrentar até mesmo os Jedi para completar um contrato. A sua reputação torna-o uma escolha de elite para os trabalhos mais perigosos.` },
                    { title: 'IG-11', text: `Originalmente um droide assassino da série IG programado para seguir os protocolos da Guilda à risca, IG-11 foi reprogramado por Kuiil para se tornar um droide de enfermagem e o protetor de Grogu. O seu sacrifício final demonstrou a sua nova diretriz: proteger.` },
                    { title: 'Bossk', text: `Um Trandoshano conhecido pelo seu ódio por Wookiees. Bossk é um caçador brutal e eficiente, um dos poucos que Darth Vader confiava para caçar a Millennium Falcon.` },
                    { title: 'Aurra Sing', text: `Uma assassina de pele pálida e reflexos incríveis. Treinada brevemente pelos Jedi, ela abandonou a Ordem e se tornou uma especialista em caçar e matar Jedi.` },
                    { title: 'Fennec Shand', text: `Uma mercenária e assassina de elite. A sua pontaria é lendária, e a sua astúcia permitiu-lhe sobreviver a um ferimento quase fatal, retornando como a leal tenente de Boba Fett.` },
                    { title: 'Greedo', text: `Um Rodiano que trabalhava para Jabba, o Hutt. A sua tentativa de capturar Han Solo na cantina de Mos Eisley terminou mal para ele, num encontro que se tornou lendário.` },
                    { title: 'Dengar', text: `Um caçador humano coberto de ligaduras. Apesar da sua aparência rude, era um lutador eficaz e um dos seis caçadores de recompensas convocados por Darth Vader para caçar a Millennium Falcon.` },
                    { title: 'Zuckuss & 4-LOM', text: `Uma dupla famosa. Zuckuss é um Gand que usa a sua intuição mística para encontrar alvos, enquanto 4-LOM é um antigo droide de protocolo que se reprogramou para se tornar um caçador de recompensas calculista.` }
                ],
                droides: [
                    { title: 'R2-D2', text: `Um droide astromecânico leal e engenhoso. A sua bravura e as suas ferramentas versáteis salvaram a galáxia inúmeras vezes. É um herói silencioso da saga.` },
                    { title: 'C-3PO', text: `Um droide de protocolo fluente em mais de seis milhões de formas de comunicação. A sua personalidade ansiosa contrasta com a sua utilidade em negociações diplomáticas.` },
                    { title: 'BB-8', text: `Um droide astromecânico de última geração com uma personalidade expressiva. A sua cabeça em forma de cúpula e o seu corpo esférico permitem uma mobilidade única.` },
                    { title: 'K-2SO', text: `Um droide de segurança imperial reprogramado para servir à Aliança Rebelde. O seu humor sarcástico e a sua honestidade brutal tornam-no um aliado inesquecível.` },
                    { title: 'IG-11', text: `Originalmente um droide assassino, foi reprogramado para se tornar um droide de enfermagem e protetor. A sua evolução demonstra a sua capacidade de mudar a sua programação.` },
                    { title: 'BD-1', text: `Um pequeno droide de exploração desenhado para acompanhar um mestre em terrenos difíceis. É curioso, leal e capaz de armazenar informações cruciais.` },
                    { title: 'Droides de Batalha B1', text: `A espinha dorsal do exército Separatista. Produzidos em massa e com uma programação simples, a sua força residia nos seus números esmagadores, apesar da sua falta de inteligência.` },
                    { title: 'Droidekas (Destroyer Droids)', text: `Temidos pelos soldados clones, os Droidekas eram equipados com blasters duplos e um gerador de escudo pessoal, tornando-os adversários extremamente difíceis de derrotar.` },
                    { title: 'General Grievous', text: `Embora fosse um Kaleesh, o seu corpo cibernético transformou-o num droide de guerra. Um caçador de Jedi e comandante do exército Separatista, a sua habilidade em lutar com quatro sabres de luz era aterrorizante.` },
                    { title: 'L3-37', text: `Uma droide piloto e ativista pelos direitos dos droides. A sua personalidade única e a sua consciência foram integradas nos sistemas de navegação da Millennium Falcon, tornando-a parte da nave.` }
                ]
            };


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

    function showTeaching(teaching, faction) {
        archiveDisplayTitle.classList.remove('holographic-text');
        archiveDisplayText.classList.remove('holographic-text');
        void archiveDisplayTitle.offsetWidth;
        archiveDisplayTitle.textContent = teaching.title;


        const factionKey = faction.replace(/_heroes|_legends/g, '');
        archiveDisplayTitle.style.color = `var(--cor-${factionKey})`;

        archiveDisplayText.textContent = teaching.text;
        archiveDisplayTitle.classList.add('holographic-text');
        archiveDisplayText.classList.add('holographic-text');
        document.querySelectorAll('.archive-nav__button').forEach(btn => {
        btn.classList.toggle('archive-nav__button--active', btn.textContent === teaching.title);
        });
    }

    function openArchive(faction) {
                const factionTeachings = teachings[faction];
                if (!factionTeachings) return;
                
                archiveNav.innerHTML = ''; 
                const factionKey = faction.replace(/_heroes|_legends/g, '');
                const factionColor = getComputedStyle(document.documentElement).getPropertyValue(`--cor-${factionKey}`).trim();
                archiveContent.style.setProperty('--faction-color', factionColor);

                factionTeachings.forEach((teaching, index) => {
                    const button = document.createElement('button');
                    button.className = 'archive-nav__button';
                    button.textContent = teaching.title;
                    button.style.setProperty('--faction-color', factionColor);
                    button.addEventListener('click', () => showTeaching(teaching, faction));
                    archiveNav.appendChild(button);
                    if (index === 0) {
                        showTeaching(teaching, faction);
                    }
                });
                
                archiveContent.style.borderColor = factionColor;
                archiveModal.classList.add('holocron-archive--active');
            }

            pedestals.forEach(pedestal => {
                pedestal.addEventListener('click', () => {
                    const faction = pedestal.dataset.faction;
                    openArchive(faction);
                });
            });
            
            closeBtn.addEventListener('click', closeModal);
            archiveModal.addEventListener('click', (e) => {
                if(e.target === archiveModal) closeModal();
            });

            function closeModal() {
            archiveModal.classList.remove('holocron-archive--active');
            }

});
