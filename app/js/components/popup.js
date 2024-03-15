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
        .popup > img {
            position: absolute;
            width: 100px;
            bottom: 180px;
            left: 50%;
            z-index: 1001;
            animation: animateScale 2s infinite;
        }
        @keyframes animateScale {
            0% {
                transform: translateX(-45%) scale(1);
            }
            50% {
                transform: translateX(-45%) scale(1.5);
            }
            100% {
                transform: translateX(-45%) scale(1);
            }
        }
        .popup-inner {
            position: relative;
            width: 90%;
            height: 60%;
            max-width: 1300px;
            // background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            animation: animatePopup 1s;
        }
        @keyframes animatePopup {
            0% {
                height: 0;
            }
            100% {
                height: 60%;
            }
        }
        .popup-inner svg {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            // border: 1px solid #f00;
            animation: pathDraw 4s;
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
            width: 230px;
            height: 160px;
            margin-bottom: 20px;
            border-radius: 10px;
            top: 0;
            left: 50%;
            transform: translate(-49.7%, -137%);
            overflow: hidden;
            // border: 1px solid #24C2E5;
            z-index: -1;
            border : 1px solid #24C2E5;
            animation: animateShadow 2s infinite;
        }
        svg#avBg {
            position: absolute;
            width: 300px;
            height: 224px;
            top: 0;
            left: 50%;
            transform: translate(-50%, -100%);
        }
        @keyframes animateShadow {
            0% {
                box-shadow: 0 0 10px 3px #aaa,
                0 0 10px 10px #aaa inset;
            }
            50% {
                box-shadow: 0 0 8px 0px #aaa;
            }
            100% {
                box-shadow: 0 0 10px 3px #aaa,
                0 0 10px 10px #aaa inset;
            }
        }
        .popup-inner .avatar span#gradient {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #aaaaaa00 0%, #aaaaaaaa 100%);
            animation: moveGradient 5s infinite linear;
        }
        .popup-inner .avatar span#gradient::before {
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background: #aaa;
            box-shadow: 0 0 10px 5px #aaa;
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
            transform: translate(-50%, 50%);
            color: #00FFF0;
            font-size: 20px;
            font-weight: 600;
            z-index: 2;
            text-shadow: 0 0 10px #00FFF0;
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
            width: 85px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            box-shadow: 0 0 5px 1px #24C2E5;
            border-radius: 50%;
        }
        .popup-inner .follow {
            position: absolute;
            width: 200px;
            height: 50px;
            bottom: 125px;
            left: 160px;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }
        .popup-inner .follow-inner {
            position: relative;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            overflow: hidden;
            cursor: pointer;
            color: #fff;
            text-shadow: 0 0 3px #24C2E5,
                         0 0 5px #24C2E5,
                         0 0 7px #24C2E5,
                         0 0 10px #24C2E5,
                         0 0 15px #24C2E5;
        }
        .popup-inner .follow:hover svg {
            animation: followBg 1s infinite;
        }
        .popup-inner .follow:hover .follow-inner {
            animation: followText 1s infinite;
            text-shadow: 0 0 5px #fff;
        }
        .popup-inner .follow:hover svg {
            filter: url(#drop-shadow);
        }
        .popup-inner .follow:hover followText {
            filter: url(#drop-shadow);
        }
        @keyframes followText {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: translateY(0);
            }
        }
        .popup-inner .follow:active .follow-inner {
            transition: 0s;
            transform: scale(0.9);
            animation: none;
        }
        
        .popup-inner #followBg {
            position: absolute;
            width: 200px;
            top: 0;
            left: 0;
            transform: scaleY(.5) translateY(-50%);
        }
        .popup-inner .friends {
            position: absolute;
            width: 400px;
            height: 550px;
            top: 100px;
            right: 200px;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }
        .popup-inner .friends svg#bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: translateY(0%);
        }
        .popup-inner .statistics {
            position: absolute;
            width: 500px;
            height: 200px;
            top: 110px;
            left: 200px;
            border-radius: 5px;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }


        </style>
        <div class="popup">
            <img src="./assets/images/tenor.gif">
            <div class="popup-inner">
                <svg viewBox="0 0 672 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#drop-shadow)">    
                <path d="M319 1.5H311L308 7.5H63L23 47.5V194.5L39 204.5V230.5L23 241.5V390.5L63 430.5H608L648 390.5V240.5L632 230.5V203.5L648 192V47.5L608 7.5H365L362 1.5H354L353 0H319.5L319 1.5Z" fill="#24C2E500" fill-opacity="0.49"/>
                <path d="M17.5 194.5V177.5H19.5V194.5H17.5Z" fill="#000"/>
                <path d="M19.5 240H17.5V258H19.5V240Z" fill="#000"/>
                <path d="M1 122.5L14.5 114V120L1 128.5V122.5Z" fill="#000"/>
                <path d="M1 133L14.5 124.5V130.5L1 139V133Z" fill="#000"/>
                <path d="M1 143.5L14.5 135V141L1 149.5V143.5Z" fill="#000"/>
                <path d="M1 154L14.5 145.5V151.5L1 160V154Z" fill="#000"/>
                <path d="M1 165L14.5 156.5V162.5L1 171V165Z" fill="#000"/>
                <path d="M1 175.5L14.5 167V173L1 181.5V175.5Z" fill="#000"/>
                <path d="M1 186L14.5 177.5V183.5L1 192V186Z" fill="#000"/>
                <path d="M1 196.5L14.5 188V194L1 202.5V196.5Z" fill="#000"/>
                <path d="M1 239.5V233L14 241.5V248L1 239.5Z" fill="#000"/>
                <path d="M1 250V243.5L14 252V258.5L1 250Z" fill="#000"/>
                <path d="M1 260.5V254L14 262.5V269L1 260.5Z" fill="#000"/>
                <path d="M1 271V264.5L14 273V279.5L1 271Z" fill="#000"/>
                <path d="M1 281.5V275L14 283.5V290L1 281.5Z" fill="#000"/>
                <path d="M1 292V285.5L14 294V300.5L1 292Z" fill="#000"/>
                <path d="M1 302.5V296L14 304.5V311L1 302.5Z" fill="#000"/>
                <path d="M1 312.5V306L14 314.5V321L1 312.5Z" fill="#000"/>
                <path d="M12 113L17.5 109V194.5H19.5V177.5H17.5M12 321.5L17.5 325V258M17.5 258V240H19.5V258H17.5ZM14.5 114L1 122.5V128.5L14.5 120V114ZM14.5 124.5L1 133V139L14.5 130.5V124.5ZM14.5 135L1 143.5V149.5L14.5 141V135ZM14.5 145.5L1 154V160L14.5 151.5V145.5ZM14.5 156.5L1 165V171L14.5 162.5V156.5ZM14.5 167L1 175.5V181.5L14.5 173V167ZM14.5 177.5L1 186V192L14.5 183.5V177.5ZM14.5 188L1 196.5V202.5L14.5 194V188ZM1 233V239.5L14 248V241.5L1 233ZM1 243.5V250L14 258.5V252L1 243.5ZM1 254V260.5L14 269V262.5L1 254ZM1 264.5V271L14 279.5V273L1 264.5ZM1 275V281.5L14 290V283.5L1 275ZM1 285.5V292L14 300.5V294L1 285.5ZM1 296V302.5L14 311V304.5L1 296ZM1 306V312.5L14 321V314.5L1 306Z" stroke="#aaa"/>
                <path d="M653 194.5H654.5V178H653V194.5Z" fill="#001"/>
                <path d="M653 194.5H654.5V178H653V194.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M653 241.5H654.5V258H653V241.5Z" fill="#001"/>
                <path d="M653 241.5H654.5V258H653V241.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 120.5V114L671 122.5V128.5L657.5 120.5Z" fill="#001"/>
                <path d="M657.5 120.5V114L671 122.5V128.5L657.5 120.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 138.5L657.5 130.5V124L671 132.5V138.5Z" fill="#001"/>
                <path d="M671 138.5L657.5 130.5V124L671 132.5V138.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 149.5L657.5 141.5V135L671 143.5V149.5Z" fill="#001"/>
                <path d="M671 149.5L657.5 141.5V135L671 143.5V149.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 160L657.5 152V145.5L671 154V160Z" fill="#001"/>
                <path d="M671 160L657.5 152V145.5L671 154V160Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 170.5L657.5 162.5V156L671 164.5V170.5Z" fill="#001"/>
                <path d="M671 170.5L657.5 162.5V156L671 164.5V170.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 181L657.5 173V166.5L671 175V181Z" fill="#001"/>
                <path d="M671 181L657.5 173V166.5L671 175V181Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 191.5L657.5 183.5V177L671 185.5V191.5Z" fill="#001"/>
                <path d="M671 191.5L657.5 183.5V177L671 185.5V191.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M671 202L657.5 194V187.5L671 196V202Z" fill="#001"/>
                <path d="M671 202L657.5 194V187.5L671 196V202Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 241.5L671 233.5V239.5L657.5 248V241.5Z" fill="#001"/>
                <path d="M657.5 241.5L671 233.5V239.5L657.5 248V241.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 252L671 244V250L657.5 258.5V252Z" fill="#001"/>
                <path d="M657.5 252L671 244V250L657.5 258.5V252Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 262.5L671 254.5V260.5L657.5 269V262.5Z" fill="#001"/>
                <path d="M657.5 262.5L671 254.5V260.5L657.5 269V262.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 273L671 265V271L657.5 279.5V273Z" fill="#001"/>
                <path d="M657.5 273L671 265V271L657.5 279.5V273Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 283.5L671 275.5V281.5L657.5 290V283.5Z" fill="#001"/>
                <path d="M657.5 283.5L671 275.5V281.5L657.5 290V283.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 294.5L671 286.5V292.5L657.5 301V294.5Z" fill="#001"/>
                <path d="M657.5 294.5L671 286.5V292.5L657.5 301V294.5Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 305L671 297V303L657.5 311.5V305Z" fill="#001"/>
                <path d="M657.5 305L671 297V303L657.5 311.5V305Z" fill="black" fill-opacity="0.2"/>
                <path d="M657.5 315L671 307V313L657.5 321.5V315Z" fill="#001"/>
                <path d="M657.5 315L671 307V313L657.5 321.5V315Z" fill="black" fill-opacity="0.2"/>
                <path d="M660.5 113L654.5 109V178M654.5 178V194.5H653V178H654.5ZM660.5 321.5L654.5 325V258M654.5 258V241.5H653V258H654.5ZM657.5 114V120.5L671 128.5V122.5L657.5 114ZM657.5 124L671 132.5V138.5L657.5 130.5V124ZM657.5 135L671 143.5V149.5L657.5 141.5V135ZM657.5 145.5L671 154V160L657.5 152V145.5ZM657.5 156L671 164.5V170.5L657.5 162.5V156ZM657.5 166.5L671 175V181L657.5 173V166.5ZM657.5 177L671 185.5V191.5L657.5 183.5V177ZM657.5 187.5L671 196V202L657.5 194V187.5ZM671 233.5L657.5 241.5V248L671 239.5V233.5ZM671 244L657.5 252V258.5L671 250V244ZM671 254.5L657.5 262.5V269L671 260.5V254.5ZM671 265L657.5 273V279.5L671 271V265ZM671 275.5L657.5 283.5V290L671 281.5V275.5ZM671 286.5L657.5 294.5V301L671 292.5V286.5ZM671 297L657.5 305V311.5L671 303V297ZM671 307L657.5 315V321.5L671 313V307Z" stroke="#aaa"/>
                <path d="M319 0.5H325V1.5H318.5H311.5L303.5 15.5V17H258L256.5 15.5H203H195H188.5H180.5H173L171 17H167L165.5 15.5H173H180.5H188.5H195H203H256.5H303.5L311.5 1.5H318.5L319 0.5Z" fill="#000"/>
                <path d="M348 1.5V0.5H354V1.5H362L369.5 15.5H417H470H478H485.5H493.5H500.5H508L506.5 17H502L500.5 15.5H493.5H485.5H478H470H417L415 17H369.5V15.5L362 1.5H354H348Z" fill="#000"/>
                <path d="M75.5 46H78H540.5H543V56.5H540.5V46H78V56.5H75.5V46Z" fill="#000"/>
                <path d="M68 382H71.5V369.5H68V382Z" fill="#000"/>
                <path d="M85 335.5V333.5H103V335.5H85Z" fill="#000"/>
                <path d="M95 328.5H85V331.5H95V328.5Z" fill="#000"/>
                <path d="M97 331.5V328.5H106V331.5H97Z" fill="#000"/>
                <path d="M108 331.5V328.5H118V331.5H108Z" fill="#000"/>
                <path d="M120 331.5V328.5H130V331.5H120Z" fill="#000"/>
                <path d="M54 321L58 326L54 331.5L49.5 326L54 321Z" fill="#000"/>
                <path d="M319 438V436.5H311L303.5 422.5H256.5H202.5H194.5H187.5H180H172H165L166.5 420.5H171L172 422.5H180H187.5H194.5H202.5H256.5L258 420.5H303.5V422.5L311 436.5H319H325V438H319Z" fill="#000"/>
                <path d="M354 436.5V438H348V436.5H354H362.236L369 422.5V420.5H415.5L417 422.5H469.5H478H485.5H493.5H500.5L502 420.5H506.5L507.5 422.5H500.5H493.5H485.5H478H469.5H417H369L362.236 436.5H354Z" fill="#000"/>
                <path d="M23 182.5V47.5L63 7.5H301.5M369.5 7.5H608L648 47.5V182.5M648 254.5V390.5L608 430.5H369M302 430.5H63L23 390.5V255M318.5 1.5L319 0.5H325V1.5H318.5ZM318.5 1.5H311.5L303.5 15.5M303.5 15.5H256.5M303.5 15.5V17H258L256.5 15.5M165.5 15.5L161.5 19.5M165.5 15.5L167 17H171L173 15.5M165.5 15.5H173M173 15.5H180.5M174.5 17H179L180.5 15.5M180.5 15.5H188.5M182.5 17H187L188.5 15.5M188.5 15.5H195M190 17H193.5L195 15.5M195 15.5H203M197 17H201.5L203 15.5M203 15.5H256.5M354 1.5H348V0.5H354V1.5ZM354 1.5H362L369.5 15.5M369.5 15.5H417M369.5 15.5V17H415L417 15.5M500.5 15.5H508L506.5 17H502L500.5 15.5ZM500.5 15.5H493.5M499 17H495.5L493.5 15.5M493.5 15.5H485.5M492 17H487.5L485.5 15.5M485.5 15.5H478M484 17H479.5L478 15.5M478 15.5H470M476.5 17H471.5L470 15.5M470 15.5H417M75.5 46H78V56.5H75.5V46ZM75.5 46H540.5M540.5 46H543V56.5H540.5V46ZM535 52.5H364.5M535 54.5H522M362 62.5H134.5M71.5 211.5V369.5M71.5 369.5V382H68V369.5H71.5ZM131.5 333.5H103M103 333.5H85V335.5H103V333.5ZM77.5 370.5H369.5M378 336V408M375 397V408M65.5 326H58M58 326L54 321L49.5 326L54 331.5L58 326ZM387.5 370.5H543.5M581.5 97.5L611.5 67V128.5M616 66V77.5M616 129.5V77.5M616 77.5H638M611.5 288.5V351L572.5 312M616 288.5V298.5M616 351V298.5M616 298.5H638M319 436.5V438H325V436.5H311L303.5 422.5M303.5 422.5H256.5M303.5 422.5V420.5H258L256.5 422.5M165 422.5L162 419M165 422.5L166.5 420.5H171L172 422.5M165 422.5H172M172 422.5H180M174.5 420.5H178.5L180 422.5M180 422.5H187.5M182 420.5H186.5L187.5 422.5M187.5 422.5H194.5M189.5 420.5H193.5L194.5 422.5M194.5 422.5H202.5M196.5 420.5H201L202.5 422.5M202.5 422.5H256.5M354 436.5V438H348V436.5H362.236L369 422.5M369 422.5H417M369 422.5V420.5H415.5L417 422.5M507.5 422.5L512.5 417.5M507.5 422.5L506.5 420.5H502L500.5 422.5M507.5 422.5H500.5M500.5 422.5H493.5M498.5 420.5H494.5L493.5 422.5M493.5 422.5H485.5M491 420.5H487L485.5 422.5M485.5 422.5H478M483.5 420.5H479L478 422.5M478 422.5H469.5M476 420.5H471L469.5 422.5M469.5 422.5H417M656 200L641 208.5V226L656 235L671 226V208.5L656.5 200M16 200L1 208.5V226L16 235L31 226V208.5L16.5 200M85 328.5H95V331.5H85V328.5ZM97 328.5V331.5H106V328.5H97ZM108 328.5V331.5H118V328.5H108ZM120 328.5V331.5H130V328.5H120Z" stroke="#aaa"/>
                <path d="M652 215.5L656 212.5L660 215.5V219.5L656 222.5L652 219.5V215.5Z" fill="#24C2E5" fill-opacity="0.49"/>
                <path d="M12 215.5L16 212.5L20 215.5V219.5L16 222.5L12 219.5V215.5Z" fill="#24C2E5" fill-opacity="0.49"/>
                <path d="M648 209.5L656 204.5L664 209.5M664 225.5L656 230.5L648 225.5M8 209.5L16 204.5L24 209.5M24 225.5L16 230.5L8 225.5M656 212.5L652 215.5V219.5L656 222.5L660 219.5V215.5L656 212.5ZM16 212.5L12 215.5V219.5L16 222.5L20 219.5V215.5L16 212.5Z" stroke="#aaa"/>
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
                <svg id="avBg" width="307" height="261" viewBox="0 0 307 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.9922 2H150.492M157.992 2H193.992M197.992 2H209.492M214.992 2H221.992M226.992 2H230.992M235.992 2H238.992M244.492 2H247.492M252.992 2H255.492M261.992 2H263.992" stroke="#377E7A" stroke-width="3"/>
                    <path d="M195 250V249H205V250M195 250V251H205V250M195 250H205M96 244V256H210V244H191H96ZM96 259H210V260H96V259ZM191 245V255H209V245H191ZM192 246V254H208V246H192ZM193 253V247H207V253H193ZM194 248V252H206V248H194Z" stroke="#377E7A"/>
                    <path d="M38.9922 232H257.492M38.9922 7H267.992" stroke="#00FFE0"/>
                    <path d="M28.5042 6.5C28.5042 6.5 28.5081 6.5001 24.0042 6.5C19.5003 6.4999 16.2617 7.08989 12.5042 9C10.6214 9.9571 9.57953 10.5932 8.00419 12C6.13908 13.6656 5.1415 14.773 4.00419 17C3.16145 18.6502 2.91514 19.6941 2.50028 21.5C2.23441 22.6573 2.01361 24.5 2.00419 26.5C1.99476 28.5 2.00419 28.5 2.00419 28.5" stroke="#00FFE0" stroke-width="3"/>
                    <path d="M2.25391 205.248C2.25391 205.248 2.254 205.244 2.25391 209.748C2.25381 214.252 2.8438 217.49 4.75391 221.248C5.71101 223.131 6.34707 224.172 7.75391 225.748C9.41951 227.613 10.5269 228.61 12.7539 229.748C14.4041 230.59 15.448 230.837 17.2539 231.252C18.4112 231.518 20.2539 231.738 22.2539 231.748C24.2539 231.757 24.2539 231.748 24.2539 231.748" stroke="#00FFE0" stroke-width="3"/>
                    <path d="M278.242 231.5C278.242 231.5 278.238 231.5 282.742 231.5C287.246 231.5 290.484 230.91 294.242 229C296.125 228.043 297.167 227.407 298.742 226C300.607 224.334 301.605 223.227 302.742 221C303.585 219.35 303.831 218.306 304.246 216.5C304.512 215.343 304.732 213.5 304.742 211.5C304.751 209.5 304.742 209.5 304.742 209.5" stroke="#00FFE0" stroke-width="3"/>
                    <path d="M302.492 31.0042C302.492 31.0042 302.492 31.0081 302.492 26.5042C302.492 22.0003 301.902 18.7617 299.992 15.0042C299.035 13.1214 298.399 12.0795 296.992 10.5042C295.327 8.63908 294.219 7.6415 291.992 6.50419C290.342 5.66145 289.298 5.41514 287.492 5.00028C286.335 4.73441 284.492 4.51361 282.492 4.50419C280.492 4.49476 280.492 4.50419 280.492 4.50419" stroke="#00FFE0" stroke-width="3"/>
                </svg>
                <div class="avatar">
                    <img src="./assets/images/bg3.gif">
                    <img src="./assets/images/devCard/avatar3.svg">
                    <h2>@7maad</h2>
                    <span id="gradient"></span>
                </div>
                <div class="follow">
                    <svg id="followBg" viewBox="0 0 607 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M260.828 4H47.8284C47.8284 5.65685 46.4853 7 44.8284 7C43.1716 7 41.8284 5.65685 41.8284 4C41.8284 2.34315 43.1716 1 44.8284 1C46.4853 1 47.8284 2.34315 47.8284 4H260.828C260.828 2.34315 262.172 1 263.828 1C265.485 1 266.828 2.34315 266.828 4C266.828 5.65685 265.485 7 263.828 7C262.172 7 260.828 5.65685 260.828 4Z" fill="#D9D9D9" fill-opacity="0.19"/>
                        <path d="M263.828 11.5H44.8284L4.32843 50.5V252L41.8284 289.5H520.328L561.328 248.5V203.5L597.328 167.5V89L558.328 50H302.328L263.828 11.5Z" fill="#D9D9D9" fill-opacity="0.19"/>
                        <path d="M602.828 171V92.5C601.172 92.5 599.828 91.1569 599.828 89.5C599.828 87.8431 601.172 86.5 602.828 86.5C604.485 86.5 605.828 87.8431 605.828 89.5C605.828 91.1569 604.485 92.5 602.828 92.5V171L569.328 204.5C570.918 205.945 570.918 208.555 569.328 210C567.884 211.313 565.773 211.313 564.328 210C562.739 208.555 562.739 205.945 564.328 204.5C565.773 203.187 567.884 203.187 569.328 204.5L602.828 171Z" fill="#D9D9D9" fill-opacity="0.19"/>
                        <path d="M40.3284 296.5H516.328C516.328 294.843 517.672 293.5 519.328 293.5C520.985 293.5 522.328 294.843 522.328 296.5C522.328 298.157 520.985 299.5 519.328 299.5C517.672 299.5 516.328 298.157 516.328 296.5H40.3284L5.82843 262C4.72386 263.105 2.933 263.105 1.82843 262C0.723858 260.895 0.723858 259.105 1.82843 258C2.933 256.895 4.72386 256.895 5.82843 258C6.933 259.105 6.933 260.895 5.82843 262L40.3284 296.5Z" fill="#D9D9D9" fill-opacity="0.19"/>
                        <path d="M47.8284 4C131.01 4 177.647 4 260.828 4M47.8284 4C47.8284 2.34315 46.4853 1 44.8284 1C43.1716 1 41.8284 2.34315 41.8284 4C41.8284 5.65685 43.1716 7 44.8284 7C46.4853 7 47.8284 5.65685 47.8284 4ZM260.828 4C260.828 2.34315 262.172 1 263.828 1C265.485 1 266.828 2.34315 266.828 4C266.828 5.65685 265.485 7 263.828 7C262.172 7 260.828 5.65685 260.828 4ZM602.828 92.5C602.828 123.156 602.828 171 602.828 171C602.828 171 582.411 191.417 569.328 204.5M602.828 92.5C604.485 92.5 605.828 91.1569 605.828 89.5C605.828 87.8431 604.485 86.5 602.828 86.5C601.172 86.5 599.828 87.8431 599.828 89.5C599.828 91.1569 601.172 92.5 602.828 92.5ZM569.328 204.5C567.884 203.187 565.773 203.187 564.328 204.5C562.739 205.945 562.739 208.555 564.328 210C565.773 211.313 567.884 211.313 569.328 210C570.918 208.555 570.918 205.945 569.328 204.5ZM516.328 296.5C330.439 296.5 40.3284 296.5 40.3284 296.5C40.3284 296.5 19.3015 275.473 5.82843 262M516.328 296.5C516.328 294.843 517.672 293.5 519.328 293.5C520.985 293.5 522.328 294.843 522.328 296.5C522.328 298.157 520.985 299.5 519.328 299.5C517.672 299.5 516.328 298.157 516.328 296.5ZM5.82843 262C6.933 260.895 6.933 259.105 5.82843 258C4.72386 256.895 2.933 256.895 1.82843 258C0.723858 259.105 0.723858 260.895 1.82843 262C2.933 263.105 4.72386 263.105 5.82843 262ZM44.8284 11.5H263.828L302.328 50H558.328L597.328 89V167.5L561.328 203.5V248.5L520.328 289.5H41.8284L4.32843 252V50.5L44.8284 11.5Z" stroke="white"/>
                    </svg>
                    <div class="follow-inner">
                        <h3>Followers</h3>
                        <p>1.5M</p>
                    </div>
                </div>
                <div class="friends">
                <svg id="bg" width="180" height="241" viewBox="0 0 180 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#drop-shadow)">
                        <path d="M1 21H179.5V218.5L157.5 240.5H24.5L1 217V21Z" fill="#073C7011" fill-opacity="0.55" stroke="#00FFF0" stroke-opacity="0.63"/>
                        <path d="M51.5 3.5L69 21H1V3.5H51.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M170 16.5H175L160 1.5H155L170 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M157 16.5H162L147 1.5H142L157 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M145.5 16.5H150.5L135.5 1.5H130.5L145.5 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M134 16.5H139L124 1.5H119L134 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M122 16.5H127L112 1.5H107L122 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M110 16.5H115L100 1.5H95L110 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M98.5 16.5H103.5L88.5 1.5H83.5L98.5 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M86.5 16.5H91.5L76.5 1.5H71.5L86.5 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M74.5 16.5H79.5L64.5 1.5H59.5L74.5 16.5Z" fill="black" fill-opacity="0.2"/>
                        <path d="M1 21V217L24.5 240.5H157.5L179.5 218.5V21M1 21V3.5H51.5L69 21M1 21H69M69 21H124.25H151.875H165.688H172.594H176.047H177.773H178.637H179.49M1 1H53L70 18H177.773M175 16.5H170L155 1.5H160L175 16.5ZM162 16.5H157L142 1.5H147L162 16.5ZM150.5 16.5H145.5L130.5 1.5H135.5L150.5 16.5ZM139 16.5H134L119 1.5H124L139 16.5ZM127 16.5H122L107 1.5H112L127 16.5ZM115 16.5H110L95 1.5H100L115 16.5ZM103.5 16.5H98.5L83.5 1.5H88.5L103.5 16.5ZM91.5 16.5H86.5L71.5 1.5H76.5L91.5 16.5ZM79.5 16.5H74.5L59.5 1.5H64.5L79.5 16.5Z" stroke="#00FFF0" stroke-opacity="0.63"/>
                        </g>
                </svg>
                <div class="title">
                    <h3>Friends</h3>
                </div>
                </div>
                <div class="statistics">
                    <svg width="519" height="212" viewBox="0 0 519 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 201.5H180L179.5 200.5H63.5V198.5H24.5V201.5Z" fill="#D9D9D9"/>
                        <path d="M495.5 201.5H338.5L339.5 200.5H455.5V198.5H495.5V201.5Z" fill="#D9D9D9"/>
                        <path d="M189 210.5L180 201.5M180 201.5H24.5V198.5H63.5V200.5H179.5L180 201.5ZM329.5 210.5L338.5 201.5M338.5 201.5H495.5V198.5H455.5V200.5H339.5L338.5 201.5ZM335.5 198.5L317.5 180.5H268.5M248.5 180.5H199.5L181.5 198.5" stroke="#377E7A"/>
                        <path d="M250.5 206V191.5L251.5 190.5H265.5L266.5 191.5V206H250.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M248.5 205.5V191.5L240.5 183.5H226.5L248.5 205.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M268.5 191.5V205.5L290.5 183.5H276.5L268.5 191.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M272 205.5L294 183.5H309.5L287.5 205.5H272Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M315.5 183.5H313L291 205.5H306.5L322 190L315.5 183.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M310.5 205.5L323.5 192.5L331 200L325.5 205.5H310.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M245 205.5L223 183.5H208L230 205.5H245Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M200.5 183.5H203.5L225.5 205.5H210.5L194.5 189.5L200.5 183.5Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M185 199L192.5 191.5L206.5 205.5H191.5L185 199Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M508 182.5H505.5V182V181.5H506H508.5V182.5H508Z" fill="#D9D9D9" fill-opacity="0.3"/>
                        <path d="M505.5 182.5H508H508.5V181.5H506H505.5V182V183.5H509.5V87.5V36.5M250.5 191.5V206H266.5V191.5L265.5 190.5H251.5L250.5 191.5ZM248.5 191.5V205.5L226.5 183.5H240.5L248.5 191.5ZM268.5 205.5V191.5L276.5 183.5H290.5L268.5 205.5ZM294 183.5L272 205.5H287.5L309.5 183.5H294ZM313 183.5H315.5L322 190L306.5 205.5H291L313 183.5ZM323.5 192.5L310.5 205.5H325.5L331 200L323.5 192.5ZM223 183.5L245 205.5H230L208 183.5H223ZM203.5 183.5H200.5L194.5 189.5L210.5 205.5H225.5L203.5 183.5ZM192.5 191.5L185 199L191.5 205.5H206.5L192.5 191.5Z" stroke="#377E7A" stroke-opacity="0.5"/>
                        <g id="myGroup1" transform="translate(0, 0)">
                            <path d="M508.5 58.5V86.5" stroke="#07FFF0"/>
                        </g>
                        <g id="myGroup2" transform="translate(0, 0)">
                            <path d="M505.5 58.5V68.5" stroke="#07FFF0"/>
                        </g>
                        <animateTransform
                            xlink:href="#myGroup1"
                            attributeName="transform"
                            type="translate"
                            from="0 0"
                            to="0 100"
                            begin="0s"
                            dur="2s"
                            repeatCount="indefinite"
                            direction="alternate"
                        />
                        <animateTransform
                            xlink:href="#myGroup2"
                            attributeName="transform"
                            type="translate"
                            from="0 100"
                            to="0 0"
                            begin="0s"
                            dur="2s"
                            repeatCount="indefinite"
                            direction="alternate"
                        />
                        <path d="M183.5 9.5H21.5L0.5 30.5V190.5L21.5 211.5H183.5M336.5 211.5H497.5L518.5 190.5V30.5L497.5 9.5H336.5M344 11.5H496.5L516.5 31.5V189.5L496.5 209.5H343M177 209.5H22.5L3 190V31.159L22.659 11.5H176M352 13.5H495.5L514.5 32.5V188.5L495.5 207.5H350M169 207.5H23.5L5.5 189.5V32L24 13.5H168" stroke="#377E7A"/>
                        <path d="M202 10H317C317 10 316.711 8.27435 316 7.5C315.524 6.98155 314.5 6.5 313.5 6.5H206C205 6.5 203.866 6.61997 203 7.5C202.262 8.24932 202 10 202 10Z" fill="#D9D9D9"/>
                        <path d="M292.5 1.5C293.096 2.13792 293.5 3.5 293.5 3.5H226C226 3.5 226.379 2.11353 227 1.5C227.748 0.761215 228.617 0.5 229.5 0.5H290C291 0.5 292.019 0.985689 292.5 1.5Z" fill="#D9D9D9"/>
                        <path d="M202 10H317C317 10 316.711 8.27435 316 7.5C315.524 6.98155 314.5 6.5 313.5 6.5H206C205 6.5 203.866 6.61997 203 7.5C202.262 8.24932 202 10 202 10Z" stroke="#377E7A"/>
                        <path d="M292.5 1.5C293.096 2.13792 293.5 3.5 293.5 3.5H226C226 3.5 226.379 2.11353 227 1.5C227.748 0.761215 228.617 0.5 229.5 0.5H290C291 0.5 292.019 0.985689 292.5 1.5Z" stroke="#377E7A"/>
                        <path d="M317 208L202 208C202 208 202.289 209.726 203 210.5C203.476 211.018 204.5 211.5 205.5 211.5L313 211.5C314 211.5 315.134 211.38 316 210.5C316.738 209.751 317 208 317 208Z" fill="#D9D9D9" stroke="#377E7A"/>
                        <circle cx="258.5" cy="180.5" r="3.5" fill="#D9D9D9"/>
                    </svg>
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