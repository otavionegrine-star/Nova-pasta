function iniciarQueima() {
    const container = document.getElementById('flag-container');
    
    // Evita repetir se já estiver queimando
    if (container.classList.contains('burning')) return;

    container.classList.add('burning');

    // Gerador de faíscas (particles)
    const sparkInterval = setInterval(() => {
        const spark = document.createElement('div');
        spark.className = 'spark';
        
        const size = Math.random() * 4 + 2;
        spark.style.width = size + 'px';
        spark.style.height = size + 'px';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.bottom = '0px';

        container.appendChild(spark);

        // Animação de subida da faísca
        const drift = (Math.random() - 0.5) * 150;
        spark.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 1 },
            { transform: `translateY(-250px) translateX(${drift}px)`, opacity: 0 }
        ], { 
            duration: 1000 + Math.random() * 1000, 
            easing: 'ease-out' 
        });

        // Limpa o HTML para não pesar
        setTimeout(() => spark.remove(), 2000);
    }, 40);

    // Comando para cair após 2 segundos de fogo
    setTimeout(() => {
        container.classList.add('falling');
        clearInterval(sparkInterval); // Para as faíscas quando ela cai
    }, 2000);
}