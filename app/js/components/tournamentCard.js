class Tournament extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .tournament {
          position: relative;
          left: -5px;
          top: 0;
          width: 490px;
          height: 240px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          // border: 1px solid #f00;
          border-radius: 5px;
        }
        .tournament img {
          position: absolute;
          opacity: 0.7;
          width: 100%;
        }
        .tournament > svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .tournament div {

          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          // background-color: #f00;
          width: 100%;
          height: 100%;

          border-radius: 5px;
        }
        .tournament div div {
          // background-color: #4458;
          width: 100%;
          height: 50%;
          border-radius: 5px;
        }
        .tournament div div img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          clip-path: url(#clip10);
        }
        .tournament div div svg {
          position: absolute;
          width: 36px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(2);

        }
        </style>
        <div class="tournament">
            <img src="./assets/images/bgtournament.jpeg" alt="player">
            <svg width="6826" height="3028" viewBox="0 0 6826 3028" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(1120 650) scale(0.55)">
                <path d="M1086.5 408.5C812.206 3.04352 5 5.49644 5 5.49644V56C5 56 741.891 112.983 956.5 476.5C1055.29 643.829 1043 977 1043 977L1258.5 853.497C1258.5 853.497 1272.06 682.794 1086.5 408.5Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
              <g transform="translate(1120 710) scale(0.55)">
                <path d="M1086.74 2619.79C812.386 3025.45 5 3023 5 3023V2972.47C5 2972.47 742.055 2915.46 956.712 2551.76C1055.52 2384.34 1043.23 2051 1043.23 2051L1258.78 2174.57C1258.78 2174.57 1272.34 2345.36 1086.74 2619.79Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
              <g transform="translate(1100 550) scale(0.65)">
                <path d="M2217.5 1582.5V1384C2217.5 1384 2410.06 1322.26 2526.5 1266.5C2653.17 1205.85 2835.5 1082.5 2835.5 1082.5V1884C2835.5 1884 2653.17 1760.65 2526.5 1700C2410.06 1644.24 2217.5 1582.5 2217.5 1582.5Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
              <g transform="translate(1950 640) scale(0.55)">
                <path d="M5739.69 408.004C6013.94 2.54742 6821 5.00035 6821 5.00035V55.5039C6821 55.5039 6084.24 112.487 5869.67 476.004C5770.9 643.333 5783.18 976.504 5783.18 976.504L5567.72 853C5567.72 853 5554.16 682.298 5739.69 408.004Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
              <g transform="translate(1950 730) scale(0.55)">
                <path d="M5739.45 2619.29C6013.76 3024.96 6821 3022.5 6821 3022.5V2971.97C6821 2971.97 6084.07 2914.96 5869.45 2551.26C5770.66 2383.84 5782.95 2050.5 5782.95 2050.5L5567.44 2174.07C5567.44 2174.07 5553.88 2344.86 5739.45 2619.29Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
              <g transform="translate(1290 550) scale(0.65)">
                <path d="M4608.89 1582V1383.5C4608.89 1383.5 4416.37 1321.76 4299.95 1266C4173.29 1205.35 3991 1082 3991 1082V1883.5C3991 1883.5 4173.29 1760.16 4299.95 1699.5C4416.37 1643.75 4608.89 1582 4608.89 1582Z" fill="#D9D9D9" stroke="white" stroke-width="10"/>
              </g>
            </svg>

            <div id="range">
              <div></div>
              <div></div>
            </div>
            <div id="range">
              <div></div>
            </div>
            <div id="range">
              <div></div>
            </div>
            <div id="range">
              <div></div>
            </div>
            <div id="range">
              <div></div>
              <div></div>
            </div>
        </div>
    `;
    }
      connectedCallback() {
        this.render();
      }
      render() {
        const range = this.shadowRoot.querySelectorAll('#range div');
        const players = [
          './assets/images/devCard/avatar1.svg',
          './assets/images/devCard/avatar1.svg',
          './assets/images/anonymous.png',
          './assets/images/anonymous.png',
          './assets/images/anonymous.png',
          './assets/images/devCard/avatar1.svg',
          './assets/images/anonymous.png'
        ]
        range.forEach((item, index) => {
          item.innerHTML = `
            <img src="${players[index]}" alt="player">
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
              <path d="M18.5204 2.14608L18 1.82893L17.4796 2.14608L1.89114 11.6461L1.41154 11.9384V12.5V31.5V32.0616L1.89114 32.3539L17.4796 41.8539L18 42.1711L18.5204 41.8539L34.1089 32.3539L34.5885 32.0616V31.5V12.5V11.9384L34.1089 11.6461L18.5204 2.14608Z" fill="url(#pattern0)" stroke="url(#paint0_linear_268_905)" stroke-width="2"/>
              <defs>
                <clipPath id="clip10" transform="translate(3.000642 -4.076274) scale(2 2)">
                  <path d="M18.5204 2.14608L18 1.82893L17.4796 2.14608L1.89114 11.6461L1.41154 11.9384V12.5V31.5V32.0616L1.89114 32.3539L17.4796 41.8539L18 42.1711L18.5204 41.8539L34.1089 32.3539L34.5885 32.0616V31.5V12.5V11.9384L34.1089 11.6461L18.5204 2.14608Z" fill="url(#pattern0)" stroke="url(#paint0_linear_268_905)" stroke-width="2"/>
                </clipPath>
                  <linearGradient id="paint0_linear_268_905" x1="8.59091" y1="3" x2="29.0565" y2="40.091" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#000"/>
                      <stop offset="1" stop-color="#00EBFFfa"/>
                  </linearGradient>
              </defs>
            </svg>
          `;
        });
      }
    }

    customElements.define('tournament-card', Tournament);

    function createTournamentCard() {
      const tournamentCard = document.createElement('tournament-card');
      return tournamentCard;
    }