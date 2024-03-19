class PopUpGates extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.__angle = 0;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const id = this.getAttribute('id');
        this.shadowRoot.innerHTML = `
        <style>
            .bgWrapper2Wrapper {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
            }
            .bgWrapper2 {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -2;
                left: 50%;
                right: 50%;
                transition: 1s ease-in-out;
                animation: moveBackground 5s linear forwards;
            }
            @keyframes moveBackground {
                0% {
                    transform: translate(-50%, -30%) scale(2);
                }
                50% {
                    transform: translate(-50%, -10%) scale(2);
                }
                100% {
                    transform: translate(-50%, 0%) scale(2);
                }
            }
            #box22 {
                background-color: rgb(0, 100, 255);
            }
            .boxx
            {
                position: absolute;
                left: 0;
                top: 0;
                width: 2px;
                height: 2px;
                background-color: rgb(255, 255, 255); /* Color of the first box */
                animation: moveStars 5s linear infinite;
            }
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

            .gates__content {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                animation: starGates 5s linear forwards;
                transform: rotateX(80deg) translateZ(50px) translateY(800px);
            }
            @keyframes starGates {
                0% {
                    transform: rotateX(0) translateZ(0) translateY(0);
                }
            }
            .gatesFrontGround {
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: 1s;
            }
            #frontGroundGatesBase {
                transition: 0.5s ease-in-out;
            }
        </style>
        <div class="gates">
            <div class="bgWrapper2Wrapper">
                <div class="bgWrapper2">
                    <div class="boxx" id="box11"></div>
                    <div class="boxx" id="box22"></div>
                </div>
            </div>
            <div class="gates__content">
                <div class="gatesFrontGround">
                    <svg width="1217" height="1883" viewBox="0 0 1217 1883" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: scale(2)">
                    <g transform="scale(0.5)">    
                        <path d="M246 457.5L259.25 475.5M272.5 493.5L259.25 475.5M259.25 475.5C259.25 475.5 261.387 482.423 262 487C262.804 492.999 262 502.5 262 502.5L260.5 503.5L250.841 491.5M244 483L250.841 491.5M250.841 491.5L245 495.5M245 495.5L226 472M245 495.5L238 501.5M238 501.5L231.5 493.5M238 501.5L248.5 513L244 517L223 493.5V511.5L205.5 490L195.5 499.5L197.469 501.5M227.5 532L197.469 501.5M197.469 501.5V520L186 509L218.5 540.5L215.5 542.5L183 511.5L170.5 523.5L171.5 525L184.5 538.5C186.843 537.328 188.003 536.292 190.5 535.5C192.764 534.782 194.126 534.423 196.5 534.5C198.49 534.564 199.595 534.921 201.5 535.5C204.175 536.313 205.681 536.939 208 538.5C209.951 539.813 212.5 542.5 212.5 542.5L189.5 570.5C189.5 570.5 186.096 567.425 184.5 565C182.963 562.665 182.376 561.155 181.5 558.5C180.564 555.664 179.858 553.984 180 551C180.115 548.587 181.33 547.409 181.5 545C181.569 544.026 181.5 542.5 181.5 542.5L166.5 528.5L153.5 542.5L188.5 570.5L185.5 573.5M185.5 573.5L172.5 562M185.5 573.5L175 585.5L173.5 584.326M140.5 558.5L142 559.674M142 559.674C142 559.674 144.016 557.87 145.5 557C147.314 555.937 148.436 555.402 150.5 555C152.608 554.59 153.876 554.68 156 555C158.442 555.368 159.795 555.888 162 557C164.86 558.442 166.447 559.542 168.5 562C169.96 563.748 170.553 564.929 171.5 567C172.604 569.415 173.015 570.889 173.5 573.5C174.272 577.657 173.5 584.326 173.5 584.326M142 559.674L173.5 584.326M172.5 588.5L170.5 587.007M170.5 587.007L137 562C137 562 136.143 565.629 136 568C135.775 571.724 135.557 574.06 137 577.5C137.609 578.952 139 581 139 581C139 581 140.457 584.058 142 585.5C143.914 587.289 145.627 587.39 148 588.5C149.742 589.315 150.606 590.168 152.5 590.5C153.846 590.736 154.633 590.5 156 590.5C158.343 590.5 159.719 591.034 162 590.5C163.872 590.062 164.718 589.223 166.5 588.5C168.045 587.873 170.5 587.007 170.5 587.007ZM171.5 588.5L162 601L127 576.5L123 579.5L138.343 590.074M160 605L141.5 592.25M141.5 592.25L149 617.5M141.5 592.25L138.343 590.074M138.343 590.074C138.343 590.074 139.222 594.15 138.343 596.5C137.766 598.04 137.308 599.003 136 600C134.111 601.44 132.354 601.316 130 601C127.404 600.652 124 598 124 598L115.5 590.5L108 599L124.176 610M138.343 635.5L145.5 624.5L131 614.64M138.343 635.5L123 625.023M138.343 635.5L131 645.5C131 645.5 127.149 641.803 124 641C121.54 640.373 120.005 640.588 117.5 641C115.063 641.401 113.51 641.564 111.5 643C110.376 643.803 109 645.5 109 645.5L89 633L125.5 656L122 661L84.5 640L86.5 643C86.5 643 89.3767 645.618 91 647.5C91.8166 648.447 92.2872 648.973 93 650C94.4936 652.152 95.1952 653.507 96 656C96.6118 657.895 97.3626 659.042 97 661C96.8085 662.034 96 663.5 96 663.5L115.5 673L111.5 678.5L93 668C93 668 90.6161 669.904 89 671C86.3942 672.767 85.0648 674.279 82 675C79.5291 675.581 78.0384 675 75.5 675C71.9853 675 66.5 675 66.5 675L105 693L102.5 696.5L98 694.449M101 610L116.376 620.5M116.376 620.5L124.176 610M116.376 620.5L123 625.023M124.176 610L131 614.64M131 614.64L123 625.023M63 678.5L98 694.449M98 694.449L78.5 702L94.5 711L93 716.5M93 716.5L54.5 700M93 716.5L91 720.5L74 712.5L79.5 729L86.5 732L83.5 738L66.5 730.808M44.5 721.5L64 729.75L66.5 730.808M66.5 730.808L61.5 742M66.5 730.808C66.5 730.808 70.3128 734.123 72.5 736.5C74.3793 738.542 75.7957 739.5 77 742C78.1305 744.347 78.5 748.5 78.5 748.5L77 755.5M77 755.5L68.5 752.057M77 755.5L66.5 751.247M37.5 739.5L53 745.778M53 745.778L36 755.5M53 745.778L54.5 746.386M54.5 746.386L48 759.5M54.5 746.386L66.5 751.247M68.5 752.057C68.5 752.057 68.5 753.546 68.5 754.5C68.5 756.062 68.0581 757.002 68.5 758.5C69.1651 760.755 72.5 763 72.5 763M68.5 752.057L66.5 751.247M66.5 751.247L63 763M72.5 769V768.5L33 755.5L31.5 757.5V759.5L72.5 772.5C70.5 778.833 66.5 791.4 66.5 791C66.5 790.6 51.8333 785.833 44.5 783.5L59 777.5L29.5 764.5L24 783.5V785L64 796M207.5 505.5L215.5 513.5" stroke="#FEFEFE" stroke-width="3"/>
                        <g id="frontGroundGatesBase">
                            <path d="M600 977L606 839.5L612.5 977L627 959L616 986L648 990.5L617.5 997L628.5 1017L612.5 1003C612.5 1003 610.5 1040 614 1040C617.5 1040 632.5 1025.5 632.5 1025.5C632.5 1025.5 645.008 1011.97 650 1001.5C653.535 994.087 655.53 989.655 656.5 981.5C657.354 974.315 656.929 970.093 655.5 963C654.221 956.654 652.709 953.196 650.159 947.365L650 947C647.796 941.959 643.5 934.5 643.5 934.5C643.5 934.5 647.73 927.632 650 923C651.963 918.994 654.5 912.5 654.5 912.5L661.5 896C661.5 896 662.669 891.161 663 888C663.756 880.791 663.25 876.534 661.5 869.5C659.81 862.708 658.222 858.928 654.5 853C651.695 848.532 646 840.5 646 840.5C646 840.5 652.661 842.455 655.5 844C658.973 845.89 660.765 847.227 664 849.5C667.419 851.902 669.486 853.105 672.5 856C675.097 858.494 676.268 860.175 678.5 863C681.891 867.293 683.715 869.791 686.5 874.5C689.168 879.01 690.745 881.563 692.5 886.5C694.373 891.769 694.679 894.969 695.5 900.5C696.048 904.19 696.282 906.276 696.5 910L696.523 910.391C696.783 914.83 696.938 917.467 696.5 922C695.963 927.566 694.963 930.603 693.5 936L693.38 936.443C692.274 940.523 691.615 942.958 690 947C688.057 951.866 684 959 684 959C684 959 689.044 953.219 691.5 949C693.346 945.829 693.938 943.819 695.5 940.5C697.062 937.181 697.713 935.12 698.5 931.5C699.21 928.234 699.264 926.334 699.5 923C699.858 917.936 699.966 915.055 699.5 910C699.247 907.25 699.02 905.712 698.5 903C697.893 899.837 697.629 898.116 697 895C696.447 892.259 695.5 888 695.5 888C695.5 888 697.467 889.705 698.5 891C698.5 891 700.825 896.247 702.5 900.5C704.175 904.753 706.5 911.5 706.5 911.5C706.5 911.5 709.423 918.989 710.5 924C711.656 929.376 711.825 932.504 712 938C712.075 940.342 712.104 941.659 712 944C711.8 948.525 711.495 951.082 710.5 955.5C709.415 960.319 708.259 962.884 706.5 967.5C705.067 971.262 704.382 973.442 702.5 977C701.106 979.635 699.933 980.887 698.5 983.5C696.736 986.717 694.5 992 694.5 992C694.5 992 697.699 988.462 699.5 986C700.747 984.295 701.328 983.257 702.5 981.5C703.672 979.743 704.438 978.826 705.5 977C706.598 975.113 707.003 973.942 708 972C709.515 969.047 712 964.5 712 964.5C712 964.5 710.456 972.196 709 977C706.991 983.628 705.762 987.391 702.5 993.5C700.452 997.336 699.036 999.365 696.567 1002.9L696.5 1003C694.109 1006.43 692.701 1008.31 690 1011.5C687.41 1014.56 685.928 1016.27 683 1019C680.058 1021.75 678.25 1023.12 675 1025.5C670.89 1028.51 668.392 1029.92 664 1032.5C662.642 1033.3 661.88 1033.74 660.5 1034.5C656.135 1036.89 653.616 1038.14 649 1040C644.419 1041.85 641.771 1042.72 637 1044C630.86 1045.65 627.265 1045.92 621 1047C618.659 1047.4 617.358 1047.71 615 1048C608.603 1048.78 604.905 1048.7 598.5 1048C595.947 1047.72 594.532 1047.43 592 1047C586.299 1046.03 583.057 1045.6 577.5 1044C572.191 1042.47 569.278 1041.24 564.266 1039.11L564 1039C558.612 1036.72 555.634 1035.31 550.5 1032.5C545.887 1029.98 543.369 1028.42 539 1025.5C535.397 1023.09 533.296 1021.82 530 1019C526.851 1016.31 525.229 1014.62 522.5 1011.5C519.746 1008.36 518.391 1006.43 516 1003C513.489 999.401 512.107 997.349 510 993.5C508.029 989.899 506.953 987.839 505.5 984C503.99 980.012 503.484 977.65 502.5 973.5C501.537 969.438 500.5 963 500.5 963C500.5 963 502.64 967.568 504 970.5C505.177 973.036 505.668 974.542 507 977C508.548 979.857 509.336 981.575 511.5 984C513.531 986.276 517.5 989 517.5 989C517.5 989 513.707 983.911 511.5 980.5C509.644 977.632 508.58 976.028 507 973L506.864 972.74C505.653 970.421 504.928 969.032 504 966.5C502.484 962.364 502.215 959.847 501.5 955.5C500.958 952.202 500.701 950.336 500.5 947C500.289 943.492 500.335 941.511 500.5 938C500.685 934.08 500.858 931.872 501.5 928C502.189 923.842 502.833 921.55 504 917.5C505.026 913.94 505.76 911.991 507 908.5C508.117 905.356 508.746 903.592 510 900.5C511.282 897.34 511.95 895.537 513.5 892.5C515.05 889.463 516 888 516 888C516 888 515.355 890.429 515 892C514.257 895.288 514.203 896.729 513.5 900.5C512.923 903.595 512.721 905.359 512.5 908.5C512.215 912.549 512.317 914.856 512.494 918.875L512.5 919C512.691 923.309 512.647 925.772 513.5 930C514.184 933.392 514.853 935.236 516 938.5C517.479 942.709 518.11 945.233 520.5 949C523.386 953.548 530 959 530 959C530 959 527.069 955.473 525.5 953C523.066 949.165 520.5 942.5 520.5 942.5C520.5 942.5 518.366 937.722 517.5 934.5C516.634 931.278 516.323 926.6 516 921.5C515.605 915.264 515.229 911.701 516 905.5C516.643 900.33 517.608 897.521 519 892.5C520.204 888.156 520.845 885.693 522.5 881.5C524.168 877.276 525.323 875.583 527.5 872C530.117 867.694 532.071 865.21 535 861.5C537.929 857.79 539.976 856.101 543.5 853C546.843 850.059 548.807 848.488 552.5 846C555.333 844.092 556.756 843.07 560 842C562.439 841.195 566.5 840.5 566.5 840.5C566.5 840.5 560.14 848.288 557 853C553.193 858.713 552.195 862.711 550.544 869.325L550.5 869.5C548.739 876.55 548.991 880.783 549.5 888C549.721 891.141 549.916 892.906 550.5 896C551.679 902.25 553.098 905.611 555.5 911.5C557.38 916.11 558.572 918.654 561 923C563.615 927.681 568.5 934.5 568.5 934.5C568.5 934.5 564.137 941.93 562 947C559.458 953.032 558.285 956.581 557 963C555.577 970.107 554.746 974.291 555.5 981.5C556.354 989.668 558.461 994.089 562 1001.5C566.529 1010.98 570.261 1015.88 577.5 1023.5C584.684 1031.06 595 1040 598.5 1040C602 1040 600 1003 600 1003L583.5 1017L595 997L563.5 990.5L595 986L585 959L600 977Z" fill="#FEFEFE" stroke="#FEFEFE"/>
                        </g>
                        <path d="M606 0V801.5M176 50.5L548.5 813.5M71 664.5L275.75 771.75L480.5 879M2.5 945H465M98 1268.5L487.5 1021M606 1883V1086M1040.5 1820L673.5 1069.5M1143 1226L733 1010.5M1213.5 945H749M1120.5 619.5L728.5 869" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="607" cy="944" r="141.5" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="606" cy="943" r="238.5" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="606" cy="943" r="266.5" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="608.5" cy="943.5" r="477" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="608.5" cy="946.5" r="564" stroke="#FEFEFE" stroke-width="5"/>
                        <circle cx="608.5" cy="942.5" r="606" stroke="#FEFEFE" stroke-width="5"/>
                        <g id="frontGroundGates1">
                            <circle cx="544" cy="945" r="412.5" stroke="#FEFEFE" stroke-width="5"/>
                        </g>
                        <g id="frontGroundGates2">
                            <circle cx="607.5" cy="1384.5" r="127" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates3">
                            <circle cx="322" cy="1208" r="67.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates4">
                            <circle cx="605" cy="1625" r="70.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates5">
                            <circle cx="237" cy="170" r="88.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates2">
                            <circle cx="155" cy="202" r="34.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates6">
                            <circle cx="606" cy="134" r="57.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates7">
                            <circle cx="605" cy="134" r="28.5" fill="#FEFEFE" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates8">
                            <circle cx="607.5" cy="1692.5" r="142" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates9">
                            <circle cx="491.5" cy="699.5" r="9.5" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates10">
                            <circle cx="531" cy="470" r="13" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates11">
                            <circle cx="131.5" cy="946.5" r="13.5" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates12">
                            <circle cx="322.5" cy="1206.5" r="17.5" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates13">
                            <circle cx="606.5" cy="1489.5" r="21.5" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates14">
                            <circle cx="1011" cy="1760" r="16" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates15">
                            <circle cx="941.5" cy="1449.5" r="7.5" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates16">
                            <circle cx="1056" cy="1110" r="9" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates17">
                            <circle cx="820" cy="1044" r="9" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates18">
                            <circle cx="1074" cy="842" r="8" fill="#FEFEFE"/>
                            </g>
                        <g id="frontGroundGates19">
                            <circle cx="606" cy="596" r="32.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates20">
                            <circle cx="605.5" cy="597.5" r="16" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates21">
                            <circle cx="850.5" cy="944.5" r="22" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates22">
                            <circle cx="961" cy="1266" r="12.5" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates23">
                            <circle cx="755.5" cy="1299.5" r="9" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates24">
                            <circle cx="888.5" cy="562.5" r="47" stroke="#FEFEFE" stroke-width="5"/>
                            </g>
                        <g id="frontGroundGates25">
                            <mask id="mask0_594_193" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="319" y="944" width="571" height="570">
                                <circle cx="604.997" cy="1229" r="282.5" stroke="#FEFEFE" stroke-width="5"/>
                            </mask>
                            <g mask="url(#mask0_594_193)">
                                <path d="M611.999 1276C611.999 1355.53 760 951.19 751.5 949.5C862.5 949.5 1280.5 1503.5 548.5 1572.5C122 1352 379.469 962.5 458.998 962.5L611.999 1276Z" fill="#FEFEFE"/>
                            </g>
                        </g>
                        <path d="M1159.5 1064.5L1201.5 1075.5M1158 1069L1168.5 1071.75M1200 1080L1193.5 1078.3M1155.5 1082L1165.5 1084.75M1195.5 1093L1180 1088.74M1150.5 1099L1160.5 1102.25M1190.5 1112L1170.5 1105.5M1144 1119.5L1184 1132.5M1138 1140L1176 1155M1138 1145L1174 1159.5L1163.5 1157.5L1157 1159.5L1150.5 1164L1133 1156.5L1140.5 1140L1159.5 1132.5L1144 1127.5L1148.5 1117.5L1162 1119.5C1162 1119.5 1161.53 1109.68 1157 1107C1154.76 1105.67 1150.5 1105.5 1150.5 1105.5M1121.5 1182.5L1136 1189.25M1158 1199.5L1136 1189.25M1111 1201.5L1146.5 1220M1106 1213.5C1106 1213.5 1110.53 1217.89 1113.88 1220.12C1115.35 1221.11 1117.32 1222.15 1119.02 1223M1140.5 1234L1127 1226.96M1094.5 1232.5L1109.75 1242M1129 1254L1115.5 1245.59M1092.5 1234C1092.5 1234 1097.54 1238.77 1101.12 1241.38C1104.34 1243.71 1109.75 1246.75 1109.75 1246.75L1127 1257.5M1069.5 1269.5L1073.5 1272.37M1103 1293.5L1073.5 1272.37M1048 1297L1051.65 1300M1081.5 1324.5L1051.65 1300M1044.5 1300L1063.99 1316M1078 1327.5L1063.99 1316M1038 1310L1069.5 1337M1025 1327.5L1044.5 1345.32M1054 1354L1044.5 1345.32M1170.5 1105.5L1174 1093M1170.5 1105.5L1160.5 1102.25M1154 1091L1160.5 1102.25M1180 1088.74L1193.5 1078.3M1180 1088.74L1184 1075.81M1180 1088.74L1165.5 1084.75M1193.5 1078.3L1184 1075.81M1184 1075.81L1168.5 1071.75M1168.5 1071.75L1165.5 1084.75M1165.5 1084.75L1159.5 1075.5M1117.5 1192.5C1117.5 1192.5 1122.28 1194.55 1125.5 1194.5C1128.53 1194.45 1130.54 1194.27 1133 1192.5C1134.4 1191.49 1136 1189.25 1136 1189.25M1131 1220.12L1127 1226.96M1127 1226.96L1122.75 1224.75C1122.75 1224.75 1121.07 1224.02 1119.02 1223M1125.5 1216L1119.02 1223M1136 1241.38C1136 1241.38 1128.62 1234.76 1122.75 1234C1120.72 1233.74 1119.4 1233.22 1117.5 1234C1113.25 1235.74 1115.5 1245.59 1115.5 1245.59M1115.5 1245.59L1109.75 1242M1101.12 1220.12L1109.75 1242M1073.5 1266.5L1085.5 1275M1094.5 1306.5L1079 1296C1079 1296 1079.21 1291.73 1079 1289C1078.8 1286.44 1078.64 1284.99 1078 1282.5C1076.92 1278.31 1073.5 1272.37 1073.5 1272.37M1090.5 1312L1073.5 1300C1073.5 1300 1069.97 1301.91 1067.5 1302.5C1063.89 1303.36 1061.62 1303.31 1058 1302.5C1055.4 1301.92 1051.65 1300 1051.65 1300M1069.5 1334L1063.99 1316M1062 1344.5L1041.5 1327.5L1044.5 1345.32M1058 1334L1049 1326M1125.5 1175L1162 1192.5L1151.5 1184L1148.5 1178.5V1171.5L1129 1164L1125.5 1175ZM1083.5 1249L1117.5 1271.5C1117.5 1271.5 1119.68 1262.51 1117.5 1257.5C1116.11 1254.31 1114.63 1252.77 1112 1250.5C1109.91 1248.7 1108.56 1247.79 1106 1246.75C1101.82 1245.05 1098.99 1245.13 1094.5 1245.59C1090.02 1246.04 1083.5 1249 1083.5 1249ZM1081.5 1252.5L1115.5 1275C1115.5 1275 1107 1279.69 1101.12 1279.5C1097.67 1279.39 1095.52 1279.19 1092.5 1277.5C1088.88 1275.47 1087.69 1273.03 1085.5 1269.5C1083.37 1266.08 1082.17 1263.97 1081.5 1260C1081.01 1257.11 1081.5 1252.5 1081.5 1252.5Z" stroke="#FEFEFE" stroke-width="3"/>
                    </g>
                    </svg>
                
                </div>
            </div>
        </div>
        `;
        let wrapper = this.shadowRoot.querySelector('.bgWrapper2');
        let box11 = this.shadowRoot.getElementById("box11");
        let box22 = this.shadowRoot.getElementById("box22");

        let shadows = '0 0 10px rgba(255, 0, 0, 1)';
        for (let i = 0; i < 10000; i++) {
            let randomSize1 = Math.floor(Math.random() * 10) + 1; // Random size between 5px and 500px
            let randomSize2 = Math.floor(Math.random() * 10) + 1;

            let randomX1 = Math.floor(Math.random() * (wrapper.offsetWidth));
            let randomY1 = Math.floor(Math.random() * (wrapper.offsetHeight*10)) - wrapper.offsetHeight*5;

            let randomX2 = Math.floor(Math.random() * (wrapper.offsetWidth));
            let randomY2 = Math.floor(Math.random() * (wrapper.offsetHeight*10)) - wrapper.offsetHeight*5;

            shadows += `, ${randomX1}px ${randomY1}px ${randomSize1}px rgba(30, 255, 255, 0.6)`;
            shadows += `, ${randomX2}px ${randomY2}px ${randomSize2}px rgba(255, 40, 255, 0.6)`;
        }
        box11.style.boxShadow = `${shadows}`;
        box22.style.boxShadow = `${shadows}`;
        console.log(box1);
        document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if (e.key === 'ArrowLeft')
                this.__angle += 120;
            if (e.key === 'ArrowRight')
                this.__angle -= 120;
            this.shadowRoot.querySelector('#frontGroundGatesBase').style.transform = `rotate(${-this.__angle}deg)`;
            setTimeout(() => {
                this.shadowRoot.querySelector('.gatesFrontGround').style.transform = `rotate(${this.__angle}deg)`;
            }, 500);
        });
        this.shadowRoot.querySelector('.gatesFrontGround').style.transform = `rotate(${this.__angle}deg)`;
    }
    get angle() {
        return this.getAttribute('angle');
    }
    set angle(value) {
        this.setAttribute('angle', value);
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