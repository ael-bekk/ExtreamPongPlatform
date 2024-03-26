class Avatar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            @import url('https://fonts.cdnfonts.com/css/esporte-personal-use');
            div::-webkit-scrollbar {
                width: 0;
            }
            .avatar {
                width: 220px;
                height: 220px;
                position: relative;
                top: -45px;
                left: -12%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .avatar svg {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 10;
            }
            .avatar img#avatarImg {
                // position: absolute;
                width: 65%;
                height: 65%;
                opacity: 0.8;
                z-index: -10;
                clip-path: url(#clip0);
            }
            .avatar #borderAvatar {
                position: absolute;
                width: 55%;
                z-index: -9;
                height: 55%;
            }
            .avatar:hover {
                cursor: pointer;
            }
            .avatar .info {
                position: absolute;
                width: 75%;
                height: 100%;
                transform: translate(100%, 20%);
                // border : 1px solid white;
            }
            .avatar .info h1 {
                font-size: 1rem;
                font-weight: 200;
                color: white;
                text-align: center;
            }
            .avatar .info h2 {
                font-size: 1rem;
                font-weight: 400;
                color: #acf1f3;
                text-align: center;
                font-family: 'Esporte Personal Use', sans-serif;
            }
            .avatar .status {
                position: absolute;
                display: flex;
                flex-direction: row;
                width: 150%;
                height: 50%;
                bottom: -30%;
                left: 14%;
                font-size: 0.4rem;
                color: white;
                // background-color: #00ebff55;
            }
            .avatar .status div:nth-of-type(1) {
                width: 15%;
                height: 70%;
                border: 1px dashed #ffffff14;
            }
            .avatar .status div:nth-of-type(2) {
                width: 35%;
                height: 70%;
                border: 1px dashed #ffffff14;
            }
            .avatar .status div:nth-of-type(3) {
                width: 50%;
                height: 70%;
                ba
                // border: 1px dashed #ffffff14;
            }

            .avatar .status .level {
                position: absolute;
                width: 100%;
                height: 25%;
                bottom: 0;
                left: 0;
                clip-path: polygon(0 0, 70% 0, 100% 100%, 0 100%);
                background-color: #00ebff55;
            }
            .avatar .status .level span {
                position: absolute;
                width: 100%;
                height: 100%;
                color : #5AE1A1;
                font-size : 0.7rem;
                font-weight : bold;
                position : absolute;
                top : 0;
                left : 10px;
            }
            .avatar .status .league img {
                position: relative;
                height: 70%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .avatar .status .rank {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .avatar .status .rank div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 30%;
            }
            .avatar .status .rank div:nth-of-type(1) h1 {
                color: red;
            }
            .avatar .status .rank div:nth-of-type(1) h2 {
                color: #A6A6A6;
            }
            .avatar .status .rank div:nth-of-type(2) {
                height: 50%;
                font-size: 0.5rem;
            }
            .avatar .status .rank div:nth-of-type(2) h1 {
                color: #5AE1A1;
            }

            .avatar .status .rank div:nth-of-type(2) h1 em {
                font-size: 0.8rem;
            }
            .avatar .status .score {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

            }
            .avatar .status .score div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 30%;
            }
            .avatar .status .score div em {
                color: #EDB91A;
                font-size: 0.8rem;
            }
            .avatar .friends {
                position: absolute;
                width: 100%;
                height: 110%;
                left: 167%;
                top: 34px;
                border: 1px dashed #ffffff14;
                z-index: 10;
                display: flex;
                overflow: hidden;
                flex-direction: column;
            }
            .avatar .friends div#title {
                color: #00ebff;
                font-size: 1rem;
                font-weight: bold;
                position: absolute;
                width: 70%;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10;
                background-color: #0ff5;
                animation: fadeIn 2s linear infinite;
            }
            @keyframes fadeIn {
                0% {
                    box-shadow: 0 0 30px #00ebff;
                }
                50% {
                    box-shadow: 0 0 10px #00ebff;
                }
                100% {
                    box-shadow: 0 0 30px #00ebff;
                }
            }
            .avatar .friends > div:nth-of-type(2) {
                position: relative;
                top: 10%;
                left: 5%;
                width: 80%;
                height: 90%;
                overflow-y: auto;
                overflow-x: hidden;
                color: white;
                font-size: 0.5rem;
                // border : 1px solid #ffffff44;
            }
            .avatar .friends:hover {
                cursor: pointer;
            }
            .avatar .friends .friend .friendCard {
                width: 100%;
                height: 30%;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: row;
                // border: 1px solid #ffffff44;
            }
            .avatar .friends .friend .friendCard img {
                // width: 30%;
                height: 67%;
                clip-path: url(#clip10);
                // border: 1px solid #ffffff44;
            }
            .avatar .friends .friend .friendCard svg {
                animation: none;
                height: 20%;
                left: -66px;
                // border: 1px solid #ffffff44;
            }
            .avatar svg:nth-of-type(1) {
                animation: rotate 1s linear infinite;
            }
            .avatar svg:nth-of-type(2) {
                animation: rotate 2s linear infinite;
            }
            .avatar svg:nth-of-type(3) {
                animation: rotate 3s linear infinite;
            }
            .avatar svg:nth-of-type(4) {
                animation: rotate 4s linear infinite;
            }
            .avatar svg:nth-of-type(5) {
                animation: rotate 5s linear infinite;
            }
            .avatar svg:nth-of-type(6) {
                animation: rotate 6s linear infinite;
            }
            .avatar svg:nth-of-type(7) {
                animation: rotate 7s linear infinite;
            }
            .avatar svg:nth-of-type(8) {
                animation: rotate 7s linear infinite;
            }
            .avatar svg:nth-of-type(9) {
                animation: rotate 8s linear infinite;
            }
            .avatar svg:nth-of-type(10) {
                animation: rotate 9s linear infinite;
            }
            .avatar svg:nth-of-type(11) {
                animation: rotate 10s linear infinite;
            }
            .avatar svg:nth-of-type(12) {
                animation: rotate 11s linear infinite;
            }
            .avatar svg:nth-of-type(13) {
                animation: rotate 12s linear infinite;
            }
            .avatar svg:nth-of-type(14) {
                animation: rotate 13s linear infinite;
            }
            .avatar svg:nth-of-type(15) {
                opacity: 0.4;
            }
            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

        </style>
        <div class="avatar">

            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.0714286" d="M173.605 80.6983L167.646 158.882C167.313 163.255 164.031 166.832 159.704 167.539L87.8258 179.283C83.8686 179.929 79.9323 178.02 77.9889 174.513L38.3541 102.974C36.4107 99.4661 36.8787 95.1149 39.5237 92.0999L87.5676 37.3362C90.4596 34.0397 95.231 33.1509 99.1142 35.1854L168.542 71.5608C171.903 73.3215 173.893 76.914 173.605 80.6983Z" stroke="url(#paint0_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.142857" d="M178.901 97.5032C181.306 100.437 181.735 104.521 179.992 107.891L143.974 177.53C141.959 181.426 137.54 183.436 133.28 182.395L62.531 165.106C58.6358 164.154 55.758 160.859 55.339 156.871L46.7932 75.5227C46.3743 71.5347 48.5044 67.7129 52.1167 65.9715L117.727 34.3438C121.677 32.4395 126.417 33.4866 129.198 36.8778L178.901 97.5032Z" stroke="url(#paint1_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.214286" d="M178.304 125.432C179.373 129.073 178.173 133 175.252 135.421L114.9 185.444C111.524 188.242 106.671 188.365 103.157 185.741L44.7836 142.169C41.5699 139.77 40.2078 135.612 41.3797 131.777L65.2825 53.5552C66.4544 49.7202 69.9079 47.0348 73.913 46.844L146.66 43.3791C151.04 43.1705 154.994 45.9874 156.229 50.1957L178.304 125.432Z" stroke="url(#paint2_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.285714" d="M166.848 150.905C166.41 154.675 163.77 157.823 160.135 158.91L85.0458 181.362C80.8462 182.618 76.3328 180.835 74.123 177.048L37.4052 114.117C35.3838 110.653 35.7545 106.292 38.3316 103.219L90.8803 40.5627C93.4573 37.4899 97.6856 36.3674 101.447 37.7574L169.767 63.0076C173.878 64.5273 176.417 68.6647 175.91 73.0206L166.848 150.905Z" stroke="url(#paint3_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.357143" d="M146.356 169.874C144.479 173.174 140.818 175.041 137.045 174.62L59.1581 165.934C54.8027 165.448 51.3456 162.044 50.7908 157.696L41.5681 85.4101C41.0604 81.431 43.1057 77.5611 46.6789 75.7395L119.516 38.6088C123.089 36.7872 127.421 37.4064 130.34 40.1562L183.37 90.1096C186.56 93.1148 187.28 97.9136 185.113 101.725L146.356 169.874Z" stroke="url(#paint4_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.428571" d="M120.083 179.326C117.066 181.63 112.966 181.917 109.657 180.055L41.3543 141.611C37.5351 139.462 35.6823 134.978 36.8696 130.759L56.6109 60.6129C57.6975 56.7517 61.092 53.989 65.0932 53.709L146.638 48.004C150.64 47.7241 154.385 49.9873 155.999 53.6595L185.305 120.375C187.068 124.387 185.857 129.085 182.374 131.745L120.083 179.326Z" stroke="url(#paint5_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M92.2074 177.757C88.53 178.699 84.6445 177.36 82.3263 174.353L34.4666 112.264C31.7904 108.792 31.8359 103.94 34.5768 100.52L80.1429 43.668C82.6511 40.5386 86.8544 39.3223 90.6466 40.6287L167.939 67.2557C171.731 68.5621 174.295 72.1097 174.345 76.1207L175.268 148.988C175.323 153.371 172.373 157.222 168.128 158.31L92.2074 177.757Z" stroke="url(#paint6_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.571429" d="M67.1577 165.414C63.4061 164.844 60.3537 162.094 59.3946 158.421L39.5874 82.5572C38.4797 78.3145 40.4175 73.8645 44.2773 71.7874L108.421 37.2693C111.952 35.3691 116.296 35.8922 119.275 38.5765L180.027 93.3049C183.007 95.9892 183.981 100.256 182.461 103.968L154.854 171.401C153.193 175.458 148.972 177.852 144.639 177.193L67.1577 165.414Z" stroke="url(#paint7_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.642857" d="M48.9198 144.259C45.6904 142.269 43.9555 138.546 44.507 134.791L55.9022 57.214C56.5395 52.8749 60.063 49.5351 64.4288 49.1319L136.95 42.4335C140.943 42.0648 144.737 44.2434 146.431 47.8782L180.981 122.009C182.675 125.644 181.905 129.952 179.056 132.775L127.312 184.052C124.197 187.139 119.375 187.692 115.643 185.392L48.9198 144.259Z" stroke="url(#paint8_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.714286" d="M40.3945 117.657C38.1997 114.563 38.0565 110.459 40.0302 107.219L80.8166 40.2631C83.0981 36.5177 87.6467 34.8207 91.8237 36.1564L161.195 58.3406C165.014 59.562 167.655 63.0501 167.795 67.0575L170.648 148.805C170.788 152.812 168.397 156.476 164.672 157.961L97.0165 184.932C92.9428 186.556 88.2869 185.181 85.7499 181.604L40.3945 117.657Z" stroke="url(#paint9_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.785714" d="M42.9379 89.8392C42.1259 86.1322 43.597 82.2981 46.6796 80.0869L110.372 34.398C113.935 31.8424 118.784 32.0583 122.107 34.9205L177.3 82.4608C180.339 85.0781 181.408 89.3216 179.971 93.0656L150.673 169.428C149.237 173.172 145.604 175.61 141.596 175.521L68.784 173.9C64.4004 173.803 60.6525 170.717 59.7141 166.433L42.9379 89.8392Z" stroke="url(#paint10_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.857143" d="M56.1417 65.2281C56.8423 61.4971 59.6952 58.5413 63.3977 57.7106L139.869 40.5531C144.146 39.5936 148.524 41.6867 150.464 45.6189L182.705 110.96C184.48 114.557 183.806 118.881 181.021 121.767L124.232 180.602C121.447 183.488 117.151 184.313 113.496 182.664L47.102 152.707C43.1065 150.904 40.8628 146.6 41.6721 142.29L56.1417 65.2281Z" stroke="url(#paint11_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.928571" d="M77.9074 47.735C80.0102 44.5732 83.7926 42.9669 87.5266 43.6498L164.618 57.7508C168.929 58.5393 172.141 62.1756 172.391 66.5521L176.551 139.306C176.78 143.311 174.47 147.028 170.778 148.596L95.5305 180.553C91.8388 182.121 87.561 181.201 84.8407 178.254L35.4221 124.721C32.4493 121.501 32.0655 116.663 34.4932 113.013L77.9074 47.735Z" stroke="url(#paint12_linear_397_191)"/>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104.774 40.1393C107.945 38.0506 112.055 38.0506 115.226 40.1393L180.682 83.2562C184.342 85.6671 185.877 90.2689 184.399 94.3947L159.815 162.993C158.462 166.768 154.883 169.288 150.872 169.288H69.1275C65.1165 169.288 61.5376 166.768 60.1844 162.993L35.6005 94.3947C34.1219 90.2689 35.6577 85.6671 39.3177 83.2562L104.774 40.1393Z" stroke="url(#paint13_linear_397_191)"/>
            </svg>
            <svg id='borderAvatar' width="112" height="122" viewBox="0 0 112 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M99.1936 22.7831L67.5 4.48483C60.3838 0.376274 51.6162 0.376274 44.5 4.48483L12.8064 22.7831C5.6902 26.8917 1.30642 34.4846 1.30642 42.7017V79.2983C1.30642 87.5154 5.6902 95.1083 12.8064 99.2169L44.5 117.515C51.6162 121.624 60.3838 121.624 67.5 117.515L99.1936 99.2169C106.31 95.1083 110.694 87.5154 110.694 79.2983V42.7017C110.694 34.4846 106.31 26.8917 99.1936 22.7831Z" fill="url(#pattern0)" stroke="url(#paint0_linear_255_519)" stroke-width="2"/>
                <defs>
                    <clipPath id="clip0" transform="translate(15.30642 10.376274)">
                        <path d="M99.1936 22.7831L67.5 4.48483C60.3838 0.376274 51.6162 0.376274 44.5 4.48483L12.8064 22.7831C5.6902 26.8917 1.30642 34.4846 1.30642 42.7017V79.2983C1.30642 87.5154 5.6902 95.1083 12.8064 99.2169L44.5 117.515C51.6162 121.624 60.3838 121.624 67.5 117.515L99.1936 99.2169C106.31 95.1083 110.694 87.5154 110.694 79.2983V42.7017C110.694 34.4846 106.31 26.8917 99.1936 22.7831Z" fill="url(#pattern0)" stroke="url(#paint0_linear_255_519)" stroke-width="2"/>
                    </clipPath>
                    <linearGradient id="paint0_linear_255_519" x1="18.5" y1="8" x2="100" y2="113" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A73EE7"/>
                        <stop offset="1" stop-color="#00EBFF"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="paint0_linear_397_191" x1="86.8079" y1="68.4558" x2="133.85" y2="153.279" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint1_linear_397_191" x1="104.876" y1="62.6917" x2="115.021" y2="159.165" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint2_linear_397_191" x1="123.759" y1="64.4498" x2="95.3857" y2="157.209" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint3_linear_397_191" x1="140.455" y1="73.4497" x2="78.0954" y2="147.73" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint4_linear_397_191" x1="152.308" y1="88.2605" x2="65.9005" y2="132.265" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint5_linear_397_191" x1="157.434" y1="106.528" x2="60.7125" y2="113.288" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint6_linear_397_191" x1="155.02" y1="125.347" x2="63.3351" y2="93.7934" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint7_linear_397_191" x1="145.447" y1="141.727" x2="73.3616" y2="76.853" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint8_linear_397_191" x1="130.239" y1="153.061" x2="89.2294" y2="65.1603" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint9_linear_397_191" x1="111.812" y1="157.551" x2="108.425" y2="60.6042" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint10_linear_397_191" x1="93.0984" y1="154.479" x2="127.875" y2="63.9282" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint11_linear_397_191" x1="77.071" y1="144.336" x2="144.458" y2="74.5895" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint12_linear_397_191" x1="66.2799" y1="128.734" x2="155.543" y2="90.8626" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            <linearGradient id="paint13_linear_397_191" x1="62.4386" y1="110.153" x2="159.396" y2="110.153" gradientUnits="userSpaceOnUse">
            <stop offset="0.166667" stop-color="#876CF5" stop-opacity="0"/>
            <stop offset="0.520833" stop-color="#1FDBFA" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#876CF5" stop-opacity="0.36"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
        `;
    }
    connectedCallback() {
        this._avatar = this.shadowRoot.querySelector('.avatar');
        this._avatar.innerHTML += `
            <img id="avatarImg" src="./assets/images/avatar/avatarTest.png" alt="avatar">
        `;
        this._avatar.innerHTML += `
            <div class="info">
                <h1>@algoAce</h1>
                <h2>Abdellah El Bekkali</h2>
            </div>
        `;
        this._avatar.innerHTML += `
            <div class="status">
                <div class="league">
                    <img src="./assets/images/leagues/1.png" alt="iron">
                </div>
                <div class="rank">
                    <div class="rankNumber">
                        <h1> Rank</h1>
                        <h2> <em style="color:white">:</em> 5000 ${getOrdinalSuffix(5000)} </h2>
                    </div>
                    <div class="rankLeague">
                        <h1> IRON <em> / 52 ${getOrdinalSuffix(52)} </em> </h1>
                    </div>
                </div>
                <div class="score">
                    <div><h1> 472 <em> Games </em> / 1015 <em>LP</em> <h1></div>
                    <div><h1> 278<em>W </em> / 1015<em>L</em> / 59% <em>WR</em> <h1></div>
                </div>
                <div class="level">
                    <span>Level 30</span>
                    <em></em>
                </div>
            </div>
        `;
        const friends = [
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 2],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 2],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 0],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 0],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 0],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 0],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 1],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1],
            ['./assets/images/devCard/avatar1.svg', '@amajane', 0],
            ['./assets/images/devCard/avatar3.svg', '@hichame', 1]
        ]
        this._avatar.innerHTML += `
            <div class="friends">
                <div id="title">Friends</div>
                <div class="friend">
                    ${friends.map(friend => `
                        <div class="friendCard">
                            <img src="${friend[0]}" alt="friend">
                            <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                                <path d="M18.5204 2.14608L18 1.82893L17.4796 2.14608L1.89114 11.6461L1.41154 11.9384V12.5V31.5V32.0616L1.89114 32.3539L17.4796 41.8539L18 42.1711L18.5204 41.8539L34.1089 32.3539L34.5885 32.0616V31.5V12.5V11.9384L34.1089 11.6461L18.5204 2.14608Z" fill="url(#pattern0)" stroke="url(#paint0_linear_268_905)" stroke-width="1"/>
                                <clipPath id="clip10" transform="translate(4.30642 0.376274)">
                                    <path d="M18.5204 2.14608L18 1.82893L17.4796 2.14608L1.89114 11.6461L1.41154 11.9384V12.5V31.5V32.0616L1.89114 32.3539L17.4796 41.8539L18 42.1711L18.5204 41.8539L34.1089 32.3539L34.5885 32.0616V31.5V12.5V11.9384L34.1089 11.6461L18.5204 2.14608Z" fill="url(#pattern0)" stroke="url(#paint0_linear_268_905)" stroke-width="2"/>
                                </clipPath>
                                <defs>
                                    <linearGradient id="paint0_linear_268_905" x1="8.59091" y1="3" x2="29.0565" y2="40.091" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A73EE7"/>
                                        <stop offset="1" stop-color="#00EBFF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="friendInfo">
                                <h1>${friend[1]}</h1>
                                ${
                                    friend[2] === 0 ? "<h2 style='color: #00FF4C'>Online</h2>" : friend[2] === 1 ? "<h2 style='color: #FF0000'>In Game</h2>" : "<h2 style='color: #FF8C00'>Offline</h2>"
                                }
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        const levelEm = this.shadowRoot.querySelector('.level em');
        levelEm.style.height = '100%';
        levelEm.style.width = '80%';
        levelEm.style.position = 'absolute';
        levelEm.style.top = '0';
        levelEm.style.left = '0';
        levelEm.style.background = 'linear-gradient(90deg, #acf1f355 30%, #FF8C00 100%)';
    }
}

customElements.define('avatar-cadr', Avatar);

function createAvatar() {
    const avatar = document.createElement('avatar-cadr');
    return avatar;
}

function getOrdinalSuffix(number) {
    if (number % 100 >= 11 && number % 100 <= 13) {
        return "th";
    }
    switch (number % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}