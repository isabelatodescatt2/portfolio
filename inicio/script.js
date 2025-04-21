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
            color: { value: "#ffb6c1" }, // Rosa claro
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

function voltar() {
    window.location.href = "../inicio/index.html";
}
function Humanas() {
    window.location.href = "../materias/humanas.html";
}

