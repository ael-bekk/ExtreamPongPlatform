class TournamentGate extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.__game1Winner = 0;
        this.__game2Winner = 0;
        this.__game3Winner = 0;
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
                background-image: url('./assets/images/tournamentGate/bg.jpeg');
                background-size: cover;
                perspective: 1000px;
                animation: start 4s linear forwards;
            }
            .tournamentGate > img {
                position: absolute;
                width: 100%;
                height: 100%;
                transform: rotate(180deg);
                opacity: 0.4;
                animation: showBgFlow 4s linear forwards;
            }
            @keyframes showBgFlow {
                0% {
                    transform: rotate(180deg) scale(0);
                }
                99% {
                    transform: rotate(180deg) scale(0);
                }
                100% {
                    transform: rotate(180deg) scale(1);
                }
            }
            @keyframes start {
                0% {
                    background-size: 100% 150%;
                    background-position: 50% 100%;
                }
                20% {
                    background-size: 100% 150%;
                    background-position: 50% 0%;
                }
                100% {
                    background-size: 100% 150%;
                    background-position: 50% 50%;
                }
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
                90% {
                    transform: rotateX(60deg) translateZ(300px) translateY(-15%) translateX(-50%);
                }
                100% {
                    transform: rotateX(65deg) translateZ(360px) translateY(-8%) translateX(-50%);
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
                transform-style: preserve-3d;
            }
            .upBg .osgardBg {
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                transform: translateY(50%) rotateX(-90deg) translateY(-30%);
                // transform: translateY(50%) rotateX(90deg) translateY(-50%);
            }
            .upBg .door {
                transform: translateY(51%) rotateX(-90deg) translateY(55%) scale(1.1);
                filter: drop-shadow(0 0 50px #edd136) hue-rotate(110deg) saturate(1000%);
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
                clip-path: path('M0,0 L600,0 L1000,0 L850,100 L750,200 L750,400 L850,500 L1000,500 L1150,500 L1250,400 L1250,200 L1150,100 L1000,0 L1400,0 L2000,0 L2000,2000 L0,2000 Z');
                transform-style: preserve-3d;
            }
            .frontBg .osgardBg {
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                transform: rotateX(180deg) translateY(121%);
            }
            .gateBg {
                position: absolute;
                left: 50%;
                top: 0;
                width: 40%;
                height: 2000px;
                background-color: #0009;
                transform: translateZ(300px) translateY(100%) translateX(-50%);
                background-image: url('./assets/images/tournamentGate/ground.svg');
                background-size: 100px 100px;
                transform-style: preserve-3d;
            }
            .gateBg span {
                position: absolute;
                width: 100px;
                height: 100%;
                left: 0;
                background-color: #0006;
                transform: translateX(-50%) rotateY(90deg) translateX(-50%);
                border: 5px solid #44FFFF;
            }
            .gateBg span:last-child {
                left: 100%;
                transform: translateX(-50%) rotateY(90deg) translateX(-50%);
            }

            .space {
                position: absolute;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 800px;
                height: 400px;
                background-color: #111a;
                transform-style: preserve-3d;
                transform: translateZ(20px);
            }
            .space1 {
                left: 0;
                top: 20%;
            }
            .space2 {
                right: 0;
                top: 20%;
            }
            .space3 {
                left: 50%;
                bottom: 20%;
                transform: translateX(-50%) translateZ(20px);
            }
            .space4 {
                width: 100px;
                height: 550px;
                left: 350px;
                top: 800px;
                // background-color: #0aa;
            }
            .space5 {
                width: 100px;
                height: 550px;
                right: 350px;
                top: 800px;
                // background-color: #0aa;
            }
            .space6 {
                width: 250px;
                height: 100px;
                left: 350px;
                bottom: 550px;
                // background-color: #0aa;
            }
            .space7 {
                width: 250px;
                height: 100px;
                right: 350px;
                bottom: 550px;
                // background-color: #0aa;
            }

            .corner {
                position: absolute;
                background-color: #aaa9;
                drop-filter: blur(10px);
                border: 1px solid #fff;
            }
            .cornerBottom {
                bottom: 0;
                left: 0;
                box-sizing: border-box;
                width: 100%;
                height: 20px;
                transform: translateY(50%) rotateX(-90deg) translateY(50%);
            }
            .cornerTop {
                top: 0;
                left: 0;
                box-sizing: border-box;
                width: 100%;
                height: 20px;
                transform: translateY(-50%) rotateX(90deg) translateY(-50%);
            }
            .cornerRight {
                bottom: 0;
                right: 0;
                box-sizing: border-box;
                width: 20px;
                height: 100%;
                transform: translateX(50%) rotateY(90deg) translateX(50%);
            }
            .cornerLeft {
                bottom: 0;
                left: 0;
                box-sizing: border-box;
                width: 20px;
                height: 100%;
                transform: translateX(-50%) rotateY(-90deg) translateX(-50%);
            }

            .chair {
                position: relative;
                width: 400px;
                height: 400px;
                border: #0aa 10px solid;
                box-sizing: border-box;
                transform-style: preserve-3d;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .seat {
                position: relative;
                width: 50%;
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
            }
            .seat img {
                position: absolute;
                width: 100%;
                height: 100%;
                transform: rotateY(180deg);
            }
            .seat #down {
                position: absolute;
                transform: translateZ(100px);
            }
            .seat #side {
                position: absolute;
                height: 50%;
                top: 0;
                transform: translateY(-50%) rotateX(-90deg) translateY(-50%);
            }
            .avatar {
                position: absolute;
                top: 600px;
                height: 100px;
                width: 100px;
                transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px));
                border: 1px solid #fff;
            }
            .avatar1 {
                left: 150px;
            }
            .avatar2 {
                left: 550px;
            }
            .avatar3 {
                right: 550px;
            }
            .avatar4 {
                right: 150px;
            }
            .turnLeft {
                animation: turnLeft 4s linear forwards;
            }
            .turnRight {
                animation: turnRight 4s linear forwards;
            }
            @keyframes turnLeft {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(-90deg);
                }
            }
            @keyframes turnRight {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(90deg);
                }
            }
            .space3  .chairLeft .seat {
                transform: rotate(90deg);
            }
            .space3  .chairRight .seat {
                transform: rotate(-90deg);
            }
            .semiFinaleLeft {
                animation: semiFinaleLeftA 10s linear forwards;
            }
            .semiFinaleLeft2 {
                animation: semiFinaleLeftA2 10s linear forwards;
            }
            .semiFinaleRight {
                animation: semiFinaleRightA 10s linear forwards;
            }
            .semiFinaleRight2 {
                animation: semiFinaleRightA2 10s linear forwards;
            }
            @keyframes semiFinaleLeftA {
                0% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(0deg);
                }
                40% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg);
                }
                50% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg);
                }
                60% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px);
                }
                70% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg);
                }
                80% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg) translateZ(400px);
                }
                100% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg) translateZ(400px) rotateY(180deg);
                }
            }
            @keyframes semiFinaleLeftA2 {
                0% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(0deg);
                }
                40% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg);
                }
                50% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg);
                }
                60% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px);
                }
                70% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg);
                }
                80% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg) translateZ(400px);
                }
                100% {
                    transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg) translateZ(400px) rotateY(-180deg);
                }
            }
        //     @keyframes semiFinaleRightA {
        //         0% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(0deg);
        //         }
        //         40% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg);
        //         }
        //         50% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg);
        //         }
        //         60% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px);
        //         }
        //         70% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg);
        //         }
        //         80% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg) translateZ(400px);
        //         }
        //         100% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(90deg) translateZ(400px) rotateY(180deg);
        //         }
        //     }
        //     @keyframes semiFinaleRightA2 {
        //         0% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(0deg);
        //         }
        //         40% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg);
        //         }
        //         50% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg);
        //         }
        //         60% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px);
        //         }
        //         70% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg);
        //         }
        //         80% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg) translateZ(400px);
        //         }
        //         100% {
        //             transform: translateY(-50%) rotateX(-90deg) translateY(calc(-50% - 20px)) rotateY(90deg) translateZ(200px) rotateY(-90deg) translateZ(800px) rotateY(-90deg) translateZ(400px) rotateY(-180deg);
        //         }
        //     }
        // </style>
        <div class="tournamentGate">
            <img src="assets/images/tournamentGate/frontGround1.gif" alt="Pong">
            <div class="tournamentGate__content">
                <div class="tournamentGate__content__wrapper">
                    <div class="leftBg"></div>
                    <div class="topBg">
                        <div class="screen">
                            <div class="screenTopBg"></div>
                            <div class="screenBottomBg"></div>
                            <div class="screenTopBg2"></div>
                            <div class="screenBottomBg2"></div>
                            <div class="screenTopBg3"></div>
                            <div class="screenBottomBg3"></div>
                        </div>
                    </div>
                    <div class="rightBg"></div>
                    <div class="upBg">
                        <div class="osgardBg">
                            <img src="assets/images/tournamentGate/osgard.svg" alt="Pong">
                        </div>
                        <div class="osgardBg door">
                            <img src="assets/images/tournamentGate/door.png" alt="Pong">
                        </div>
                    </div>
                    <div class="frontBg"> 
                        <div class="osgardBg">
                            <img src="assets/images/tournamentGate/osgard.svg" alt="Pong">
                        </div>
                    </div>
                    <div class="gateBg">
                        <span></span>
                        <span></span>
                    </div>
                    <div class="avatar avatar1"></div>
                    <div class="avatar avatar2"></div>
                    <div class="avatar avatar3"></div>
                    <div class="avatar avatar4"></div>
                </div>
            </div>
        </div>
        `;
        this.shadowRoot.querySelector('.tournamentGate__content__wrapper').innerHTML += `
            ${
                [1, 2, 3, 4, 5, 6, 7].map((el, indx) => `
                    <div class="space space${el}">
                        <div class="corner cornerBottom"></div>
                        <div class="corner cornerRight"></div>
                        <div class="corner cornerTop"></div> 
                        <div class="corner cornerLeft"></div>
                        ${
                            indx < 3 &&
                            `<div class="chair chairLeft">
                                <div class="seat">
                                    <img src="assets/images/tournamentGate/chair.svg" alt="Pong" id="up">
                                    <img src="assets/images/tournamentGate/chair2.svg" alt="Pong" id="side">
                                    <img src="assets/images/tournamentGate/chair3.svg" alt="Pong" id="down">
                                </div>
                            </div>
                            <div class="chair chairRight">
                                <div class="seat">
                                    <img src="assets/images/tournamentGate/chair.svg" alt="Pong" id="up">
                                    <img src="assets/images/tournamentGate/chair2.svg" alt="Pong" id="side">
                                    <img src="assets/images/tournamentGate/chair3.svg" alt="Pong" id="down">
                                </div>
                            </div>` ||
                            ''
                        }
                    </div>
                `).join('')
            }
        `;
        this.game1();
        this.game2();
    }
    game1() {
        if (this.__game1Winner === 0) {
            this.shadowRoot.querySelector('.space1 .chairLeft .seat').classList.add('turnLeft');
            this.shadowRoot.querySelector('.avatar1').classList.add('semiFinaleLeft');
        }
        else if (this.__game1Winner === 1) {
            this.shadowRoot.querySelector('.space1 .chairRight .seat').classList.add('turnRight');
            this.shadowRoot.querySelector('.avatar2').classList.add('semiFinaleRight');
        }

    }
    game2() {
        if (this.__game2Winner === 0) {
            this.shadowRoot.querySelector('.space2 .chairLeft .seat').classList.add('turnLeft');
            this.shadowRoot.querySelector('.avatar3').classList.add('semiFinaleLeft2');
        }
        else if (this.__game1Winner === 1) {
            this.shadowRoot.querySelector('.space2 .chairRight .seat').classList.add('turnRight');
            this.shadowRoot.querySelector('.avatar4').classList.add('semiFinaleRight2');
        }
    }
    game3() {
        if (this.__game2Winner === 0)
            this.shadowRoot.querySelector('.space3 .chairLeft .seat').classList.add('turnLeft');
        else if (this.__game2Winner === 1)
            this.shadowRoot.querySelector('.space3 .chairRight .seat').classList.add('turnRight');
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


