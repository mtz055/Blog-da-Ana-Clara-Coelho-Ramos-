const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const header = document.querySelector(".header");

// Menu Mobile
if (toggle) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Header dinâmico ao rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Revelação suave dos cards (AOS Alternativo via JS)
document.addEventListener('DOMContentLoaded', () => {
    const cardsParaAnimar = document.querySelectorAll('.card-projeto, .card');
    
    cardsParaAnimar.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Função de Zoom
function toggleZoom(container) {
    container.classList.toggle('zoomed');
    document.body.style.overflow = container.classList.contains('zoomed') ? 'hidden' : 'auto';
}

const form = document.getElementById('whatsapp-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        try {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === "" || mensagem === "") {
                alert("Por favor, preencha os campos obrigatórios.");
                return;
            }

            const numeroZap = "5511947002903"; 
            const texto = encodeURIComponent(`Olá Ana! Meu nome é *${nome}* (${email}).\n\n*Assunto:* ${mensagem}`);
            const linkZap = `https://wa.me/${numeroZap}?text=${texto}`;
            
            // Tenta abrir em nova aba, se falhar, abre na mesma
            const newWindow = window.open(linkZap, '_blank');
            if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') { 
                window.location.href = linkZap;
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Ocorreu um erro ao processar o envio. Verifique o console.");
        }
    });
}