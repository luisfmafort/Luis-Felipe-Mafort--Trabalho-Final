document.addEventListener("DOMContentLoaded", function() {

    const meuBotao = document.querySelector("#btn-boas-vindas"); 
    const meuTextoOculto = document.querySelector("#mensagem-dinamica"); 

    function alternarObjetivos() {
        if (meuTextoOculto.style.display === "none" || meuTextoOculto.style.display === "") {
            
            meuTextoOculto.textContent = "Objetivo Profissional: Aplicar os conhecimentos de Engenharia de Software em projetos futuros e crescer meu repertório profissional";
            
            meuTextoOculto.style.display = "block";
            meuTextoOculto.style.marginTop = "20px";
            meuTextoOculto.style.padding = "15px";
            meuTextoOculto.style.color = "#00b509"; 
            meuTextoOculto.style.borderLeft = "3px solid #06b500";
            meuTextoOculto.style.backgroundColor = "rgba(30, 181, 0, 0.05)";
            
            meuBotao.textContent = "Fechar Objetivos";
            
            console.log("Objetivos profissionais exibidos na tela.");
            
        } else {
            meuTextoOculto.style.display = "none";
            
            meuBotao.textContent = "Ver Meus Objetivos";
            
            console.log("Objetivos profissionais ocultados.");
        }
    }

    if (meuBotao && meuTextoOculto) {
        
        meuBotao.textContent = "Ver Meus Objetivos";
        
        meuBotao.addEventListener("click", alternarObjetivos);
    }
});