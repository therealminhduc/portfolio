import '../../../style.css'
import './FooterComponent.css'
import {createButton, createContainerDiv, createTextDiv, renderElement} from "../../common/utils/utils.ts";
import {socialData} from "../../common/data/socialData.ts";

export class FooterComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('footer');

        const trademark = createContainerDiv('footer-trademark');

        /// Social media buttons container
        const socialContainer = createContainerDiv('footer-content');

        const mynkie = createTextDiv('mynkie', '@2024 mynkie');

        /// Social media buttons
        // const gitHubButton = createButton('button', 'GitHub');
        // const linkedInButton = createButton('button', 'LinkedIn');

        trademark.appendChild(mynkie);

        socialData.forEach((item) => {
            const socialButton = createButton('button', item.title);

            socialButton.addEventListener('click', () => {
                window.open(item.link);
            });

            socialContainer.appendChild(socialButton);
        });

        /// Add elements to the DOM
        this.container.appendChild(trademark);
        this.container.appendChild(socialContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}