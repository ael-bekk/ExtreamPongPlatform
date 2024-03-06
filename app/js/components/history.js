const tournamentData = [
    {
        player1: 'Player 10',
        score1: 20,
        player2: 'Player 20',
        score2: 15
    },
    {
        player1: 'Player 30',
        score1: 10,
        player2: 'Player 40',
        score2: 5
    },
    {
        player1: 'Player 50',
        score1: 30,
        player2: 'Player 60',
        score2: 25
    }
];
const game1vs1Data = [
    {
        player1: 'Player 1',
        score1: 20,
        player2: 'Player 2',
        score2: 15
    },
    {
        player1: 'Player 3',
        score1: 10,
        player2: 'Player 4',
        score2: 5
    },
    {
        player1: 'Player 5',
        score1: 30,
        player2: 'Player 6',
        score2: 25
    }
];
const game2vs2Data = [
    {
        player1: 'Player 1',
        score1: 20,
        player2: 'Player 2',
        score2: 15,
        player3: 'Player 3',
        score3: 10,
        player4: 'Player 4',
        score4: 5
    },
    {
        player1: 'Player 5',
        score1: 30,
        player2: 'Player 6',
        score2: 25,
        player3: 'Player 7',
        score3: 15,
        player4: 'Player 8',
        score4: 10
    }
];
const rankingData = [
    {
        player: 'Player 1',
        score: 20
    },
    {
        player: 'Player 2',
        score: 15
    },
    {
        player: 'Player 3',
        score: 10
    },
    {
        player: 'Player 4',
        score: 5
    },
    {
        player: 'Player 5',
        score: 30
    },
    {
        player: 'Player 6',
        score: 25
    },
    {
        player: 'Player 7',
        score: 15
    },
    {
        player: 'Player 8',
        score: 10
    }
];
function showRanking(_historyCard) {
    const data = _historyCard.querySelector('.data');
    data.innerHTML = `
            ${rankingData.map((player, index) => `
                <div class="player">
                    <h3>${index + 1}. ${player.player}</h3>
                    <h3>${player.score}</h3>
                </div>
            `).join('')}
        `;
        _historyCard.querySelector('#R').classList.add('onChoice');
        _historyCard.querySelector('#T').classList.remove('onChoice');
        _historyCard.querySelector('#G').classList.remove('onChoice');
}
function showGame1Vs1History(_historyCard) {
    const data = _historyCard.querySelector('.data');
    data.innerHTML = `
            ${game1vs1Data.map((game, index) => `
                <div class="game">
                    <h3>${game.player1} vs ${game.player2}</h3>
                    <h3>${game.score1} - ${game.score2}</h3>
                </div>
            `).join('')}
        `;
        _historyCard.querySelector('#G').classList.add('onChoice');
        _historyCard.querySelector('#R').classList.remove('onChoice');
        _historyCard.querySelector('#T').classList.remove('onChoice');
}
function showGame2Vs2History(_historyCard) {
    const data = _historyCard.querySelector('.data');
    data.innerHTML = `
            ${game2vs2Data.map((game, index) => `
                <div class="game">
                    <h3>${game.player1} & ${game.player2} vs ${game.player3} & ${game.player4}</h3>
                    <h3>${game.score1} - ${game.score2} - ${game.score3} - ${game.score4}</h3>
                </div>
            `).join('')}
        `;
        _historyCard.querySelector('#G').classList.add('onChoice');
        _historyCard.querySelector('#R').classList.remove('onChoice');
        _historyCard.querySelector('#T').classList.remove('onChoice');
}
function showTournamentHistory(_historyCard) {
    const data = _historyCard.querySelector('.data');
    data.innerHTML = `
            ${tournamentData.map((game, index) => `
                <div class="game">
                    <h3>${game.player1} vs ${game.player2}</h3>
                    <h3>${game.score1} - ${game.score2}</h3>
                </div>
            `).join('')}
        `;
        _historyCard.querySelector('#T').classList.add('onChoice');
        _historyCard.querySelector('#R').classList.remove('onChoice');
        _historyCard.querySelector('#G').classList.remove('onChoice');
}

class History extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        div {
            transition: 0s;
        }
        .list {
            position: relative;
            display: flex;
            width: 490px;
            height: 250px;
            // top: 5px;
            // left: 5px;
            padding: 0px 0px 0px 5px;
            flex-direction: column;
            background-color: #f0f0f033;
            // overflow-y: auto;
        }
        .choice {
            position: relative;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            width: 100%;
            height: 60px;
            left: -5px;
            z-index: 10;
            background-color: #f0f0f0a5;
            clip-path: url(#clipR);
        }
        .choice div {
            position: relative;
            // border : 1px solid #000;
            width: 33.33%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 20px;
            font-size: 1em;
        }
        .choice div:nth-child(1) {
            border-bottom-right-radius: 50%;
            background-color: #055;
        }
        
        .choice div:nth-child(2) {
            position: absolute;
            left: 50%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateX(-50%);
            z-index: -1;
            font-size: 0.6em;
            background-color: #753;
        }
        .choice div:nth-child(3) {
            border-bottom-left-radius: 50%;
            background-color: #055;
        }
        .choice div:hover {
            background-color: #f0f0f0;
        }
        svg {
            position: absolute;
        }
        div::-webkit-scrollbar {
            width: 0;
        }
        .data {
            position: relative;
            // background-color: #f0f0f0;
            top: -10px;
            left: -5px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            height: 100%;
        }
        .choice div.onChoice {
            background-color: #f00;
        }
        .choice div.onChoice:hover {
            background-color: #fff;
        }
        </style>
      <div class="list">
        <svg width="490" height="130">
            <clipPath id="clipR">
                <path d="M0,0 L490,0 L490,60 L335,50 L155,50 L0,60 L0,0" fill="#fff"></path>
            </clipPath>
        </svg>
        <div class="list">
            <div class="choice">
                <div id="T" onclick='showTournamentHistory(this.parentElement.parentElement)'><h2>Tournament H</h2></div>
                <div id="R" onclick='showRanking(this.parentElement.parentElement)'><h1>Ranking</h1></div>
                <div id="G" onclick='showGame1Vs1History(this.parentElement.parentElement)'><h2>Game H</h2></div>
            </div>
            <div class="data">
            </div>
        </div>
      </div>
    `;
  }
    connectedCallback() {
        this._historyCard = this.shadowRoot.querySelector('.list');
        showRanking(this._historyCard);
    }
}

customElements.define('history-card', History);

function createHistoryCard(history) {
    const historyCard = document.createElement('history-card');
    return historyCard;
}