class PopUpGates extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.__angle = 0;
        this.__direction = 1;
        this.__switch = 0;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const id = this.getAttribute('id');
        this.shadowRoot.innerHTML = `
        <style>
            .gates {
                display: flex;
                justify-content: center;
                align-items: center;
                height: fit-content;
                background-color: #000;
                color: #fff;
                font-size: 2rem;
                font-weight: bold;
                text-align: center;
                perspective: 1000px;
                overflow: hidden;
            }
            .gates h1 {
                margin-bottom: 2rem;
            }
            .gates button {
                padding: 1rem 2rem;
                background-color: #fff;
                color: #000;
                font-size: 1.5rem;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            svg g {
                transform-origin: center center;
            }
            #frontGroundGates1 {
                animation: frontGroundGatesRotate 25s linear infinite;
            }
            #frontGroundGates2 {
                animation: frontGroundGatesRotate 24s linear infinite;
            }
            #frontGroundGates3 {
                animation: frontGroundGatesRotate 23s linear infinite;
            }
            #frontGroundGates4 {
                animation: frontGroundGatesRotate 22s linear infinite;
            }
            #frontGroundGates5 {
                animation: frontGroundGatesRotate 21s linear infinite;
            }
            #frontGroundGates6 {
                animation: frontGroundGatesRotate 20s linear infinite;
            }
            #frontGroundGates7 {
                animation: frontGroundGatesRotate 19s linear infinite;
            }
            #frontGroundGates8 {
                animation: frontGroundGatesRotate 18s linear infinite;
            }
            #frontGroundGates9 {
                animation: frontGroundGatesRotate 17s linear infinite;
            }
            #frontGroundGates10 {
                animation: frontGroundGatesRotate 16s linear infinite;
            }
            #frontGroundGates11 {
                animation: frontGroundGatesRotate 15s linear infinite;
            }
            #frontGroundGates12 {
                animation: frontGroundGatesRotate 14s linear infinite;
            }
            #frontGroundGates13 {
                animation: frontGroundGatesRotate 13s linear infinite;
            }
            #frontGroundGates14 {
                animation: frontGroundGatesRotate 12s linear infinite;
            }
            #frontGroundGates15 {
                animation: frontGroundGatesRotate 11s linear infinite;
            }
            #frontGroundGates16 {
                animation: frontGroundGatesRotate 10s linear infinite;
            }
            #frontGroundGates17 {
                animation: frontGroundGatesRotate 9s linear infinite;
            }
            #frontGroundGates18 {
                animation: frontGroundGatesRotate 8s linear infinite;
            }
            #frontGroundGates19 {
                animation: frontGroundGatesRotate 7s linear infinite;
            }
            #frontGroundGates20 {
                animation: frontGroundGatesRotate 6s linear infinite;
            }
            #frontGroundGates21 {
                animation: frontGroundGatesRotate 5s linear infinite;
            }
            #frontGroundGates22 {
                animation: frontGroundGatesRotate 4s linear infinite;
            }
            #frontGroundGates23 {
                animation: frontGroundGatesRotate 3s linear infinite;
            }
            #frontGroundGates24 {
                animation: frontGroundGatesRotate 2s linear infinite;
            }
            #frontGroundGates25 {
                animation: frontGroundGatesRotate 20s linear infinite;
                transform-origin: 49.7% 50; 
            }

            @keyframes frontGroundGatesRotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
            .gatesWrapper {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
                animation: starGates 5s linear forwards;
                transition: 1s ease-in-out;
                transform: rotateX(80deg) translateZ(50px) translateY(710px);
            }
            .gates__content {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-style: preserve-3d;
                transition: 1s ease-in-out;
            }
            @keyframes starGates {
                0% {
                    transform: rotateX(0) translateZ(100px) translateY(0) scale(0);
                }
                30% {
                    transform: rotateX(0) translateZ(0) translateY(0);
                }
            }
            .gatesFrontGround {
                position: relative;
                top: 0;
                left: 0;
                width: 1500px;
                height: 100vh;
                border-radius: 1000px; 
                transition: 1s;
                display: flex;
                background: radial-gradient(ellipse at center, #00f5 0%, #0ff5 20%, #0000 70%);
                // border: 1px solid #f00;
                
            }
            .gatesFrontGround > svg#land {
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(2);
                // border: 1px solid #ff0;
            }
            #frontGroundGatesBase {
                transition: 0.5s ease-in-out;
            }
            .gateWorld {
                position: absolute;
                top: 50%;
                left: 50%;
                transform-style: preserve-3d;
                transform: translate(-50%, -50%) translateZ(300px); 
                width: 100%;
                height: 100%;
                // border: 10px solid #00f;
                background: radial-gradient(ellipse at center, #00f1 0%, #0ff1 20%, #0000 70%);
                transition: 1s;
            }
            .gateWorld#gate2 {
                transform: translate(-50%, -50%) rotate(120deg) translateZ(300px);
            }
            .gateWorld#gate3 {
                transform: translate(-50%, -50%) rotate(-120deg) translateZ(300px); 
            }
            .gateWorld .gatePath {
                position: relative;
                top: 10%;
                left: 50%;
                transform-style: preserve-3d;
                transform: translate(-50%, -50%) rotateX(-100deg) translateZ(-150px) translateY(180px) scale(1.9);   
            }
            .gatePath img {
                position: absolute;
                height: 160px;
                top: 50%;
                left: 50%;
                z-index: -1;
                animation: animateGatePathImg 5s linear infinite;
                opacity: 0.8;
            }
            .gatePath img:nth-of-type(2) {
                transform: translate(-50%, calc(-50% - 5px)) rotate(0deg) scaleX(1.8) scaleY(1);
                animation: none;
            } 
            .gatePath img:nth-of-type(3) {
                animation: none;
                transform: translate(-50%, calc(-50% - 5px)) rotate(0deg);
                z-index: -10;
                clip-path: circle(40% at 50% 50%);
                filter: brightness(.6);
                opacity: 1;
            }
            @keyframes animateGatePathImg {
                0% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(0deg);
                }
                100% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(360deg);
                }
            }
            @keyframes animateGatePathImg2 {
                0% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(0) scaleX(1.8) scaleY(1);
                }
                25% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(50deg) scaleX(1.8) scaleY(1);
                }
                75% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(-50deg) scaleX(1.8) scaleY(1);
                }
                100% {
                    transform: translate(-50%, calc(-50% - 5px)) rotate(0) scaleX(1.8) scaleY(1);
                }
            }
            .laserHologram {
                position: absolute;
                left: 50%;
                top: 50px;
                width: fit-content;
                height: fit-content;
                transform: translate(-50%, -85%) translateZ(1px);
            }
            .laserHologram#base {
                background: radial-gradient(ellipse at center, #00f 0%, #0ffa 30%, #0af5 50%, #0000 70%);
            }
            .laserHologram#laser {
                all: initial;
                position: absolute;
                width: 650px;
                // border: 1px solid #f00;
                bottom: 50%;
                left: 50%;
                display: flex;
                background: aff3; 
                border-radius: 100% 20% 20% 100%;
                box-shadow: 0 0 50px 50px #aff2,
                            0 0 150px 150px #aff2 inset;
                z-index: 0;
                transform: translate(-50%, -275%) translateZ(0px) rotateX(0deg) translateY(0px) rotate(-90deg);
            }
            .laserHologram#laser img {
                position: relative;
                width: 200px;
                top: 0;
                left: -40px;
                // border: 1px solid #f00;
                transform: none;
                filter: hue-rotate(360deg);
            }
            .laserHologram#laser span {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
            .laserHoloWrapper {
                position: relative;
                width: 650px;
                display: flex;
                background-image: url('./assets/images/laser11.gif');
                background-repeat: repeat;
                background-position: center;
                background-size: 50px;
                filter: hue-rotate(300deg);
                // border: 1px solid #f00;
                transition: 0.5s;
            }
            .animated {
                animation: laserHolo 1.5s linear forwards;
            }
            @keyframes laserHolo {
                20% {
                    transform: translate(150%, 0);
                }
                20.1% {
                    transform: translate(-150%, 0);
                }
                80% {
                    transform: translate(-150%, 0);
                }
                100% {
                    transform: translate(0%, 0);
                }
            }
            .animated2#laser {
                animation: laserHolo2 1.6s linear forwards;
            }
            @keyframes laserHolo2 {
                0% {
                    overflow: hidden;
                    box-shadow: none;
                }
                95% {
                    overflow: hidden;
                    box-shadow: none;
                    height: 0;
                }
                100% {
                    overflow: visible;
                    box-shadow: 0 0 50px 50px #aff2,
                                0 0 150px 150px #aff2 inset;
                }
            }
            .animated3 {
                animation: laserHolo3 2s linear forwards;
            }
            @keyframes laserHolo3 {
                0% {
                    transform: translate(-50%, -85%) translateZ(1px) scale(1);
                }
                10% {
                    transform: translate(-50%, -85%) translateZ(1px) scale(1);
                }
                15% {
                    transform: translate(-50%, -85%) translateZ(1px) scale(0);
                }
                80% {
                    transform: translate(-50%, -85%) translateZ(1px) scale(0);
                }
                10% {
                    transform: translate(-50%, -85%) translateZ(1px) scale(1);
                }
            }
            img.animatedImg0 {
                animation: animatedImgStart_1 .5s linear infinite;
            }
            img.animatedImg00 {
                animation: animatedImgStart1 .5s linear forwards;
            }
            @keyframes animatedImgStart1 {
                0% {
                    opacity: .8;
                    transform: translate(-50%, calc(-50% - 5px)) rotate(0deg);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, calc(-50% - 5px)) rotate(360deg);
                }
            }
            @keyframes animatedImgStart_1 {
                0% {
                    opacity: 0;
                    transform: translate(-50%, calc(-50% - 5px)) rotate(360deg);
                }
                100% {
                    opacity: .8;
                    transform: translate(-50%, calc(-50% - 5px)) rotate(0deg);
                }
            }
            img.animatedImg1#b {
                animation: animatedImgStart_2 0.2s linear forwards;
            }
            img.animatedImg11#b {
                animation: animatedImgStart2 0.2s linear forwards;
            }
            @keyframes animatedImgStart2 {
                0% {
                    transform: translate(-50%, calc(-50% - 5px)) scaleX(1.8) scaleY(1);
                }
                100% {
                    transform: translate(-50%, calc(-50% - 5px)) scaleX(1.8) scale(0);
                }
            }
            @keyframes animatedImgStart_2 {
                0% {
                    transform: translate(-50%, calc(-50% - 5px)) scaleX(1.8) scale(0);
                }
                100% {
                    transform: translate(-50%, calc(-50% - 5px)) scaleX(1.8) scale(1);
                }
            }
            img.animatedImg2#c {
                animation: animatedImgStart_3 1s linear forwards;
            }
            img.animatedImg22#c {
                animation: animatedImgStart3 0.2s linear forwards;
            }
            img.animatedImg222#c {
                animation: animatedImgStart3_3 10s linear infinite;
            }
            @keyframes animatedImgStart3 {
                0% {
                    opacity: 0.8;
                }
                100% {
                    opacity: 0;
                }
            }
            @keyframes animatedImgStart_3 {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 0.8;
                }
            }
            @keyframes animatedImgStart3_3 {
                0% {
                    transform: translate(-50%, calc(-50% - 5px)) scale(1);
                    clip-path: circle(40% at 50% 50%);
                }
                25% {
                    transform: translate(-70%, calc(-20% - 5px)) scale(1.3);
                    clip-path: circle(30% at 70% 30%);
                }
                50% {
                    transform: translate(-30%, calc(-20% - 5px)) scale(1.3);
                    clip-path: circle(30% at 30% 30%);
                }
                75% {
                    transform: translate(-50%, calc(-80% - 5px)) scale(1.3);
                    clip-path: circle(30% at 50% 70%);
                }
                100% {
                    transform: translate(-50%, calc(-50% - 5px)) scale(1);
                    clip-path: circle(40% at 50% 50%);
                }
            }
        </style>
        <div class="gates">
            <div class="gatesWrapper">
                <div class="gates__content">
                    <div class="gatesFrontGround">
                        <svg id="land" width="1217" height="1883" viewBox="0 0 1217 1883" fill="none">
                        <g transform="scale(0.5)">    
                            <path d="M246 457.5L259.25 475.5M272.5 493.5L259.25 475.5M259.25 475.5C259.25 475.5 261.387 482.423 262 487C262.804 492.999 262 502.5 262 502.5L260.5 503.5L250.841 491.5M244 483L250.841 491.5M250.841 491.5L245 495.5M245 495.5L226 472M245 495.5L238 501.5M238 501.5L231.5 493.5M238 501.5L248.5 513L244 517L223 493.5V511.5L205.5 490L195.5 499.5L197.469 501.5M227.5 532L197.469 501.5M197.469 501.5V520L186 509L218.5 540.5L215.5 542.5L183 511.5L170.5 523.5L171.5 525L184.5 538.5C186.843 537.328 188.003 536.292 190.5 535.5C192.764 534.782 194.126 534.423 196.5 534.5C198.49 534.564 199.595 534.921 201.5 535.5C204.175 536.313 205.681 536.939 208 538.5C209.951 539.813 212.5 542.5 212.5 542.5L189.5 570.5C189.5 570.5 186.096 567.425 184.5 565C182.963 562.665 182.376 561.155 181.5 558.5C180.564 555.664 179.858 553.984 180 551C180.115 548.587 181.33 547.409 181.5 545C181.569 544.026 181.5 542.5 181.5 542.5L166.5 528.5L153.5 542.5L188.5 570.5L185.5 573.5M185.5 573.5L172.5 562M185.5 573.5L175 585.5L173.5 584.326M140.5 558.5L142 559.674M142 559.674C142 559.674 144.016 557.87 145.5 557C147.314 555.937 148.436 555.402 150.5 555C152.608 554.59 153.876 554.68 156 555C158.442 555.368 159.795 555.888 162 557C164.86 558.442 166.447 559.542 168.5 562C169.96 563.748 170.553 564.929 171.5 567C172.604 569.415 173.015 570.889 173.5 573.5C174.272 577.657 173.5 584.326 173.5 584.326M142 559.674L173.5 584.326M172.5 588.5L170.5 587.007M170.5 587.007L137 562C137 562 136.143 565.629 136 568C135.775 571.724 135.557 574.06 137 577.5C137.609 578.952 139 581 139 581C139 581 140.457 584.058 142 585.5C143.914 587.289 145.627 587.39 148 588.5C149.742 589.315 150.606 590.168 152.5 590.5C153.846 590.736 154.633 590.5 156 590.5C158.343 590.5 159.719 591.034 162 590.5C163.872 590.062 164.718 589.223 166.5 588.5C168.045 587.873 170.5 587.007 170.5 587.007ZM171.5 588.5L162 601L127 576.5L123 579.5L138.343 590.074M160 605L141.5 592.25M141.5 592.25L149 617.5M141.5 592.25L138.343 590.074M138.343 590.074C138.343 590.074 139.222 594.15 138.343 596.5C137.766 598.04 137.308 599.003 136 600C134.111 601.44 132.354 601.316 130 601C127.404 600.652 124 598 124 598L115.5 590.5L108 599L124.176 610M138.343 635.5L145.5 624.5L131 614.64M138.343 635.5L123 625.023M138.343 635.5L131 645.5C131 645.5 127.149 641.803 124 641C121.54 640.373 120.005 640.588 117.5 641C115.063 641.401 113.51 641.564 111.5 643C110.376 643.803 109 645.5 109 645.5L89 633L125.5 656L122 661L84.5 640L86.5 643C86.5 643 89.3767 645.618 91 647.5C91.8166 648.447 92.2872 648.973 93 650C94.4936 652.152 95.1952 653.507 96 656C96.6118 657.895 97.3626 659.042 97 661C96.8085 662.034 96 663.5 96 663.5L115.5 673L111.5 678.5L93 668C93 668 90.6161 669.904 89 671C86.3942 672.767 85.0648 674.279 82 675C79.5291 675.581 78.0384 675 75.5 675C71.9853 675 66.5 675 66.5 675L105 693L102.5 696.5L98 694.449M101 610L116.376 620.5M116.376 620.5L124.176 610M116.376 620.5L123 625.023M124.176 610L131 614.64M131 614.64L123 625.023M63 678.5L98 694.449M98 694.449L78.5 702L94.5 711L93 716.5M93 716.5L54.5 700M93 716.5L91 720.5L74 712.5L79.5 729L86.5 732L83.5 738L66.5 730.808M44.5 721.5L64 729.75L66.5 730.808M66.5 730.808L61.5 742M66.5 730.808C66.5 730.808 70.3128 734.123 72.5 736.5C74.3793 738.542 75.7957 739.5 77 742C78.1305 744.347 78.5 748.5 78.5 748.5L77 755.5M77 755.5L68.5 752.057M77 755.5L66.5 751.247M37.5 739.5L53 745.778M53 745.778L36 755.5M53 745.778L54.5 746.386M54.5 746.386L48 759.5M54.5 746.386L66.5 751.247M68.5 752.057C68.5 752.057 68.5 753.546 68.5 754.5C68.5 756.062 68.0581 757.002 68.5 758.5C69.1651 760.755 72.5 763 72.5 763M68.5 752.057L66.5 751.247M66.5 751.247L63 763M72.5 769V768.5L33 755.5L31.5 757.5V759.5L72.5 772.5C70.5 778.833 66.5 791.4 66.5 791C66.5 790.6 51.8333 785.833 44.5 783.5L59 777.5L29.5 764.5L24 783.5V785L64 796M207.5 505.5L215.5 513.5" stroke="#96AFB8" stroke-width="3"/> 
                            <g id="frontGroundGatesBase">
                                <path d="M600 977L606 839.5L612.5 977L627 959L616 986L648 990.5L617.5 997L628.5 1017L612.5 1003C612.5 1003 610.5 1040 614 1040C617.5 1040 632.5 1025.5 632.5 1025.5C632.5 1025.5 645.008 1011.97 650 1001.5C653.535 994.087 655.53 989.655 656.5 981.5C657.354 974.315 656.929 970.093 655.5 963C654.221 956.654 652.709 953.196 650.159 947.365L650 947C647.796 941.959 643.5 934.5 643.5 934.5C643.5 934.5 647.73 927.632 650 923C651.963 918.994 654.5 912.5 654.5 912.5L661.5 896C661.5 896 662.669 891.161 663 888C663.756 880.791 663.25 876.534 661.5 869.5C659.81 862.708 658.222 858.928 654.5 853C651.695 848.532 646 840.5 646 840.5C646 840.5 652.661 842.455 655.5 844C658.973 845.89 660.765 847.227 664 849.5C667.419 851.902 669.486 853.105 672.5 856C675.097 858.494 676.268 860.175 678.5 863C681.891 867.293 683.715 869.791 686.5 874.5C689.168 879.01 690.745 881.563 692.5 886.5C694.373 891.769 694.679 894.969 695.5 900.5C696.048 904.19 696.282 906.276 696.5 910L696.523 910.391C696.783 914.83 696.938 917.467 696.5 922C695.963 927.566 694.963 930.603 693.5 936L693.38 936.443C692.274 940.523 691.615 942.958 690 947C688.057 951.866 684 959 684 959C684 959 689.044 953.219 691.5 949C693.346 945.829 693.938 943.819 695.5 940.5C697.062 937.181 697.713 935.12 698.5 931.5C699.21 928.234 699.264 926.334 699.5 923C699.858 917.936 699.966 915.055 699.5 910C699.247 907.25 699.02 905.712 698.5 903C697.893 899.837 697.629 898.116 697 895C696.447 892.259 695.5 888 695.5 888C695.5 888 697.467 889.705 698.5 891C698.5 891 700.825 896.247 702.5 900.5C704.175 904.753 706.5 911.5 706.5 911.5C706.5 911.5 709.423 918.989 710.5 924C711.656 929.376 711.825 932.504 712 938C712.075 940.342 712.104 941.659 712 944C711.8 948.525 711.495 951.082 710.5 955.5C709.415 960.319 708.259 962.884 706.5 967.5C705.067 971.262 704.382 973.442 702.5 977C701.106 979.635 699.933 980.887 698.5 983.5C696.736 986.717 694.5 992 694.5 992C694.5 992 697.699 988.462 699.5 986C700.747 984.295 701.328 983.257 702.5 981.5C703.672 979.743 704.438 978.826 705.5 977C706.598 975.113 707.003 973.942 708 972C709.515 969.047 712 964.5 712 964.5C712 964.5 710.456 972.196 709 977C706.991 983.628 705.762 987.391 702.5 993.5C700.452 997.336 699.036 999.365 696.567 1002.9L696.5 1003C694.109 1006.43 692.701 1008.31 690 1011.5C687.41 1014.56 685.928 1016.27 683 1019C680.058 1021.75 678.25 1023.12 675 1025.5C670.89 1028.51 668.392 1029.92 664 1032.5C662.642 1033.3 661.88 1033.74 660.5 1034.5C656.135 1036.89 653.616 1038.14 649 1040C644.419 1041.85 641.771 1042.72 637 1044C630.86 1045.65 627.265 1045.92 621 1047C618.659 1047.4 617.358 1047.71 615 1048C608.603 1048.78 604.905 1048.7 598.5 1048C595.947 1047.72 594.532 1047.43 592 1047C586.299 1046.03 583.057 1045.6 577.5 1044C572.191 1042.47 569.278 1041.24 564.266 1039.11L564 1039C558.612 1036.72 555.634 1035.31 550.5 1032.5C545.887 1029.98 543.369 1028.42 539 1025.5C535.397 1023.09 533.296 1021.82 530 1019C526.851 1016.31 525.229 1014.62 522.5 1011.5C519.746 1008.36 518.391 1006.43 516 1003C513.489 999.401 512.107 997.349 510 993.5C508.029 989.899 506.953 987.839 505.5 984C503.99 980.012 503.484 977.65 502.5 973.5C501.537 969.438 500.5 963 500.5 963C500.5 963 502.64 967.568 504 970.5C505.177 973.036 505.668 974.542 507 977C508.548 979.857 509.336 981.575 511.5 984C513.531 986.276 517.5 989 517.5 989C517.5 989 513.707 983.911 511.5 980.5C509.644 977.632 508.58 976.028 507 973L506.864 972.74C505.653 970.421 504.928 969.032 504 966.5C502.484 962.364 502.215 959.847 501.5 955.5C500.958 952.202 500.701 950.336 500.5 947C500.289 943.492 500.335 941.511 500.5 938C500.685 934.08 500.858 931.872 501.5 928C502.189 923.842 502.833 921.55 504 917.5C505.026 913.94 505.76 911.991 507 908.5C508.117 905.356 508.746 903.592 510 900.5C511.282 897.34 511.95 895.537 513.5 892.5C515.05 889.463 516 888 516 888C516 888 515.355 890.429 515 892C514.257 895.288 514.203 896.729 513.5 900.5C512.923 903.595 512.721 905.359 512.5 908.5C512.215 912.549 512.317 914.856 512.494 918.875L512.5 919C512.691 923.309 512.647 925.772 513.5 930C514.184 933.392 514.853 935.236 516 938.5C517.479 942.709 518.11 945.233 520.5 949C523.386 953.548 530 959 530 959C530 959 527.069 955.473 525.5 953C523.066 949.165 520.5 942.5 520.5 942.5C520.5 942.5 518.366 937.722 517.5 934.5C516.634 931.278 516.323 926.6 516 921.5C515.605 915.264 515.229 911.701 516 905.5C516.643 900.33 517.608 897.521 519 892.5C520.204 888.156 520.845 885.693 522.5 881.5C524.168 877.276 525.323 875.583 527.5 872C530.117 867.694 532.071 865.21 535 861.5C537.929 857.79 539.976 856.101 543.5 853C546.843 850.059 548.807 848.488 552.5 846C555.333 844.092 556.756 843.07 560 842C562.439 841.195 566.5 840.5 566.5 840.5C566.5 840.5 560.14 848.288 557 853C553.193 858.713 552.195 862.711 550.544 869.325L550.5 869.5C548.739 876.55 548.991 880.783 549.5 888C549.721 891.141 549.916 892.906 550.5 896C551.679 902.25 553.098 905.611 555.5 911.5C557.38 916.11 558.572 918.654 561 923C563.615 927.681 568.5 934.5 568.5 934.5C568.5 934.5 564.137 941.93 562 947C559.458 953.032 558.285 956.581 557 963C555.577 970.107 554.746 974.291 555.5 981.5C556.354 989.668 558.461 994.089 562 1001.5C566.529 1010.98 570.261 1015.88 577.5 1023.5C584.684 1031.06 595 1040 598.5 1040C602 1040 600 1003 600 1003L583.5 1017L595 997L563.5 990.5L595 986L585 959L600 977Z" fill="#4DE9D0" stroke="#4DE9D0"/>
                            </g>
                            <g transform="scale(0.78) translate(0 -40)">
                                <path d="M606 0V801.5" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <g transform="rotate(120) scale(0.78) translate(0 -40)">
                                <path d="M606 0V801.5" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <g transform="rotate(-120) scale(0.78) translate(-2 -42)"> 
                                <path d="M606 0V801.5" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <g transform="rotate(35)"> 
                                <path d="M71 664.5L275.75 771.75L480.5 879" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <g transform="rotate(-95)"> 
                                <path d="M71 664.5L275.75 771.75L480.5 879" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <g transform="rotate(-145)"> 
                                <path d="M71 664.5L275.75 771.75L480.5 879" stroke="#96AFB8" stroke-width="5"/>
                            </g>
                            <path d="M71 664.5L275.75 771.75L480.5 879" stroke="#96AFB8" stroke-width="5"/>
                            <path d="M2.5 945H465" stroke="#96AFB8" stroke-width="5"/>
                            <path d="M1213.5 945H749" stroke="#96AFB8" stroke-width="5"/>
                            <path d="M1120.5 619.5L728.5 869" stroke="#96AFB8" stroke-width="5"/>
                            <circle cx="607" cy="944" r="141.5" stroke="#96AFB8" stroke-width="5"/>
                            <circle cx="606" cy="943" r="238.5" stroke="#24C2E5" stroke-width="5"/>
                            <circle cx="606" cy="943" r="266.5" stroke="#96AFB8" stroke-width="5"/>
                            <circle cx="608.5" cy="943.5" r="477" stroke="#24C2E5" stroke-width="5"/>
                            <circle cx="608.5" cy="946.5" r="564" stroke="#96AFB8" stroke-width="5"/>
                            <circle cx="608.5" cy="942.5" r="606" stroke="#24C2E5" stroke-width="5"/>
                            <g id="frontGroundGates1">
                                <circle cx="544" cy="945" r="412.5" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates2">
                                <circle cx="607.5" cy="1384.5" r="127" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates3">
                                <circle cx="322" cy="1208" r="67.5" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates9">
                                <circle cx="491.5" cy="699.5" r="9.5" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates10">
                                <circle cx="531" cy="470" r="13" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates11">
                                <circle cx="131.5" cy="946.5" r="13.5" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates12">
                                <circle cx="322.5" cy="1206.5" r="17.5" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates13">
                                <circle cx="606.5" cy="1489.5" r="21.5" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates15">
                                <circle cx="941.5" cy="1449.5" r="7.5" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates16">
                                <circle cx="1056" cy="1110" r="9" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates17">
                                <circle cx="820" cy="1044" r="9" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates18">
                                <circle cx="1074" cy="842" r="8" fill="#24C2E5"/>
                            </g>
                            <g id="frontGroundGates19">
                                <circle cx="606" cy="596" r="32.5" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates20">
                                <circle cx="605.5" cy="597.5" r="16" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates21">
                                <circle cx="850.5" cy="944.5" r="22" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates22">
                                <circle cx="961" cy="1266" r="12.5" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates23">
                                <circle cx="755.5" cy="1299.5" r="9" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates24">
                                <circle cx="888.5" cy="562.5" r="47" stroke="#24C2E5" stroke-width="5"/>
                            </g>
                            <g id="frontGroundGates25">
                                <mask id="mask0_594_193" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="319" y="944" width="571" height="570">
                                    <circle cx="604.997" cy="1229" r="282.5" stroke="#24C2E5" stroke-width="5"/>
                                </mask>
                                <g mask="url(#mask0_594_193)">
                                    <path d="M611.999 1276C611.999 1355.53 760 951.19 751.5 949.5C862.5 949.5 1280.5 1503.5 548.5 1572.5C122 1352 379.469 962.5 458.998 962.5L611.999 1276Z" fill="#24C2E5a5"/>
                                </g>
                            </g>
                            <path d="M1159.5 1064.5L1201.5 1075.5M1158 1069L1168.5 1071.75M1200 1080L1193.5 1078.3M1155.5 1082L1165.5 1084.75M1195.5 1093L1180 1088.74M1150.5 1099L1160.5 1102.25M1190.5 1112L1170.5 1105.5M1144 1119.5L1184 1132.5M1138 1140L1176 1155M1138 1145L1174 1159.5L1163.5 1157.5L1157 1159.5L1150.5 1164L1133 1156.5L1140.5 1140L1159.5 1132.5L1144 1127.5L1148.5 1117.5L1162 1119.5C1162 1119.5 1161.53 1109.68 1157 1107C1154.76 1105.67 1150.5 1105.5 1150.5 1105.5M1121.5 1182.5L1136 1189.25M1158 1199.5L1136 1189.25M1111 1201.5L1146.5 1220M1106 1213.5C1106 1213.5 1110.53 1217.89 1113.88 1220.12C1115.35 1221.11 1117.32 1222.15 1119.02 1223M1140.5 1234L1127 1226.96M1094.5 1232.5L1109.75 1242M1129 1254L1115.5 1245.59M1092.5 1234C1092.5 1234 1097.54 1238.77 1101.12 1241.38C1104.34 1243.71 1109.75 1246.75 1109.75 1246.75L1127 1257.5M1069.5 1269.5L1073.5 1272.37M1103 1293.5L1073.5 1272.37M1048 1297L1051.65 1300M1081.5 1324.5L1051.65 1300M1044.5 1300L1063.99 1316M1078 1327.5L1063.99 1316M1038 1310L1069.5 1337M1025 1327.5L1044.5 1345.32M1054 1354L1044.5 1345.32M1170.5 1105.5L1174 1093M1170.5 1105.5L1160.5 1102.25M1154 1091L1160.5 1102.25M1180 1088.74L1193.5 1078.3M1180 1088.74L1184 1075.81M1180 1088.74L1165.5 1084.75M1193.5 1078.3L1184 1075.81M1184 1075.81L1168.5 1071.75M1168.5 1071.75L1165.5 1084.75M1165.5 1084.75L1159.5 1075.5M1117.5 1192.5C1117.5 1192.5 1122.28 1194.55 1125.5 1194.5C1128.53 1194.45 1130.54 1194.27 1133 1192.5C1134.4 1191.49 1136 1189.25 1136 1189.25M1131 1220.12L1127 1226.96M1127 1226.96L1122.75 1224.75C1122.75 1224.75 1121.07 1224.02 1119.02 1223M1125.5 1216L1119.02 1223M1136 1241.38C1136 1241.38 1128.62 1234.76 1122.75 1234C1120.72 1233.74 1119.4 1233.22 1117.5 1234C1113.25 1235.74 1115.5 1245.59 1115.5 1245.59M1115.5 1245.59L1109.75 1242M1101.12 1220.12L1109.75 1242M1073.5 1266.5L1085.5 1275M1094.5 1306.5L1079 1296C1079 1296 1079.21 1291.73 1079 1289C1078.8 1286.44 1078.64 1284.99 1078 1282.5C1076.92 1278.31 1073.5 1272.37 1073.5 1272.37M1090.5 1312L1073.5 1300C1073.5 1300 1069.97 1301.91 1067.5 1302.5C1063.89 1303.36 1061.62 1303.31 1058 1302.5C1055.4 1301.92 1051.65 1300 1051.65 1300M1069.5 1334L1063.99 1316M1062 1344.5L1041.5 1327.5L1044.5 1345.32M1058 1334L1049 1326M1125.5 1175L1162 1192.5L1151.5 1184L1148.5 1178.5V1171.5L1129 1164L1125.5 1175ZM1083.5 1249L1117.5 1271.5C1117.5 1271.5 1119.68 1262.51 1117.5 1257.5C1116.11 1254.31 1114.63 1252.77 1112 1250.5C1109.91 1248.7 1108.56 1247.79 1106 1246.75C1101.82 1245.05 1098.99 1245.13 1094.5 1245.59C1090.02 1246.04 1083.5 1249 1083.5 1249ZM1081.5 1252.5L1115.5 1275C1115.5 1275 1107 1279.69 1101.12 1279.5C1097.67 1279.39 1095.52 1279.19 1092.5 1277.5C1088.88 1275.47 1087.69 1273.03 1085.5 1269.5C1083.37 1266.08 1082.17 1263.97 1081.5 1260C1081.01 1257.11 1081.5 1252.5 1081.5 1252.5Z" stroke="#24C2E5" stroke-width="3"/>
                        </g>
                        <defs>
                        <filter id="drop-shadow" x="0%" y="0%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#24C2E5" flood-opacity="1">
                                <animate attributeName="stdDeviation" values="1;3;1" dur="1s" repeatCount="indefinite"/>
                                <animate attributeName="color" values="#24C2E5;#24C2E5;#24C2E5" dur="1s" repeatCount="indefinite"/>
                            </feDropShadow>
                        </filter>

                        <filter id="drop-shadow2" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow id="drop-shadow" dx="0" dy="0" stdDeviation="0" flood-color="#FF0000" flood-opacity="1"/>
                        </filter>
                        </defs>
                        </svg>
                    </div>
                    <div class='gateWorld' id='gate1'>
                    </div>
                    <div class='gateWorld' id='gate2'>
                    </div>
                    <div class='gateWorld' id='gate3'>
                    </div>
                    <div class='laserHologram' id="base">
                        <img src='./assets/images/gate.gif' alt='laserHologram'>
                    </div>
                    <div class='laserHologram' id="laser">
                        <span></span>
                        <div class='laserHoloWrapper'>
                            <img src='./assets/images/laser1.gif' alt='laserHologram'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        const gateWorld = this.shadowRoot.querySelectorAll('.gateWorld');
        gateWorld.forEach((gate, index) => {
            const gatePath = `
                <div class='gatePath' id='gatePath${index + 1}'>
                    <svg width="176" height="167" viewBox="0 0 176 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="89" cy="84" r="57.5" stroke="#00FFB3"/>
                    <circle cx="88.5" cy="83.5" r="64" stroke="#00FFB3"/>
                    <circle cx="88.5" cy="83.5" r="67" stroke="#00FFB3"/>
                    <path d="M56.5 17.5C40 26 29 40 29 40M29 40C27.0474 43.5147 24 49 24 49L5 58L12.5 44.5C12.5 44.5 22 44.5 29 40Z" stroke="#00FFB3" stroke-width="3"/>
                    <path d="M120.5 17.5C137 26 148 40 148 40M148 40C149.953 43.5147 153 49 153 49L172 58L164.5 44.5C164.5 44.5 155 44.5 148 40Z" stroke="#00FFB3" stroke-width="3"/>
                    <path d="M120.5 150C137 141.5 148 127.5 148 127.5M148 127.5C149.953 123.985 153 118.5 153 118.5L172 109.5L164.5 123C164.5 123 155 123 148 127.5Z" stroke="#00FFB3" stroke-width="3"/>
                    <path d="M56.5 150C40 141.5 29 127.5 29 127.5M29 127.5C27.0474 123.985 24 118.5 24 118.5L5 109.5L12.5 123C12.5 123 22 123 29 127.5Z" stroke="#00FFB3" stroke-width="3"/>
                    <path d="M80.5 12.5C87.462 11.5286 91.5668 11.3409 98.5 12.5C101.069 12.9296 105 14 105 14L99.5 9.5H95V6.5C95 6.5 101.73 10.7956 106.5 12.5C110.648 13.9822 117.5 15 117.5 15L98.5 6.5H105C105 6.5 97.7908 3.70385 93 2.5C91.254 2.06127 88.5 1.5 88.5 1.5C88.5 1.5 85.7454 2.05915 84 2.5C78.7912 3.81562 71 7 71 7L78.5 6.5L61 15C61 15 67.9078 14.1311 72 12.5C76.2306 10.8137 82 6.5 82 6.5V9.5H78.5L73 14C73 14 77.5417 12.9128 80.5 12.5Z" stroke="#00FFB3"/>
                    <circle cx="88.5" cy="6.60156" r="5" stroke="#00FFB3"/>
                    <circle cx="88.5" cy="6.5" r="3" stroke="#00FFB3"/>
                    <path d="M80.5 154.599C87.462 155.571 91.5668 155.758 98.5 154.599C101.069 154.169 105 153.098 105 153.098L99.5 157.6H95V160.6C95 160.6 101.73 156.304 106.5 154.599C110.648 153.116 117.5 152.098 117.5 152.098L98.5 160.6H105C105 160.6 97.7908 163.397 93 164.601C91.254 165.04 88.5 165.602 88.5 165.602C88.5 165.602 85.7454 165.042 84 164.601C78.7912 163.285 71 160.1 71 160.1L78.5 160.6L61 152.098C61 152.098 67.9078 152.967 72 154.599C76.2306 156.286 82 160.6 82 160.6V157.6H78.5L73 153.098C73 153.098 77.5417 154.186 80.5 154.599Z" stroke="#00FFB3"/>
                    <path d="M93.5 160.499C93.5 157.736 91.2613 155.497 88.5 155.497C85.7387 155.497 83.5 157.736 83.5 160.499C83.5 163.261 85.7387 165.5 88.5 165.5C91.2613 165.5 93.5 163.261 93.5 160.499Z" stroke="#00FFB3"/>
                    <path d="M91.5 160.601C91.5 158.943 90.1567 157.6 88.5 157.6C86.8433 157.6 85.5 158.943 85.5 160.601C85.5 162.258 86.8433 163.602 88.5 163.602C90.1567 163.602 91.5 162.258 91.5 160.601Z" stroke="#00FFB3"/>
                    <path d="M19.0311 62L19.2556 62.691H19.9822L19.3944 63.118L19.6189 63.809L18.5312 65L18.4433 63.809L18.0312 63L18.0801 62.691L18.5312 62.5L19.0311 62Z" fill="#00FFB2"/>
                    <path d="M18.0311 80L18.2556 80.691H18.9822L18.3944 81.118L18.6189 81.809L17.5312 83L17.4433 81.809L17.0312 81L17.0801 80.691L17.5312 80.5L18.0311 80Z" fill="#00FFB2"/>
                    <path d="M19.0311 94L19.2556 94.691H19.9822L19.3944 95.118L19.6189 95.809L18.5312 97L18.4433 95.809L18.0312 95L18.0801 94.691L18.5312 94.5L19.0311 94Z" fill="#00FFB2"/>
                    <path d="M17.0311 71L17.2556 71.691H17.9822L17.3944 72.118L17.6189 72.809L16.5312 74L16.4433 72.809L16.0312 72L16.0801 71.691L16.5312 71.5L17.0311 71Z" fill="#00FFB2"/>
                    <path d="M18.0312 68L18.9482 68.5535L19.9334 69.0365L19.5149 69.8615L19.2068 70.7135L18.0312 70.67L16.8557 70.7135L16.5476 69.8615L16.1291 69.0365L17.1143 68.5535L18.0312 68Z" fill="#00FFB2"/>
                    <path d="M16 86L16.9169 86.5535L17.9021 87.0365L17.4836 87.8615L17.1756 88.7135L16 88.67L14.8244 88.7135L14.5164 87.8615L14.0979 87.0365L15.0831 86.5535L16 86Z" fill="#00FFB2"/>
                    <path d="M17.8774 99.2827L18.2976 100.268L18.8144 101.236L17.9925 101.66L17.2444 102.171L16.3162 101.449L15.3371 100.797L15.5853 99.9254L15.7283 99.0113L16.8099 99.1955L17.8774 99.2827Z" fill="#00FFB2"/>
                    <path d="M22 107L22.9169 107.553L23.9021 108.036L23.4836 108.862L23.1756 109.714L22 109.67L20.8244 109.714L20.5164 108.862L20.0979 108.036L21.0831 107.553L22 107Z" fill="#00FFB2"/>
                    <path d="M16.0312 77L16.9482 77.5535L17.9334 78.0365L17.5149 78.8615L17.2068 79.7135L16.0312 79.67L14.8557 79.7135L14.5476 78.8615L14.1291 78.0365L15.1143 77.5535L16.0312 77Z" fill="#00FFB2"/>
                    <path d="M18.5 91L19.1877 91.369L19.9266 91.691L19.6127 92.241L19.3817 92.809L18.5 92.78L17.6183 92.809L17.3873 92.241L17.0734 91.691L17.8123 91.369L18.5 91Z" fill="#00FFB2"/>
                    <path d="M14.9021 70L15.8047 70.5L16.8042 71.0365L15.6287 71.6771L16.0777 72.7135L15.0312 72.5L13.7266 72.7135L13.3047 71.8496L13 71.0365L13.3047 70H14.9021Z" fill="#00FFB2"/>
                    <path d="M9.5 85.5017C10.1667 84.6684 11.9 83.1017 13.5 83.5017C14.5 87.5011 17.2 96.3 20 99.5C18.8333 95.6667 16.5 87.2 16.5 84C16.1667 79.8333 16.4 70.4 20 66C18.1667 68 14.6 73.5 15 79.5L12 80.5L9.5 81C9.16667 81 8.2 80.4 7 78C5.83333 79.6667 2.9 83.7 0.5 86.5C1.5 85.8333 4.1 84 6.5 82C7 82.3333 8.3 83.5003 9.5 85.5017Z" fill="url(#paint0_linear_601_263)"/>
                    <path d="M21 65L21.4745 65.1843L22 65.382L21.382 65.618L21.618 66L21.0679 65.9213L20.382 66L20.1602 65.6816L20 65.382L20.1602 65H21Z" fill="#00FFB2"/>
                    <path d="M15 75L15.4745 75.3685L16 75.7639L15.382 76.2361L15.618 77L15.0679 76.8426L14.382 77L14.1602 76.3633L14 75.7639L14.1602 75H15Z" fill="#00FFB2"/>
                    <path d="M16 90L16.4745 90.3685L17 90.7639L16.382 91.2361L16.618 92L16.0679 91.8426L15.382 92L15.1602 91.3633L15 90.7639L15.1602 90H16Z" fill="#00FFB2"/>
                    <path d="M20 101L20.4745 101.369L21 101.764L20.382 102.236L20.618 103L20.0679 102.843L19.382 103L19.1602 102.363L19 101.764L19.1602 101H20Z" fill="#00FFB2"/>
                    <path d="M13.9021 80L14.8047 80.5L15.8042 81.0365L14.6287 81.6771L15.0777 82.7135L14.0312 82.5L12.7266 82.7135L12.3047 81.8496L12 81.0365L12.3047 80H13.9021Z" fill="#00FFB2"/>
                    <path d="M18.031 74L18.48 75.0365H19.9331L19.3082 76.7135H19.2066L17.3045 75.6771L16.1289 75.0365H18.031V74Z" fill="#00FFB2"/>
                    <path d="M17.2306 89.4519L18.3114 89.7801L19.2515 88.6721L20.126 90.2336L20.0603 90.3111L18.0393 91.0909L16.7903 91.5729L18.0209 90.1225L17.2306 89.4519Z" fill="#00FFB2"/>
                    <path d="M17.031 92L17.48 93.0365H18.9331L18.3082 94.7135H18.2066L16.3045 93.6771L15.1289 93.0365H17.031V92Z" fill="#00FFB2"/>
                    <path d="M19.9021 104L20.3511 105.036H21.8042L21.1793 106.714H21.0777L19.1756 105.677L18 105.036H19.9021V104Z" fill="#00FFB2"/>
                    <path d="M16.031 83L16.48 84.0365H17.9331L17.3082 85.7135H17.2066L15.3045 84.6771L14.1289 84.0365H16.031V83Z" fill="#00FFB2"/>
                    <path d="M18.67 96.2362L18.4539 97.3449L19.6521 98.167L18.1881 99.1964L18.1043 99.1388L17.1222 97.2081L16.5152 96.0148L18.0837 97.0909L18.67 96.2362Z" fill="#00FFB2"/>
                    <path d="M157.469 62L157.244 62.691H156.518L157.106 63.118L156.881 63.809L157.969 65L158.057 63.809L158.469 63L158.42 62.691L157.969 62.5L157.469 62Z" fill="#00FFB2"/>
                    <path d="M158.469 80L158.244 80.691H157.518L158.106 81.118L157.881 81.809L158.969 83L159.057 81.809L159.469 81L159.42 80.691L158.969 80.5L158.469 80Z" fill="#00FFB2"/>
                    <path d="M157.469 94L157.244 94.691H156.518L157.106 95.118L156.881 95.809L157.969 97L158.057 95.809L158.469 95L158.42 94.691L157.969 94.5L157.469 94Z" fill="#00FFB2"/>
                    <path d="M159.469 71L159.244 71.691H158.518L159.106 72.118L158.881 72.809L159.969 74L160.057 72.809L160.469 72L160.42 71.691L159.969 71.5L159.469 71Z" fill="#00FFB2"/>
                    <path d="M158.469 68L157.552 68.5535L156.567 69.0365L156.985 69.8615L157.293 70.7135L158.469 70.67L159.644 70.7135L159.952 69.8615L160.371 69.0365L159.386 68.5535L158.469 68Z" fill="#00FFB2"/>
                    <path d="M160.5 86L159.583 86.5535L158.598 87.0365L159.016 87.8615L159.324 88.7135L160.5 88.67L161.676 88.7135L161.984 87.8615L162.402 87.0365L161.417 86.5535L160.5 86Z" fill="#00FFB2"/>
                    <path d="M158.623 99.2827L158.202 100.268L157.686 101.236L158.508 101.66L159.256 102.171L160.184 101.449L161.163 100.797L160.915 99.9254L160.772 99.0113L159.69 99.1955L158.623 99.2827Z" fill="#00FFB2"/>
                    <path d="M154.5 107L153.583 107.553L152.598 108.036L153.016 108.862L153.324 109.714L154.5 109.67L155.676 109.714L155.984 108.862L156.402 108.036L155.417 107.553L154.5 107Z" fill="#00FFB2"/>
                    <path d="M160.469 77L159.552 77.5535L158.567 78.0365L158.985 78.8615L159.293 79.7135L160.469 79.67L161.644 79.7135L161.952 78.8615L162.371 78.0365L161.386 77.5535L160.469 77Z" fill="#00FFB2"/>
                    <path d="M158 91L157.312 91.369L156.573 91.691L156.887 92.241L157.118 92.809L158 92.78L158.882 92.809L159.113 92.241L159.427 91.691L158.688 91.369L158 91Z" fill="#00FFB2"/>
                    <path d="M161.598 70L160.695 70.5L159.696 71.0365L160.871 71.6771L160.422 72.7135L161.469 72.5L162.773 72.7135L163.195 71.8496L163.5 71.0365L163.195 70H161.598Z" fill="#00FFB2"/>
                    <path d="M167 85.5017C166.333 84.6684 164.6 83.1017 163 83.5017C162 87.5011 159.3 96.3 156.5 99.5C157.667 95.6667 160 87.2 160 84C160.333 79.8333 160.1 70.4 156.5 66C158.333 68 161.9 73.5 161.5 79.5L164.5 80.5L167 81C167.333 81 168.3 80.4 169.5 78C170.667 79.6667 173.6 83.7 176 86.5C175 85.8333 172.4 84 170 82C169.5 82.3333 168.2 83.5003 167 85.5017Z" fill="url(#paint1_linear_601_263)"/>
                    <path d="M155.5 65L155.025 65.1843L154.5 65.382L155.118 65.618L154.882 66L155.432 65.9213L156.118 66L156.34 65.6816L156.5 65.382L156.34 65H155.5Z" fill="#00FFB2"/>
                    <path d="M161.5 75L161.025 75.3685L160.5 75.7639L161.118 76.2361L160.882 77L161.432 76.8426L162.118 77L162.34 76.3633L162.5 75.7639L162.34 75H161.5Z" fill="#00FFB2"/>
                    <path d="M160.5 90L160.025 90.3685L159.5 90.7639L160.118 91.2361L159.882 92L160.432 91.8426L161.118 92L161.34 91.3633L161.5 90.7639L161.34 90H160.5Z" fill="#00FFB2"/>
                    <path d="M156.499 101L156.025 101.369L155.499 101.764L156.117 102.236L155.881 103L156.431 102.843L157.117 103L157.339 102.363L157.499 101.764L157.339 101H156.499Z" fill="#00FFB2"/>
                    <path d="M162.598 80L161.695 80.5L160.696 81.0365L161.871 81.6771L161.422 82.7135L162.469 82.5L163.773 82.7135L164.195 81.8496L164.5 81.0365L164.195 80H162.598Z" fill="#00FFB2"/>
                    <path d="M158.469 74L158.02 75.0365H156.567L157.192 76.7135H157.293L159.196 75.6771L160.371 75.0365H158.469V74Z" fill="#00FFB2"/>
                    <path d="M159.269 89.4519L158.189 89.7801L157.248 88.6721L156.374 90.2336L156.44 90.3111L158.461 91.0909L159.71 91.5729L158.479 90.1225L159.269 89.4519Z" fill="#00FFB2"/>
                    <path d="M159.469 92L159.02 93.0365H157.567L158.192 94.7135H158.293L160.196 93.6771L161.371 93.0365H159.469V92Z" fill="#00FFB2"/>
                    <path d="M156.598 104L156.149 105.036H154.696L155.321 106.714H155.422L157.324 105.677L158.5 105.036H156.598V104Z" fill="#00FFB2"/>
                    <path d="M160.47 83L160.021 84.0365H158.568L159.193 85.7135H159.294L161.196 84.6771L162.372 84.0365H160.47V83Z" fill="#00FFB2"/>
                    <path d="M157.83 96.2362L158.046 97.3449L156.848 98.167L158.312 99.1964L158.396 99.1388L159.378 97.2081L159.985 96.0148L158.416 97.0909L157.83 96.2362Z" fill="#00FFB2"/>
                    <defs>
                    <linearGradient id="paint0_linear_601_263" x1="2" y1="84.5" x2="18.5" y2="82.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFB2"/>
                    <stop offset="1" stop-color="#00FFB2" stop-opacity="0.65"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_601_263" x1="174.5" y1="84.5" x2="158" y2="82.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00FFB2"/>
                    <stop offset="1" stop-color="#00FFB2" stop-opacity="0.65"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    <img id="a" src="./assets/images/portal0.gif" alt="gate">
                    <img id="b" src="./assets/images/portal2.gif" alt="gate">
                    <img id="c" src="${
                        index === 0 ? './assets/images/egypt.png' : index === 1 ? './assets/images/space.png' : './assets/images/factory.png'
                    }" alt="gate">
                </div> 
            `;
            gate.innerHTML += gatePath;
        });
        console.log(box1);
        let executedDate = new Date() - 2000;
        let executedDate2 = new Date() - 2000;
        let timeOut1;
        let timeOut2;
        let timeOut3;
        let timeOut4;
        let timeOut5;
        function triggerKey() {
            clearTimeout(timeOut1);
            clearTimeout(timeOut2);
            clearTimeout(timeOut3);
            clearTimeout(timeOut4);
            clearTimeout(timeOut5);
            
            this.shadowRoot.querySelector('#frontGroundGatesBase').style.transform = `rotate(${-this.__angle}deg)`;
            this.shadowRoot.querySelector('.laserHoloWrapper').classList.remove('animated');
            this.shadowRoot.querySelector('.laserHologram#laser').classList.remove('animated2');
            this.shadowRoot.querySelector('.laserHologram#base').classList.remove('animated3');
            void this.shadowRoot.querySelector('.laserHoloWrapper').offsetWidth;
            void this.shadowRoot.querySelector('.laserHologram#laser').offsetWidth;
            void this.shadowRoot.querySelector('.laserHologram#base').offsetWidth;
            this.shadowRoot.querySelector('.laserHoloWrapper').classList.add('animated');
            this.shadowRoot.querySelector('.laserHologram#laser').classList.add('animated2');
            this.shadowRoot.querySelector('.laserHologram#base').classList.add('animated3');
            this.shadowRoot.querySelectorAll('.gatePath').forEach((gatePathC, index) => {

                gatePathC.querySelector('#a').classList.remove('animatedImg0');
                gatePathC.querySelector('#a').offsetWidth;
                gatePathC.querySelector('#a').classList.add('animatedImg00');
                gatePathC.querySelector('#b').classList.remove('animatedImg1');
                gatePathC.querySelector('#b').offsetWidth;
                gatePathC.querySelector('#b').classList.add('animatedImg11');
                gatePathC.querySelector('#c').classList.remove('animatedImg2', 'animatedImg222');
                gatePathC.querySelector('#c').offsetWidth;
                gatePathC.querySelector('#c').classList.add('animatedImg22');
            });

            timeOut1 = setTimeout(() => {
                this.shadowRoot.querySelector('.gatesFrontGround').style.transform = `rotate(${this.__angle}deg)`;
                this.shadowRoot.querySelector('#gate1').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${this.__angle}deg)`;
                this.shadowRoot.querySelector('#gate2').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${120 + this.__angle}deg)`;
                this.shadowRoot.querySelector('#gate3').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${240 + this.__angle}deg)`;

                
                if (this.__direction === 1) {
                    this.shadowRoot.querySelector('#gate1').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${this.__angle}deg)`;
                }
                if (this.__direction === 0) {
                    this.shadowRoot.querySelector('#gate2').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${120 + this.__angle}deg)`;
                }
                if (this.__direction === 2) {
                    this.shadowRoot.querySelector('#gate3').style.transform = `translate(-50%, -50%) translateZ(300px) rotate(${240 + this.__angle}deg)`;
                }
            }, 500);
            let indx = this.__direction;
            if (indx === 0)
                indx = 1;
            else if (indx === 1)
                indx = 0;
            timeOut2 = setTimeout(() => {
                console.log(indx);
            
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#b').classList.remove('animatedImg11');
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#b').offsetWidth;
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#b').classList.add('animatedImg1');
            }, 2000);
            timeOut3 = setTimeout(() => {
                console.log(indx);
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#a').classList.remove('animatedImg00');
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#a').offsetWidth;
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#a').classList.add('animatedImg0');
            }, 2200);
            timeOut4 = setTimeout(() => {
                console.log(indx);
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#a').classList.remove('animatedImg0');
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#a').offsetWidth;
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').classList.remove('animatedImg22', 'animatedImg222');
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').offsetWidth;
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').classList.add('animatedImg2');
            }, 2700);
            timeOut5 = setTimeout(() => {
                console.log(indx);
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').classList.remove('animatedImg2', 'animatedImg22');
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').offsetWidth;
                this.shadowRoot.querySelectorAll('.gatePath').item(indx).querySelector('#c').classList.add('animatedImg222');
            }, 3500);
        }
        triggerKey.call(this);
        document.addEventListener('keydown', (e) => {
            if (new Date() - executedDate > 1000) {
                executedDate = new Date();
                console.log(e.key);
                if (e.key === 'ArrowLeft') {
                    this.__angle += 120;
                    this.__direction = (this.__direction + 1) % 3;
                } if (e.key === 'ArrowRight') {
                    this.__angle -= 120;
                    this.__direction = (this.__direction + 2) % 3;
                }
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    triggerKey.call(this);
                }
                if (e.key === 'Enter') {
                    this.shadowRoot.querySelector('.gates__content').style.transform = 'translateY(1010px) translateZ(70px) rotateX(10deg)';
                }
            }
        });
        document.addEventListener('wheel', (e) => {
            if (new Date() - executedDate2 > 500) {
                executedDate2 = new Date();
                if (e.deltaY > 0) {
                    this.__switch = (this.__switch + 1) % 6;
                } else {
                    this.__switch = (this.__switch + 5) % 6;
                }
                console.log(this.__switch);
                if (this.__switch === 0)
                    this.shadowRoot.querySelector('.gates__content').style.transform = ``;
                if (this.__switch === 1)
                    this.shadowRoot.querySelector('.gates__content').style.transform = `translateY(${-500}px) translateZ(${-100}px) translateX(${0}px) rotate(30deg)`;
                if (this.__switch === 2)
                    this.shadowRoot.querySelector('.gates__content').style.transform = `translateY(${-500}px) translateZ(${0}px) translateX(${-100}px) rotate(-30deg)`;
                if (this.__switch === 3)
                    this.shadowRoot.querySelector('.gates__content').style.transform = `translateY(${-200}px) translateZ(${0}px) translateX(${100}px) rotate(-30deg)`;
                if (this.__switch === 4)
                    this.shadowRoot.querySelector('.gates__content').style.transform = `translateY(${-800}px) translateZ(${-500}px) translateX(${0}px) rotateX(320deg)`;
                if (this.__switch === 5)
                    this.shadowRoot.querySelector('.gates__content').style.transform = `translateY(${-1000}px) translateZ(${-100}px) translateX(${0}px) rotateX(350deg)`;

            }
        });
        this.shadowRoot.querySelector('.gatesFrontGround').style.transform = `rotate(${this.__angle}deg)`;
    }
}

customElements.define('pop-up-gates', PopUpGates);

function createGates() {
    const gates = document.createElement('pop-up-gates');
    const home = document.querySelector('.home');
    const bg = document.querySelector('background-component');

    gates.setAttribute('id', 'gates');
    
    document.body.appendChild(gates);
    document.body.removeChild(home);
    document.body.removeChild(bg);
}