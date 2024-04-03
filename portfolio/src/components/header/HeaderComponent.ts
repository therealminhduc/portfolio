import '../../../style.css'
import './HeaderComponent.css'
import {createButton, createContainerDiv, renderElement} from "../../common/utils/utils.ts";

export class HeaderComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('header');

        /// Title (mynkie)
        const titleContainer = document.createElement('div');

        const titleButton = createButton('title', 'mynkie');

        titleContainer.appendChild(titleButton)

        const buttonsContainer = document.createElement('div');

        /// Buttons (About me & CV)
        const aboutMeButton = createButton('button', 'About me');
        const cvButton = createButton('button', 'CV');

        /// Dark & light mode
        const darkLight = createButton('button', 'Dark/Light');

        buttonsContainer.appendChild(aboutMeButton);
        buttonsContainer.appendChild(cvButton);
        buttonsContainer.appendChild(darkLight);

        /// Add elements to the DOM
        this.container.appendChild(titleContainer);
        this.container.appendChild(buttonsContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}