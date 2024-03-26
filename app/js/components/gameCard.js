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
            grid-template-columns: repeat(3, 1fr);
            border: 1px solid #000;÷
            border-radius: 5px;
        }
        #game {
            position: relative;
            width: 140%;
            clip-path: polygon(30% 0%, 100% 0, 70% 100%, 0 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            border-radius: 5px;
            background: #000;
            transition: all 0.3s;
        }
        #game:nth-child(1) {
            clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
        }
        #game:hover {
          cursor: pointer;
          transform: scale(1.2);

        }
        .game img {
          position: absolute;
          width: 100%;
        }
        #game:nth-child(1) img:nth-child(2) {
          position: absolute;
          bottom: -5px;
        }

        #game:nth-child(2) img {
          width: 50%;
        }
        #game:nth-child(2) img:nth-child(2) {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60%;
        }
        #game:nth-child(2) img:nth-child(1) {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
        }
        .game h2 {
            position: absolute;
            color: #fff;
            font-size: 20px;
          margin: 0;
        }
        #game .vs {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(30deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 60%);
          // border: 1px solid #f00;
        }
        #game .vs img#vs {
          position: relative;
          width: 50%;
          // border: 1px solid #f00;
        }
      </style>
      <div class="game">
        
      </div>
    `;
  }
  connectedCallback() {
    const imgs = [
      [ './assets/images/egypt.jpeg',
        './assets/images/aiOpp.png'],
      ['./assets/images/anonymous.png',
      './assets/images/avatar/avatarTest.png'],
      ['./assets/images/maxresdefault.jpeg']
    ]
    this.shadowRoot.querySelector('.game').innerHTML = `
    ${ [1,2,3].map((i) => `
        <div class="game${i}" id="game">
            ${
              imgs[i-1].map((img) => `
                <img src="${img}" alt="game${i}">
              `).join('')
            }
        </div>
        `).join('') }
    `;
    this.shadowRoot.querySelector('.game2').innerHTML += `
     <div class="vs">
        <img src="./assets/images/vs.png" alt="game2" id="vs">
      </div>
    `;
  }
}

customElements.define('game-card', GameCard);

function createGameCard() {
  const gameCard = document.createElement('game-card');
  return gameCard;
}