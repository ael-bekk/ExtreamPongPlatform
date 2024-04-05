class DashboardPage extends HTMLElement {
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
            .dashboard {
                position: relative;
                display: block;
                height: fit-content;
                width: 100vw;
                overfloW-x: hidden;
                scrollbar-width: 0;
            }
            .dashboard::-webkit-scrollbar {
                display: none;
            }

            nav {
                position: relative;
                height: 100px;
                // border: 1px solid #000;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                backdrop-filter: saturate(180%) blur(20px) contrast(90%) brightness(120%);
                box-shadow: 0 0 10px 1px #0af inset,
                            0 0 100px 5px #0af;
                background-image: linear-gradient(to bottom, #0af3, #00f0 100%);
                z-index: 1;
                
            }

            main {
                position: relative;
                width: 100%;
                height: fit-content;
                display: flex;
                flex-direction: column;
                gap: 100px;
                align-items: center;
                // border: 1px solid #f00;
            }

            .header {
                position: relative;
                width: 100%;
                height: 200px;
                display: flex;
                justify-content: left;
                align-items: center;
                // border: 1px solid #f00;
            }
            .header > h1 {
                position: relative;
                width: fit-content;
                height: fit-content;
                font-size: 20px;
                left: 29px;
                background-image: linear-gradient(to right, #0af3, #00f3);
                color: #fff;
                text-align: center;
                line-height: 100px;
                padding: 10px 10px;
                border-radius: 10px;
                box-shadow: 0 0 10px 5px #0af5,
                            0 0 100px 5px #0af5 inset;
            }
            .header > img {
                position: relative;
                width: 100px;
                height: 100px;
                // border: 1px solid #f00;
            }

            main > h1 {
                position: relative;
                width: 100%;
                height: fit-content;
                font-size: 14px;
                color: #0ff;
                text-decoration: underline;
            }

            .WatchLive {
                position: relative;
                margin-top: 100px;
                width: 1000px;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #0ffa;
                background-image: linear-gradient(to bottom, #0af3, #fff4, #0af3);
                box-shadow: 0 0 100px 5px #0af4 inset,
                            0 0 10px 5px #0af4;
                border-radius: 20px;

            }
            .robot {
                position: absolute;
                left: 100%;
                transform: translate(-28%, 0);
                height: 100%;
                z-index: 0;
            }


            .listOfGames {
                position: relative;
                width: fit-content;
                height: fit-content;
                display: grid;
                grid-gap: 200px;
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
                align-items: center;
                // border: 1px solid #f00;
                padding: 200px;
            }

            .listOfGames > div {
                position: relative;
                width: 500px;
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid #0ff;
                box-shadow: 0 0 10px 5px #0af,
                            0 0 100px 5px #0af inset;
                border-radius: 20px;
                background-image: linear-gradient(to top, #0af7, #00f0);
                transition: all 0.4s ease-in-out;
                cursor: pointer;
                z-index: 1;
            }

            .listOfGames > div:hover {
                box-shadow: 0 0 10px 5px #0af,
                            0 0 100px 5px #0af inset,
                            0 0 10px 5px #0af;
                transform: scale(1.1);
            }
            .listOfGames > div:hover img {
                transform: translate(0, -50px);
                transition: all 1s ease-in-out;
            }
            .listOfGames > div:hover h1 {
                transform: translate(0, 50px) scale(1.5);
                transition: all 1s ease-in-out;
            }
            .listOfGames > div:hover:nth-of-type(3) h1 {
                transform: translate(0, 50px) ;
                transition: all 1s ease-in-out;
            }
            .listOfGames > span {
                position: absolute;
                width: 100%;    
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .listOfGames > span > img {
                width: 100px;
                height: 100px;
                transition: all 1s ease-in-out;
            }
            .listOfGames > div > h1 {
                position: absolute;
                width: 100%;
                font-size: 90px;
                color: #0ff;
                text-border: 1px solid #f00;
                text-align: center;
                z-index: 0;
                transition: all 1s ease-in-out;

            }
            .listOfGames > div > h1:nth-of-type(2) {
                -webkit-text-stroke: 1px #0af;
                color: transparent;
                z-index: 50;
            }

            .listOfGames > div > button {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 50px;
                font-size: 20px;
                background-color: #0af;
                color: #fff;
                border: 0px;
                border-radius: 0 0 20px 20px;
                cursor: pointer;
            }

            .listOfGames > div > img {
                position: absolute;
                bottom: 50px;
                // border: 1px solid #fff;
                width: 500px;
            }
            .listOfGames > div:nth-of-type(3) > img {
                bottom: 8px;
            }
            .listOfGames > div:nth-of-type(4) > img {
                bottom: 45px;
            }
            .framesList {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -1;
                opacity: 1;
                transition: all 1s ease-in-out;
            }
            .profile {
                position: relative;
                width: 150px;
                height: 150px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                // border: 1px solid #f00;
                margin-right: 20px;
            }
            .profile  * {
                position: absolute;
                width: 100%;
                height: 100%;
                // border: 1px solid #0ff;
                cursor: pointer;
            }
            .profile svg {
                transform: translate(24.5%, 22.3%);
            }
            .profile a {
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(100%, 44%);
            }
            .plAvatar {
                position: relative;
                width: 76px;
                height: 83px;
                clip-path: url(#clip0);
            }
            .search {
                position: absolute;
                width: 400px;
                height: 40px;
                display: flex;
                justify-content: center;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                // border: 1px solid #0ff;
            }
            .search > input {
                width: 70%;
                height: 40px;
                border: 1px solid #0ee;
                box-shadow: 0 0 10px 5px #0af,
                            0 0 100px 5px #0af inset;
                border-radius: 10px 0 0 10px;
                padding: 0 20px;
                font-size: 20px;
            }
            .search > button {
                width: 30%;
                height: 42px;
                border: 1px solid #0ee;
                border-radius: 0 20px 20px 0;
                background-color: #0af;
                color: #fff;
                font-size: 20px;
                cursor: pointer;
                box-shadow: 0 0 10px 5px #0af,
                            0 0 100px 5px #0af inset;
            }
            .logout {
                position: absolute;
                width: 100px;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                right: 50px;
                // border: 1px solid #0ff;
            }
            .logout > a {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #0ff;
                text-decoration: none;
            }
        </style>
        <div class="dashboard">
                    <nav>
                        <div class="profile">
                            <a href="#/home">@abdellah</a>
                            <img src="./assets/images/dashboardGate/avatar.svg" alt="avatar">
                            <img class="plAvatar" src="assets/images/anonimous.jpeg">
                            <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M99.1936 22.7831L67.5 4.48483C60.3838 0.376274 51.6162 0.376274 44.5 4.48483L12.8064 22.7831C5.6902 26.8917 1.30642 34.4846 1.30642 42.7017V79.2983C1.30642 87.5154 5.6902 95.1083 12.8064 99.2169L44.5 117.515C51.6162 121.624 60.3838 121.624 67.5 117.515L99.1936 99.2169C106.31 95.1083 110.694 87.5154 110.694 79.2983V42.7017C110.694 34.4846 106.31 26.8917 99.1936 22.7831Z" fill="url(#pattern0)" stroke="url(#paint0_linear_255_519)" stroke-width="2"/>
                                <defs>
                                    <clipPath id="clip0" transform="translate(0 0) scale(0.68)">
                                        <path d="M99.1936 22.7831L67.5 4.48483C60.3838 0.376274 51.6162 0.376274 44.5 4.48483L12.8064 22.7831C5.6902 26.8917 1.30642 34.4846 1.30642 42.7017V79.2983C1.30642 87.5154 5.6902 95.1083 12.8064 99.2169L44.5 117.515C51.6162 121.624 60.3838 121.624 67.5 117.515L99.1936 99.2169C106.31 95.1083 110.694 87.5154 110.694 79.2983V42.7017C110.694 34.4846 106.31 26.8917 99.1936 22.7831Z" fill="url(#pattern0)" stroke="url(#paint0_linear_255_519)" stroke-width="2"/>
                                    </clipPath>
                                    <linearGradient id="paint0_linear_255_519" x1="18.5" y1="8" x2="100" y2="113" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A73EE7"/>
                                        <stop offset="1" stop-color="#00EBFF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="search">
                            <input type="text" placeholder="Search">
                            <button>Search</button>
                        </div>
                        <div class="logout">
                            <a href="#/home">Logout</a>
                            <img src="./assets/images/dashboardGate/Exit_Sign.svg" alt="logout">
                        </div>
                    </nav>
                    <main>
                        <div class="WatchLive">
                            <h1> No Live Stream Available </h1>
                            <img src="./assets/images/dashboardGate/r.png" alt="r" class="robot">
                        </div>
                        <div class="listOfGames">
                            <div class="1v1">
                                <h1> 1 Vs 1 </h1>
                                <img src="./assets/images/dashboardGate/1v1_1.png" alt="1v1">
                                <button onclick="createDashboard('1v1')">Play</button>
                                <h1> 1 Vs 1 </h1>
                            </div>
                            <div class="2v2">
                                <h1> 2 Vs 2 </h1>
                                <img src="./assets/images/dashboardGate/2v2.png" alt="2v2">
                                <button onclick="createDashboard('2v2')">Play</button>
                                <h1> 2 Vs 2 </h1>
                            </div>
                            <div class="tournament">
                                <h1> Tournament </h1>
                                <img src="./assets/images/dashboardGate/tournament.png" alt="tournament">
                                <button onclick="createDashboard('tournament')">Enter</button>
                                <h1> Tournament </h1>
                            </div>
                            <div class="1vbot">
                                <h1> Vs Bot </h1>
                                <img src="./assets/images/dashboardGate/r2.png" alt="1vbot">
                                <button onclick="createDashboard('1vbot')">Train</button>
                                <h1> Vs Bot </h1>
                            </div>
                            <span class="bob">
                                <img src="./assets/images/gameGate/tenor.gif" alt="bob">
                            </span>
                            </div>
                         </main>
                <img class="framesList" src="./assets/images/gameGate/present.jpeg">
        </div>
        `;
        this.framesListChange();
    }
    framesListChange() {
        const framesList = this.shadowRoot.querySelectorAll('.framesList');
        const frames = ['./assets/images/gameGate/past.png', './assets/images/gameGate/present.jpeg', './assets/images/gameGate/future.jpeg'];
        let i = 0;
        setInterval(() => {
            console.log(i);
            this.shadowRoot.querySelector('.framesList').style.opacity = 0.7;
            setTimeout(() => {
                this.shadowRoot.querySelector('.framesList').src = frames[i % frames.length];
                this.shadowRoot.querySelector('.framesList').style.opacity = 1;
            }, 1000);
            i = (i + 1) % frames.length;
        }, 6000);
    }
}

customElements.define('popup-dashboard', DashboardPage);

function createDashboard(id) {

  const popup = document.createElement('popup-dashboard');
  const home = document.querySelector('.home');
  const bg = document.querySelector('background-component');
  popup.setAttribute('id', id);
  document.body.appendChild(popup);
  document.body.removeChild(home);
  document.body.removeChild(bg);
}