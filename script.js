// CONFIGURAÇÃO IMPORTANTE: Defina sua data de início aqui!
const startDate = new Date("2025-03-21"); // ANO-MÊS-DIA

function updateCounter() {
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Exibe o contador
    document.getElementById("counter").innerText = diffDays + " dias";
    
    // Calcula o próximo aniversário de relacionamento
    const nextAnniversary = new Date(startDate);
    nextAnniversary.setFullYear(today.getFullYear());
    
    if (nextAnniversary < today) {
        nextAnniversary.setFullYear(today.getFullYear() + 1);
    }
    
    const daysToAnniversary = Math.ceil((nextAnniversary - today) / (1000 * 60 * 60 * 24));
    
    // Exibe mensagem especial
    document.getElementById("anniversary").innerText = 
        `Próximo aniversário: ${daysToAnniversary} dias restantes!`;
        
}



// Atualiza o contador ao carregar e a cada 1 minuto
updateCounter();
setInterval(updateCounter, 60000);

function soltarCoracoes() {
    const intervalo = 150; // ⏱ Tempo entre cada coração (em ms)
    const total = 100;     // 🔢 Quantidade total de corações a serem gerados
    const duracaoAnimacao = 6; // ⏳ Duração base da animação em segundos

    let gerados = 0;
    const timer = setInterval(() => {
        if (gerados >= total) {
            clearInterval(timer);
            return;
        }

        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = '❤️';

        // Aparece na parte de baixo
        heart.style.top = '90vh'; // bem próximo da base da tela

        // Posição horizontal aleatória
        heart.style.left = Math.random() * 100 + 'vw';

        // Tamanho aleatório
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';

        // Duração da animação (variação levemente aleatória)
        heart.style.animationDuration = (Math.random() * 1 + duracaoAnimacao) + 's';

        // Movimento horizontal aleatório
        const xMove = (Math.random() * 60 - 30) + 'px'; // -30px a +30px
        heart.style.setProperty('--x-move', xMove);

        // Sem rotação
        heart.style.setProperty('--rotation', '0deg');

        document.body.appendChild(heart);

        // Remover após tempo suficiente
        setTimeout(() => {
            heart.remove();
        }, (duracaoAnimacao + 2) * 1000);

        gerados++;
    }, intervalo);
}
