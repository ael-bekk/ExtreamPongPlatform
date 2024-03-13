class PopUpProfile extends HTMLElement {
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
        .popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .popup img {
            position: absolute;
            width: 100px;
            bottom: 200px;
            left: 50%;
            transform: translateX(-5%);
            z-index: 1001;
        }
        .popup-inner {
            position: relative;
            width: 90%;
            height: 60%;
            max-width: 1300px;
            // background-color: #fff;
            padding: 20px;
            border-radius: 5px;
        }
        .popup-inner svg {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            // border: 1px solid #f00;
            animation: pathDraw 8s;
        }
        @keyframes pathDraw {
            from {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
            }
            to {
                stroke-dasharray: 1000;
                stroke-dashoffset: 0;
            }
        }
        .popup-inner .avatar {
            position: relative;
            width: 300px;
            height: 224px;
            margin-bottom: 20px;
            border-radius: 50px;
            top: 90px;
            overflow: hidden;
            // border: 1px solid #24C2E5;
            left: 150px;
            z-index: 1;
            animation: animateShadow 2s infinite;
        }
        @keyframes animateShadow {
            0% {
                box-shadow: 0 0 10px 3px #24C2E5,
                0 0 10px 10px #24C2E5 inset;
            }
            50% {
                box-shadow: 0 0 8px 0px #24C2E5;
            }
            100% {
                box-shadow: 0 0 10px 3px #24C2E5,
                0 0 10px 10px #24C2E5 inset;
            }
        }
        .popup-inner .avatar span#gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #24C2E500 0%, #24C2E5aa 100%);
            animation: moveGradient 5s infinite linear;
        }
        .popup-inner .avatar span#gradient::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background: #24C2E5;
            box-shadow: 0 0 10px 5px #24C2E5;
            top: 0;
            left: 100%;
            animation: moveLine 8s infinite linear;
        }
        @keyframes moveLine {
            0% {
                right: -400%;
            }
            70% {
                right: 20%;
            }
            100% {
                right: 100%;
            }
        }
        @keyframes moveGradient {
            0% {
                left: -400%;
            }
            70% {
                left: 20%;
            }
            100% {
                left: 100%;
            }
        }
        .popup-inner .avatar h2 {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 25%);
            color: #24C2E5;
            font-size: 24px;
            font-weight: 600;
            z-index: 2;
            text-shadow: 0 0 10px #24C2E5;
        }
        .popup-inner .avatar img {
            position: absolute;
            width: 120%;
            // border-radius: 50%;
            top: 50%;
            left: 50%;
            opacity: 0.8;
            transform: translate(-50%, -50%);
            z-index: -1;
        }
        .popup-inner .avatar img:nth-child(2) {
            position: absolute;
            width: 110px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            box-shadow: 0 0 5px 1px #24C2E5;
            border-radius: 50%;
            border: 1px solid #24C2E5;
        }
        </style>
        <div class="popup">
            <img src="./assets/images/tenor.gif">
            <div class="popup-inner">
                <svg viewBox="0 0 672 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#drop-shadow)">    
                    <path d="M339 1.5H331L328 7.5H63L23 47.5V194.5L39 204.5V230.5L23 241.5V390.5L63 430.5H608L648 390.5V240.5L632 230.5V203.5L648 192V47.5L608 7.5H385L382 1.5H374L373 0H339.5L339 1.5Z" fill="#f0f5" fill-opacity="0.49"/>
                    <path d="M17.5 194.5V177.5H19.5V194.5H17.5Z" fill="#a0a9"/>
                    <path d="M19.5 240H17.5V258H19.5V240Z" fill="#a0a9"/>
                    <path d="M1 122.5L14.5 114V120L1 128.5V122.5Z" fill="#a0a9"/>
                    <path d="M1 133L14.5 124.5V130.5L1 139V133Z" fill="#a0a9"/>
                    <path d="M1 143.5L14.5 135V141L1 149.5V143.5Z" fill="#a0a9"/>
                    <path d="M1 154L14.5 145.5V151.5L1 160V154Z" fill="#a0a9"/>
                    <path d="M1 165L14.5 156.5V162.5L1 171V165Z" fill="#a0a9"/>
                    <path d="M1 175.5L14.5 167V173L1 181.5V175.5Z" fill="#a0a9"/>
                    <path d="M1 186L14.5 177.5V183.5L1 192V186Z" fill="#a0a9"/>
                    <path d="M1 196.5L14.5 188V194L1 202.5V196.5Z" fill="#a0a9"/>
                    <path d="M1 239.5V233L14 241.5V248L1 239.5Z" fill="#a0a9"/>
                    <path d="M1 250V243.5L14 252V258.5L1 250Z" fill="#a0a9"/>
                    <path d="M1 260.5V254L14 262.5V269L1 260.5Z" fill="#a0a9"/>
                    <path d="M1 271V264.5L14 273V279.5L1 271Z" fill="#a0a9"/>
                    <path d="M1 281.5V275L14 283.5V290L1 281.5Z" fill="#a0a9"/>
                    <path d="M1 292V285.5L14 294V300.5L1 292Z" fill="#a0a9"/>
                    <path d="M1 302.5V296L14 304.5V311L1 302.5Z" fill="#a0a9"/>
                    <path d="M1 312.5V306L14 314.5V321L1 312.5Z" fill="#a0a9"/>
                    <path d="M12 113L17.5 109V194.5H19.5V177.5H17.5M12 321.5L17.5 325V258M17.5 258V240H19.5V258H17.5ZM14.5 114L1 122.5V128.5L14.5 120V114ZM14.5 124.5L1 133V139L14.5 130.5V124.5ZM14.5 135L1 143.5V149.5L14.5 141V135ZM14.5 145.5L1 154V160L14.5 151.5V145.5ZM14.5 156.5L1 165V171L14.5 162.5V156.5ZM14.5 167L1 175.5V181.5L14.5 173V167ZM14.5 177.5L1 186V192L14.5 183.5V177.5ZM14.5 188L1 196.5V202.5L14.5 194V188ZM1 233V239.5L14 248V241.5L1 233ZM1 243.5V250L14 258.5V252L1 243.5ZM1 254V260.5L14 269V262.5L1 254ZM1 264.5V271L14 279.5V273L1 264.5ZM1 275V281.5L14 290V283.5L1 275ZM1 285.5V292L14 300.5V294L1 285.5ZM1 296V302.5L14 311V304.5L1 296ZM1 306V312.5L14 321V314.5L1 306Z" stroke="#24c2e5aa"/>
                    <path d="M653 194.5H654.5V178H653V194.5Z" fill="#a0a9"/>
                    <path d="M653 194.5H654.5V178H653V194.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M653 241.5H654.5V258H653V241.5Z" fill="#a0a9"/>
                    <path d="M653 241.5H654.5V258H653V241.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 120.5V114L671 122.5V128.5L657.5 120.5Z" fill="#a0a9"/>
                    <path d="M657.5 120.5V114L671 122.5V128.5L657.5 120.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 138.5L657.5 130.5V124L671 132.5V138.5Z" fill="#a0a9"/>
                    <path d="M671 138.5L657.5 130.5V124L671 132.5V138.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 149.5L657.5 141.5V135L671 143.5V149.5Z" fill="#a0a9"/>
                    <path d="M671 149.5L657.5 141.5V135L671 143.5V149.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 160L657.5 152V145.5L671 154V160Z" fill="#a0a9"/>
                    <path d="M671 160L657.5 152V145.5L671 154V160Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 170.5L657.5 162.5V156L671 164.5V170.5Z" fill="#a0a9"/>
                    <path d="M671 170.5L657.5 162.5V156L671 164.5V170.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 181L657.5 173V166.5L671 175V181Z" fill="#a0a9"/>
                    <path d="M671 181L657.5 173V166.5L671 175V181Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 191.5L657.5 183.5V177L671 185.5V191.5Z" fill="#a0a9"/>
                    <path d="M671 191.5L657.5 183.5V177L671 185.5V191.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M671 202L657.5 194V187.5L671 196V202Z" fill="#a0a9"/>
                    <path d="M671 202L657.5 194V187.5L671 196V202Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 241.5L671 233.5V239.5L657.5 248V241.5Z" fill="#a0a9"/>
                    <path d="M657.5 241.5L671 233.5V239.5L657.5 248V241.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 252L671 244V250L657.5 258.5V252Z" fill="#a0a9"/>
                    <path d="M657.5 252L671 244V250L657.5 258.5V252Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 262.5L671 254.5V260.5L657.5 269V262.5Z" fill="#a0a9"/>
                    <path d="M657.5 262.5L671 254.5V260.5L657.5 269V262.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 273L671 265V271L657.5 279.5V273Z" fill="#a0a9"/>
                    <path d="M657.5 273L671 265V271L657.5 279.5V273Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 283.5L671 275.5V281.5L657.5 290V283.5Z" fill="#a0a9"/>
                    <path d="M657.5 283.5L671 275.5V281.5L657.5 290V283.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 294.5L671 286.5V292.5L657.5 301V294.5Z" fill="#a0a9"/>
                    <path d="M657.5 294.5L671 286.5V292.5L657.5 301V294.5Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 305L671 297V303L657.5 311.5V305Z" fill="#a0a9"/>
                    <path d="M657.5 305L671 297V303L657.5 311.5V305Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M657.5 315L671 307V313L657.5 321.5V315Z" fill="#a0a9"/>
                    <path d="M657.5 315L671 307V313L657.5 321.5V315Z" fill="#a0a9" fill-opacity="0.2"/>
                    <path d="M660.5 113L654.5 109V178M654.5 178V194.5H653V178H654.5ZM660.5 321.5L654.5 325V258M654.5 258V241.5H653V258H654.5ZM657.5 114V120.5L671 128.5V122.5L657.5 114ZM657.5 124L671 132.5V138.5L657.5 130.5V124ZM657.5 135L671 143.5V149.5L657.5 141.5V135ZM657.5 145.5L671 154V160L657.5 152V145.5ZM657.5 156L671 164.5V170.5L657.5 162.5V156ZM657.5 166.5L671 175V181L657.5 173V166.5ZM657.5 177L671 185.5V191.5L657.5 183.5V177ZM657.5 187.5L671 196V202L657.5 194V187.5ZM671 233.5L657.5 241.5V248L671 239.5V233.5ZM671 244L657.5 252V258.5L671 250V244ZM671 254.5L657.5 262.5V269L671 260.5V254.5ZM671 265L657.5 273V279.5L671 271V265ZM671 275.5L657.5 283.5V290L671 281.5V275.5ZM671 286.5L657.5 294.5V301L671 292.5V286.5ZM671 297L657.5 305V311.5L671 303V297ZM671 307L657.5 315V321.5L671 313V307Z" stroke="#24c2e5aa"/>
                    <path d="M339 0.5H345V1.5H338.5H331.5L323.5 15.5V17H278L276.5 15.5H223H215H208.5H200.5H193L191 17H187L185.5 15.5H193H200.5H208.5H215H223H276.5H323.5L331.5 1.5H338.5L339 0.5Z" fill="none"/>
                    <path d="M368 1.5V0.5H374V1.5H382L389.5 15.5H437H490H498H505.5H513.5H520.5H528L526.5 17H522L520.5 15.5H513.5H505.5H498H490H437L435 17H389.5V15.5L382 1.5H374H368Z" fill="none"/>
                    <path d="M75.5 46H78H540.5H543V56.5H540.5V46H78V56.5H75.5V46Z" fill="none"/>
                    <path d="M68 382H71.5V369.5H68V382Z" fill="none"/>
                    <path d="M85 335.5V333.5H103V335.5H85Z" fill="none"/>
                    <path d="M95 328.5H85V331.5H95V328.5Z" fill="none"/>
                    <path d="M97 331.5V328.5H106V331.5H97Z" fill="none"/>
                    <path d="M108 331.5V328.5H118V331.5H108Z" fill="none"/>
                    <path d="M120 331.5V328.5H130V331.5H120Z" fill="none"/>
                    <path d="M54 321L58 326L54 331.5L49.5 326L54 321Z" fill="none"/>
                    <path d="M339 438V436.5H331L323.5 422.5H276.5H222.5H214.5H207.5H200H192H185L186.5 420.5H191L192 422.5H200H207.5H214.5H222.5H276.5L278 420.5H323.5V422.5L331 436.5H339H345V438H339Z" fill="none"/>
                    <path d="M374 436.5V438H368V436.5H374H382.236L389 422.5V420.5H435.5L437 422.5H489.5H498H505.5H513.5H520.5L522 420.5H526.5L527.5 422.5H520.5H513.5H505.5H498H489.5H437H389L382.236 436.5H374Z" fill="none"/>
                    <path d="M23 182.5V47.5L63 7.5H321.5M389.5 7.5H608L648 47.5V182.5M648 254.5V390.5L608 430.5H389M322 430.5H63L23 390.5V255M338.5 1.5L339 0.5H345V1.5H338.5ZM338.5 1.5H331.5L323.5 15.5M323.5 15.5H276.5M323.5 15.5V17H278L276.5 15.5M185.5 15.5L181.5 19.5M185.5 15.5L187 17H191L193 15.5M185.5 15.5H193M193 15.5H200.5M194.5 17H199L200.5 15.5M200.5 15.5H208.5M202.5 17H207L208.5 15.5M208.5 15.5H215M210 17H213.5L215 15.5M215 15.5H223M217 17H221.5L223 15.5M223 15.5H276.5M374 1.5H368V0.5H374V1.5ZM374 1.5H382L389.5 15.5M389.5 15.5H437M389.5 15.5V17H435L437 15.5M520.5 15.5H528L526.5 17H522L520.5 15.5ZM520.5 15.5H513.5M519 17H515.5L513.5 15.5M513.5 15.5H505.5M512 17H507.5L505.5 15.5M505.5 15.5H498M504 17H499.5L498 15.5M498 15.5H490M496.5 17H491.5L490 15.5M490 15.5H437M75.5 46H78V56.5H75.5V46ZM75.5 46H540.5M540.5 46H543V56.5H540.5V46ZM535 52.5H364.5M535 54.5H522M362 62.5H134.5M71.5 211.5V369.5M71.5 369.5V382H68V369.5H71.5ZM131.5 333.5H103M103 333.5H85V335.5H103V333.5ZM77.5 348.5H369.5M378 314V386M375 375V386M65.5 326H58M58 326L54 321L49.5 326L54 331.5L58 326ZM387.5 348.5H543.5M567.5 97.5L597.5 67V128.5M602 66V77.5M602 129.5V77.5M602 77.5H624M597.5 288.5V351L558.5 312M602 288.5V298.5M602 351V298.5M602 298.5H624M339 436.5V438H345V436.5H331L323.5 422.5M323.5 422.5H276.5M323.5 422.5V420.5H278L276.5 422.5M185 422.5L182 419M185 422.5L186.5 420.5H191L192 422.5M185 422.5H192M192 422.5H200M194.5 420.5H198.5L200 422.5M200 422.5H207.5M202 420.5H206.5L207.5 422.5M207.5 422.5H214.5M209.5 420.5H213.5L214.5 422.5M214.5 422.5H222.5M216.5 420.5H221L222.5 422.5M222.5 422.5H276.5M374 436.5V438H368V436.5H382.236L389 422.5M389 422.5H437M389 422.5V420.5H435.5L437 422.5M527.5 422.5L532.5 417.5M527.5 422.5L526.5 420.5H522L520.5 422.5M527.5 422.5H520.5M520.5 422.5H513.5M518.5 420.5H514.5L513.5 422.5M513.5 422.5H505.5M511 420.5H507L505.5 422.5M505.5 422.5H498M503.5 420.5H499L498 422.5M498 422.5H489.5M496 420.5H491L489.5 422.5M489.5 422.5H437M656 200L641 208.5V226L656 235L671 226V208.5L656.5 200M16 200L1 208.5V226L16 235L31 226V208.5L16.5 200M85 328.5H95V331.5H85V328.5ZM97 328.5V331.5H106V328.5H97ZM108 328.5V331.5H118V328.5H108ZM120 328.5V331.5H130V328.5H120Z" stroke="#24c2e5"/>
                    <path d="M652 215.5L656 212.5L660 215.5V219.5L656 222.5L652 219.5V215.5Z" fill="#24C2E5" fill-opacity="0.49"/>
                    <path d="M12 215.5L16 212.5L20 215.5V219.5L16 222.5L12 219.5V215.5Z" fill="#24C2E5" fill-opacity="0.49"/>
                    <path d="M648 209.5L656 204.5L664 209.5M664 225.5L656 230.5L648 225.5M8 209.5L16 204.5L24 209.5M24 225.5L16 230.5L8 225.5M656 212.5L652 215.5V219.5L656 222.5L660 219.5V215.5L656 212.5ZM16 212.5L12 215.5V219.5L16 222.5L20 219.5V215.5L16 212.5Z" stroke="#24c2e535"/>
                    <circle cx="36.5" cy="55" r="3" fill="#f00"/>
                    </g>
                    <defs>
                        <filter id="drop-shadow" x="0%" y="0%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#24C2E5" flood-opacity="1">
                                <animate attributeName="stdDeviation" values="1;3;1" dur="1s" repeatCount="indefinite"/>
                                <animate attributeName="color" values="#24C2E5;#24C2E5;#24C2E5" dur="1s" repeatCount="indefinite"/>
                            </feDropShadow>
                        </filter>
                    </defs>
                </svg>
                <div class="avatar">
                    <img src="./assets/images/bg3.gif">
                    <img src="./assets/images/devCard/avatar3.svg">
                    <h2>@hmaad</h2>
                    <span id="gradient"></span>
                </div>
                </div>
                </div>
                `;
            }
        }
        
        // <h2>${id}</h2>
        // <p>Some text</p>
        // <button onclick="document.querySelector('popup-profile').remove()">Close</button>

customElements.define('popup-profile', PopUpProfile);

function openProfilePopup(id) {

  const popup = document.createElement('popup-profile');
  popup.setAttribute('id', id);
  document.body.appendChild(popup);
}