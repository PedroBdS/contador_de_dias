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
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = '❤️';

        // Define posição aleatória na horizontal
        heart.style.left = Math.random() * 100 + 'vw';

        // Define posição vertical de onde começa (centro da tela)
        heart.style.top = '50%';

        // Tamanho aleatório
        heart.style.fontSize = (Math.random() * 10 + 10) + 'px';

        document.body.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}