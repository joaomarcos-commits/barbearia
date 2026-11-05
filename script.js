
/* Mensagem no console */

console.log("Bem-vindo à Barbearia Do Jojo! 💈");

/* Efeito de entrada nas seções */

const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver(function(entradas) {

    entradas.forEach(function(entrada) {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }

    });

}, {
    threshold: 0.15
});

secoes.forEach(function(secao) {
    observador.observe(secao);
});
