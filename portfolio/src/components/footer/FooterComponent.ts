import '../../../style.css'
import './FooterComponent.css'
import {createButton, createContainerDiv, renderElement} from "../../common/utils/utils.ts";

export class FooterComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('footer');

        /// Social media buttons container
        const socialContainer = document.createElement('div');

        /// Social media buttons
        const gitHubButton = createButton('button', 'GitHub');
        const linkedInButton = createButton('button', 'LinkedIn');

        socialContainer.appendChild(gitHubButton);
        socialContainer.appendChild(linkedInButton);

        /// Add elements to the DOM
        this.container.appendChild(socialContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}