document.addEventListener('DOMContentLoaded', function() {
    // Configuração do modal
    const openModalBtn = document.querySelector('.bt-red'); // Seleciona o botão "Assistir video"
    const closeModalBtn = document.getElementById('closeModal');
    const modalContainer = document.getElementById('modalContainer');
    
    // Abrir modal ao clicar no botão "Assistir video"
    if(openModalBtn) {
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            modalContainer.classList.add('active');
        });
    }
    
    // Fechar modal
    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modalContainer.classList.remove('active');
        });
    }
    
    // Fechar ao clicar fora do conteúdo
    if(modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            if (e.target === modalContainer || e.target === modalContainer.querySelector('.modal-background')) {
                modalContainer.classList.remove('active');
            }
        });
    }

    // Seu código existente do Swiper pode permanecer aqui
});