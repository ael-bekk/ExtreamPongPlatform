class Screen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const width = 1000;
        const height = 500;
        let corner = height * 0.04;
        let littleCorner = corner * 0.6;
        let side = width * 0.3;
        
        const width2 = 1000 - 20;
        const height2 = 500 - 20;
        let side3 = width2 * 0.05;
        let corner2 = height2 * 0.03;
        let littleCorner2 = corner2 * 0.8;
        let side2 = width2 * 0.29;

        this.shadowRoot.innerHTML = `
                    <style>
                        svg {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            transform: rotateX(-50deg) translateY(-150px);
                            fill: #8176AF55;
                            transition: 0.7s ease-in-out 0.3s;
                        }
                        @media screen and (max-width: 1080px){
                            svg {
                                transform: translate(0, 0);
                                transition: 0.5s ease-in-out;
                            }
                        }
                    </style>
                    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                        <mask id="screenMask" x="0" y="0" width="100%" height="100%">
                            <path d=
                                "M ${corner} ${0}
                                L ${side} ${0}
                                L ${side + corner } ${littleCorner}
                                L ${width - corner - side} ${littleCorner}
                                L ${width - side} ${0}
                                L ${width - corner} ${0}
                                L ${width} ${corner}
                                L ${width} ${height - corner}
                                L ${width - corner} ${height}
                                L ${width - side} ${height}
                                L ${width - corner - side} ${height - littleCorner}
                                L ${corner + side} ${height - littleCorner}
                                L ${side} ${height}
                                L ${corner} ${height}
                                L ${0} ${height - corner}
                                L ${0} ${corner}
                                Z"
                                fill="rgba(0,255,0,0.5)" stroke="green" stroke-width="1"/>
                        </mask>
                        <path d=
                            "M ${corner} ${0}
                            L ${side} ${0}
                            L ${side + corner} ${littleCorner}
                            L ${width - corner - side} ${littleCorner}
                            L ${width - side} ${0}
                            L ${width - corner} ${0}
                            L ${width} ${corner}
                            L ${width} ${height - corner}
                            L ${width - corner} ${height}
                            L ${width - side} ${height}
                            L ${width - corner - side} ${height - littleCorner}
                            L ${corner + side} ${height - littleCorner}
                            L ${side} ${height}
                            L ${corner} ${height}
                            L ${0} ${height - corner}
                            L ${0} ${corner}
                            Z"
                             stroke="green" stroke-width="2"/>
                        <path d=
                            "M ${corner2 + 10} ${0 + 10}
                            L ${side2 + 10} ${0 + 10}
                            L ${side2 + corner2 + 6 + 10} ${littleCorner2 + 10}
                            L ${width2 - corner2 - side2 - 6 + 10} ${littleCorner2 + 10}
                            L ${width2 - side2 + 10} ${0 + 10}
                            L ${width2 - corner2 + 10} ${0 + 10}
                            L ${width2 + 10} ${corner2 + 10}
                            L ${width2 + 10} ${height2 - corner2 + 10}
                            L ${width2 - corner2 + 10} ${height2 + 10}
                            L ${width2 - side2 + 10} ${height2 + 10}
                            L ${width2 - corner2 - side2 - 6 + 10} ${height2 - littleCorner2 + 10}
                            L ${corner2 + side2 + 6 + 10} ${height2 - littleCorner2 + 10}
                            L ${side2 + 10} ${height2 + 10}
                            L ${corner2 + 10} ${height2 + 10}
                            L ${0 + 10} ${height2 - corner2 + 10}
                            L ${0 + 10} ${corner2 + 10}
                            Z"
                             stroke="green" stroke-width="1"/>
                            <path d="
                                M ${side2 + corner2 + side3 } ${littleCorner2+4}
                                L ${width2 + 10 - corner2 - side2 - side3 } ${littleCorner2+4}"
                                fill="none" stroke="white" stroke-width="3" strokeLinecap="round"/>
                            <path d="
                                M ${side2 + corner2 + side3 } ${littleCorner2+4}
                                L ${width2 + 10 - corner2 - side2 - side3 } ${littleCorner2+4}"
                                fill="none" stroke="white" stroke-width="6" filter="blur(2px)" strokeLinecap="round"/>
                            <path d="
                                M ${side2 + corner2 + side3 } ${height2 + 20 - littleCorner2-4}
                                L ${width2 + 10 - corner2 - side2 - side3 } ${height2 + 20 - littleCorner2-4}"
                                fill="none" stroke="white" stroke-width="3" strokeLinecap="round"/>
                            <path d="
                                M ${side2 + corner2 + side3 } ${height2 + 20 - littleCorner2-4}
                                L ${width2 + 10 - corner2 - side2 - side3 } ${height2 + 20 - littleCorner2-4}"
                                fill="none" stroke="white" stroke-width="6" filter="blur(3px)" strokeLinecap="round"/>
                    </svg>
                `;
    }
}

customElements.define('custom-screen', Screen);

function createScreen() {
    const screen = document.createElement('custom-screen');
    return screen;
}
