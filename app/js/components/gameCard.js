class GameCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .game {
            position: relative;
            left: -5px;
            top: 0;
            width: 490px;
            height: 240px;

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border: 1px solid #000;
            border-radius: 5px;
        }
        #game {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            border-radius: 5px;
        }
        .game img {
            position: absolute;
            width: 100%;
            height: 100%;

            object-fit: cover;

        }
        .game h2 {
            position: absolute;
            color: #fff;
            font-size: 20px;
          margin: 0;
        }
      </style>
      <div class="game">
        
      </div>
    `;
  }
  connectedCallback() {
    this.shadowRoot.querySelector('.game').innerHTML = `
    ${ [1,2,3,4].map((i) => `
        <div class="game${i}" id="game">
            <img src="https://via.placeholder.com/100" alt="game${i}">
            <h2>Game ${i}</h2>
        </div>
        `).join('') }
    `;
  }
}

customElements.define('game-card', GameCard);

function createGameCard() {
  const gameCard = document.createElement('game-card');
  return gameCard;
}