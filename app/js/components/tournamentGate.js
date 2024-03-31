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
            .tournamentGate {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #000;
                color: #fff;
                perspective: 1000px;
            }
            .tournamentGate__content {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
            }
            .tournamentGate__content__wrapper {
                position: absolute;
                left: 50%;
                height: 2000px;
                min-width: 2000px;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
                transform: rotateX(60deg) translateZ(300px) translateY(-15%) translateX(-50%);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
                background-color: #000;
                animation: entrance 4s linear forwards;
            }
            @keyframes entrance {
                0% {
                    transform: rotateX(40deg) translateZ(-1000px) translateY(-140%) translateX(-50%);
                }
                30% {
                    transform: rotateX(80deg) translateZ(0px) translateY(-110%) translateX(-50%);
                }
            }
            .tournamentGate__content__wrapper:nth-child(2) {
                transform: rotateX(60deg) translateZ(0px) translateY(50%) translateX(-50%);
            }
            .leftBg {
                position: absolute; 
                left: -50%;
                top: 0;
                width: 40%;
                height: 100%;
                transform: rotateY(-90deg) translateX(50%) translateZ(-600px);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
            }
            .rightBg {
                position: absolute;
                right: -50%;
                top: 0;
                width: 40%;
                height: 100%;
                transform: rotateY(90deg) translateX(-50%) translateZ(-600px);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
            }
            .topBg {
                position: absolute;
                left: 0;
                top: -20%;
                width: 100%;
                height: 40%;
                display: flex;
                justify-content: center;
                align-items: end;
                transform: rotateX(-90deg) translateY(-50%);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
            }
            .screen {
                position: relative;
                width: calc(90% - 10px);
                height: 70%;
                background-color: #000;
                transform: translateY(-30px);
                border: 5px solid #44FFFF;
            }
            .screenTopBg {
                position: absolute;
                width: 100%;
                height: 0%;
                top: 0;
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
                background-position: bottom left;
                animation: bgOpen 9s linear forwards;
            }
            .screenBottomBg {
                position: absolute;
                width: 100%;
                height: 0%;
                bottom: 0;
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
                animation: bgOpen 9s linear forwards;
            }
            @keyframes bgOpen {
                0% {
                    height: 50%;
                }
                45% {
                    height: 50%;
                }
            }
            .screenTopBg2 {
                position: absolute;
                width: 100%;
                height: 20%;
                top: 0;
                background: linear-gradient(rgba(0,0,0,0) 0%, #000 100%);
                z-index: -1;
            }
            .screenBottomBg2 {
                position: absolute;
                width: 100%;
                height: 20%;
                bottom: 0;
                background: linear-gradient(#000 0%, rgba(0,0,0,0) 100%); 
                z-index: -1;
            }
            .screenTopBg3 {
                position: absolute;
                width: 100%;
                height: 20%;
                top: 0;
                background: linear-gradient(#00f, #0af, #0ff, #0f0, rgba(0,0,0,0));
                background-size: 100% 6px;
                z-index: -2;
                animation: animateBg3 3s linear infinite;
            }
            .screenBottomBg3 {
                position: absolute;
                width: 100%;
                height: 20%;
                bottom: 0;
                background-image: linear-gradient(rgba(0,0,0,0), #0af, #0ff, #0f0, #00f); 
                background-size: 100% 6px;
                z-index: -2;
                animation: animateBg3 3s linear infinite reverse;
            }
            @keyframes animateBg3 {
                0% {
                    background-position: 0 0;
                }
                100% {
                    background-position: 0 100%;
                }
            }
            .upBg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 2000px;
                display: flex;
                justify-content: center;
                align-items: end;
                transform: translateZ(800px);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
            }
            .frontBg {
                position: absolute;
                left: 0;
                top: -20%;
                width: 100%;
                height: 40%;
                display: flex;
                justify-content: center;
                align-items: end;
                transform: rotateX(-90deg) translateY(-50%) translateZ(2000px);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
                clip-path: path('M0,0 L600,0 L600,500 L1400,500 L1400,0 L2000,0 L2000,2000 L0,2000 Z');
            }
            .gateBg {
                position: absolute;
                left: 50%;
                top: 0;
                width: 40%;
                height: 2000px;
                display: flex;
                justify-content: center;
                align-items: end;
                transform: translateZ(300px) translateY(100%) translateX(-50%);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
            }
        </style>
        <div class="tournamentGate">
            <div class="tournamentGate__content">
                <div class="tournamentGate__content__wrapper">
                    <div class="leftBg">
                    </div>
                    <div class="topBg">
                        <div class="screen">
                            <div class="screenTopBg">
                            </div>
                            <div class="screenBottomBg">
                            </div>
                            <div class="screenTopBg2">
                            </div>
                            <div class="screenBottomBg2">
                            </div>
                            <div class="screenTopBg3">
                            </div>
                            <div class="screenBottomBg3">
                            </div>
                        </div>
                    </div>
                    <div class="rightBg">
                    </div>
                    <div class="upBg">
                    </div>
                    <div class="frontBg">
                    </div>
                    <div class="gateBg">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('tournament-gate', TournamentGate);

function createtouranmentGate() {
    const tournamentGate = document.createElement('tournament-gate');
    const home = document.querySelector('.home');
    const bg = document.querySelector('background-component');

    tournamentGate.setAttribute('id', 'tournamentGate');
    
    document.body.appendChild(tournamentGate);
    document.body.removeChild(home);
    document.body.removeChild(bg);
}