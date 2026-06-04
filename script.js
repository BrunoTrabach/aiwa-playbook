// BANCO DE DADOS EMBARCADO DE HISTÓRIAS DE VENDAS E MAPEAMENTO DE PERSONAGENS
const historiasData = {
    1: {
        title: "História 1: O Cliente Focado em JBL",
        chat: [
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "Olá! Tudo bem? Vi que você estava dando uma olhada na JBL Boombox 3. Excelente máquina, né?" },
            { name: "Cristiane (Cliente)", color: "#EC4899", text: "Sim, adorei o som! Mas achei o preço um pouco salgado. Ela é muito melhor que as outras?" },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "Ela tem muita grife e um som muito equilibrado. Mas deixa eu te mostrar um detalhe técnico de bastidores: você sabia que quando desliga a JBL da tomada ela perde cerca de 25% da força?" },
            { name: "Cristiane (Cliente)", color: "#EC4899", text: "Sério? Não sabia disso não." },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "Sim! Ela cai de 180W para 136W na bateria. Agora dá uma olhada nessa Aiwa BBS01 aqui do lado. Ela entrega 200W RMS reais de pancada contínua tanto na tomada quanto na bateria, por quase metade do preço!" }
        ]
    },
    2: {
        title: "História 2: O Cliente de Som de Entrada",
        chat: [
            { name: "Edy (Vendedor)", color: "#10B981", text: "Amigo, aquela Philco ali está prometendo 300W e o preço está muito em conta. Acho que vou nela." },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "O preço dela realmente atrai! Mas deixa eu te dar uma dica de quem trabalha com áudio todo dia: esses 300W são de potência pico comercial." },
            { name: "Edy (Vendedor)", color: "#10B981", text: "Como assim? Não é o som real?" },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "Exato. Quando você passa dos 80% do volume nela, o som começa a estourar nos agudos e o grave fica meio embolado. A Aiwa BBS01 usa 3 amplificadores digitais independentes (um para o grave, um pros médios e um pros agudos). O som não racha nem no máximo." }
        ]
    },
    3: {
        title: "História 3: O Cliente Tecnológico",
        chat: [
            { name: "Cristiane (Cliente)", color: "#EC4899", text: "Gostei muito do design dessa caixa da LG, cheia de luzes e efeitos." },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "As luzes da LG são lindas mesmo! Mas se você for levar o som para um churrasco no sítio ou para a beira da piscina, os 120W dela podem sumir no espaço aberto." },
            { name: "Cristiane (Cliente)", color: "#EC4899", text: "Entendi... E a Aiwa aguenta o tranco fora de casa?" },
            { name: "Bruno (Promotor)", color: "#3B82F6", text: "Com certeza! Além dos anéis de LED RGB nas laterais, a Aiwa BBS01 tem proteção IP66 contra jatos fortes de água e poeira, e os radiadores passivos pulsam o grave fisicamente. É o dobro da pressão sonora pra animar sua festa." }
        ]
    }
};

// BANCO DE RECURSOS POR MARCA E MODELO DETALHADOS
const tecnologiasData = [
    {
        marca: "AIWA",
        modelo: "Boombox Plus AWS-BBS-01",
        itens: [
            { nome: "Sistema de Áudio de 3 Vias", desc: "Divide as frequências de forma exata entre tweeters, midranges e subwoofers para máxima clareza sonora." },
            { nome: "Tri-Amplificação Digital", desc: "Três chips amplificadores independentes dedicados a cada faixa de som, eliminando distorções de cruzamento." },
            { nome: "Potência de 200W RMS Linear", desc: "Entrega a mesma potência bruta e pressão acústica operando conectada na rede ou direto na bateria." },
            { nome: "Certificação IP66", desc: "Proteção total contra a penetração de poeira, detritos e jatos potentes de água de qualquer direção." },
            { nome: "Bateria Energy Saving", desc: "Gerenciamento inteligente de corrente que entrega até 30 horas de autonomia em volumes moderados." },
            { nome: "App Aiwa BR Audio", desc: "Gerencia o controle do equalizador paramétrico e o acionamento do Modo BOOST de graves à distância." }
        ]
    },
    {
        marca: "JBL",
        modelo: "Boombox 3",
        itens: [
            { nome: "JBL Original Pro Sound", desc: "Assinatura acústica de mercado com calibração voltada para o equilíbrio de frequências nível estúdio." },
            { nome: "Modo de Potência Híbrido", desc: "Opera em 180W RMS conectada à rede elétrica, caindo automaticamente para 136W RMS quando acionada na bateria." },
            { nome: "Certificação IP67", desc: "Garante proteção contra poeira e permite imersão total em água por até 30 minutos em 1 metro." },
            { nome: "Protocolo PartyBoost", desc: "Sincroniza o sinal de áudio digital com mais de 100 caixas compatíveis da mesma marca simultaneamente." }
        ]
    },
    {
        marca: "LG",
        modelo: "XBOOM Go XG9S",
        itens: [
            { nome: "Calibração Meridian Audio", desc: "Processamento digital desenvolvido pela engenharia britânica focado no palco sonoro e voz." },
            { nome: "Track Woofers em Fibra de Carbono", desc: "Cones de alta rigidez estrutural que permitem excursões mecânicas velozes sem deformação física." },
            { nome: "Projetor Traseiro de Luz", desc: "Canhão dinâmico de LED que projeta efeitos visuais coloridos e expande a ambientação no local." }
        ]
    },
    {
        marca: "PHILCO",
        modelo: "Boombox Extreme PBX01",
        itens: [
            { nome: "Reforço de Graves ExBass", desc: "Ganho analógico aplicado nativamente nas baixas frequências para ganho de peso mecânico inicial." },
            { nome: "Conectividade Bluetooth 5.4", desc: "Protocolo atualizado de transmissão de pacotes estáveis com menor latência para vídeos e mídias." },
            { nome: "Entradas de Mídia Integradas", desc: "Suporta conexões diretas para leitura física de arquivos via memórias USB (Pen Drives) e cabo P2." }
        ]
    }
];

