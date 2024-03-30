class TournamentGate extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const id = this.getAttribute('id');
        this.shadowRoot.innerHTML = `
        <style>
            * {
                font-family: "Share Tech", sans-serif;
            }
        </style>
        <div class="gates">
            
        </div>
        `;
    }
}

customElements.define('tournament-gate', TournamentGate);

function createGates() {
    const tournamentGate = document.createElement('tournament-gate');
    const home = document.querySelector('.home');
    const bg = document.querySelector('background-component');

    tournamentGate.setAttribute('id', 'tournamentGate');
    
    document.body.appendChild(tournamentGate);
    document.body.removeChild(home);
    document.body.removeChild(bg);
}