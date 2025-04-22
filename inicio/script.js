document.getElementById('menuOpcoesSobreMim').addEventListener('click', function() {
    const divSobreMim = document.getElementById('sobreMim');
    divSobreMim.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('logoVRosaExtendida').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// PARTICULAS NA CAPA mds to enlouquecendo
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffb6c1" }, 
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: true }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});

// botoes
function PorfolioAntigo() {
    window.open("https://portfoliobela.carrd.co/", "_blank");
}

// matérias

document.addEventListener('DOMContentLoaded', function() {
    const abas = document.querySelectorAll('.aba-trimestre');
    
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            // Remove a classe 'ativo' de todas as abas e conteúdos
            document.querySelectorAll('.aba-trimestre').forEach(a => a.classList.remove('ativo'));
            document.querySelectorAll('.conteudo-trimestre').forEach(c => c.classList.remove('ativo'));
            
            // Adiciona a classe 'ativo' apenas na aba clicada
            this.classList.add('ativo');
            
            // Mostra o conteúdo correspondente
            const trimestre = this.getAttribute('data-trimestre');
            document.querySelector(`.conteudo-trimestre[data-trimestre="${trimestre}"]`).classList.add('ativo');
        });
    });
});

// Adicione isso ao seu script.js
document.addEventListener('DOMContentLoaded', function() {
    // Controle das abas (já existente)
    const abas = document.querySelectorAll('.aba-trimestre');
    abas.forEach(aba => {
        aba.addEventListener('click', function() {
            document.querySelectorAll('.aba-trimestre').forEach(a => a.classList.remove('ativo'));
            document.querySelectorAll('.conteudo-trimestre').forEach(c => c.classList.remove('ativo'));
            this.classList.add('ativo');
            const trimestre = this.getAttribute('data-trimestre');
            document.querySelector(`.conteudo-trimestre[data-trimestre="${trimestre}"]`).classList.add('ativo');
        });
    });

    // Controle dos botões de detalhes
    const botoesDetalhes = document.querySelectorAll('.botao-detalhes');
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', function() {
            const atividade = this.closest('.atividade');
            const descricao = atividade.querySelector('.atividade-descricao');
            
            // Mostrar a descri o completa
            descricao.style.maxHeight = descricao.scrollHeight + 'px';
        });
    });
    
});

    // direcionar abars
    function voltar() {
        window.location.href = "../inicio/index.html";
    }
    function Humanas() {
        window.location.href = "../materias/humanas.html";
    }

    function Linguagens() {
        window.location.href = "../materias/linguagens.html";
    }
    
    function Matematica() {
        window.location.href = "../materias/matematica.html";
    }

    function Natureza() {
        window.location.href = "../materias/natureza.html";
    }

    function ModelagemS(){
        window.location.href = "../técnico/modelagemsistemas.html"
    }

    function IOT(){
        window.location.href = "../técnico/iot.html"
    }

//HUMANAS ------------------------------------------
// humanas 1
function hlinhatempo() {
    window.open("https://www.canva.com/design/DAGkmyHVXIM/yv9fFlpIAqG5bwoHLXq5Rw/edit", "_blank");
}

function hseminario() {
    window.open("https://www.canva.com/design/DAGkmyHVXIM/yv9fFlpIAqG5bwoHLXq5Rw/edit", "_blank");
}

// LINGUAGENS -------------------------------------
// linguagens 1

// NATUREZA ---------------------------------------
// natureza 1

// MATEMÁTICA -------------------------------------
// matematica 1
function hfilme() {
    window.open("https://docs.google.com/document/d/1WzZrqpXLnqumy7fNdOUGpCNkiHbZsNP7Q1WF8R-HteY/edit?usp=sharing", "_blank");
}
function hjogo() {
    window.open("https://www.canva.com/design/DAGk4mGajNg/uZ15Zuv5_thd3E7G_Aw-5Q/view?utm_content=DAGk4mGajNg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h294bf37923", "_blank");
}

// MODELAGEM DE SISTEMAS ----------------------------
// modelagem de sistemas 1
function mshamburgueria() {
    window.open("https://docs.google.com/spreadsheets/d/1aQaSxqGmsIqfTMy1x9_lTEjevl1-jZKYrTuMfgJw-8M/edit?usp=sharing", "_blank");
}

function mssaapresentacao() {
    window.open("https://www.canva.com/design/DAGiBSdVkqA/RR62FQMow1BQ4W3IsUjnRQ/edit?utm_content=DAGiBSdVkqA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
}