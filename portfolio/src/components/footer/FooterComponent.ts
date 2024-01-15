import '../../../style.css'
import './FooterComponent.css'
import {createButton, renderElement} from "../../common/utils/utils.ts";

export class FooterComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'footer';

        /// Social media buttons container
        const socialContainer = document.createElement('div');

        /// Social media buttons
        const gitHubButton = createButton('GitHub');
        const linkedInButton = createButton('LinkedIn');
        gitHubButton.className = 'button';
        linkedInButton.className = 'button';

        socialContainer.appendChild(gitHubButton);
        socialContainer.appendChild(linkedInButton);

        /// Add elements to the DOM
        this.container.appendChild(socialContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}