// NAVEGAÇÃO DE TELAS INTEGRADA (HERDANDO ESTADOS NAS ABAS INFERIORES)
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        document.querySelector('.app-content').scrollTop = 0;
    }

    // Gerenciador do Estado Ativo da Tab Bar Inferior
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (screenId === 'screen-home') document.getElementById('nav-home').classList.add('active');
    else if (screenId === 'screen-historias' || screenId === 'screen-chat') document.getElementById('nav-historias').classList.add('active');
    else if (screenId === 'screen-tecnologias') document.getElementById('nav-tech').classList.add('active');
    else if (screenId === 'screen-sobre') document.getElementById('nav-sobre').classList.add('active');
}

// INJETOR DINÂMICO DOS BALÕES DE SIMULAÇÃO (CHAT)
function openChat(id) {
    const data = historiasData[id];
    if (!data) return;

    document.getElementById('chat-title').innerText = data.title;
    const chatArea = document.getElementById('chat-area');
    chatArea.innerHTML = '';

    data.chat.forEach(msg => {
        const group = document.createElement('div');
        group.className = 'chat-bubble-group';

        const label = document.createElement('div');
        label.className = 'avatar-label';
        label.style.color = msg.color;
        label.innerText = msg.name;

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.style.borderColor = msg.color;
        bubble.innerText = msg.text;

        group.appendChild(label);
        group.appendChild(bubble);
        chatArea.appendChild(group);
    });

    navigateTo('screen-chat');
}

// ESTRUTURADOR DA ÁRVORE DE MARCAS E ESPECIFICAÇÕES TÉCNICAS
function initTecnologias() {
    const container = document.getElementById('tecnologias-container');
    container.innerHTML = '';

    tecnologiasData.forEach(brand => {
        const brandBox = document.createElement('div');
        brandBox.className = 'brand-box';

        const title = document.createElement('h3');
        title.className = 'brand-title';
        title.innerText = `${brand.marca} — ${brand.modelo}`;
        brandBox.appendChild(title);

        brand.itens.forEach(feature => {
            const item = document.createElement('div');
            item.className = 'tech-item';

            const fName = document.createElement('div');
            fName.className = 'tech-name';
            fName.innerText = `⚡ ${feature.nome}`;

            const fDesc = document.createElement('div');
            fDesc.className = 'tech-desc';
            fDesc.innerText = feature.desc;

            item.appendChild(fName);
            item.appendChild(fDesc);
            brandBox.appendChild(item);
        });

        container.appendChild(brandBox);
    });
}

// RENDERIZADOR LOGICO DO SISTEMA DE CONCLUSÃO (ISOLADO DO CHAT)
function showConclusao(type) {
    const box = document.getElementById('conclusao-content');
    box.classList.remove('hidden');

    if (type === 'completa') {
        box.innerHTML = `
            <h3>Síntese Integral (Estratégia Corporativa)</h3>
            <p>O segredo do sucesso no ponto de venda está em deslocar a percepção do cliente da simples grife comercial para a engenharia real entregue. Quando provamos que a Aiwa BBS01 mantém seus 200W RMS contínuos longe da tomada, resolvemos a maior frustração dos usuários de caixas portáteis.</p>
            <p>Ao demonstrar o sistema de 3 vias físicas e a proteção IP66, mostramos que durabilidade e fidelidade de estúdio não precisam custar valores proibitivos. A venda se consolida pela verdade técnica e pela experiência sensorial criada no chão de loja.</p>
        `;
    } else {
        box.innerHTML = `
            <h3>Diretrizes Práticas (Uso Diário no PDV)</h3>
            <p><strong>🎯 Foco nos 200W RMS:</strong> Fixe na mente do cliente que a Aiwa entrega o mesmo rendimento bruto operando fora da rede elétrica, quebrando o argumento da concorrência.</p>
            <p><strong>🎯 Clareza e Tri-Amplificação:</strong> Mostre que os graves não distorcem e os vocais mantêm nitidez de estúdio mesmo operando em volumes de pico.</p>
            <p><strong>🎯 Proposta de Valor Justo:</strong> Destaque o custo por watt de áudio real entregue pela engenharia nacional do Grupo MK frente a marcas importadas.</p>
        `;
    }
}

// INICIALIZAÇÃO DE SISTEMA AO CARREGAR DOCUMENTO DO DOM
document.addEventListener('DOMContentLoaded', () => {
    initTecnologias();
});
