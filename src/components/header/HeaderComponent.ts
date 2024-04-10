import '../../../style.css'
import './HeaderComponent.css'
import {createButton, createContainerDiv, renderElement} from "../../common/utils/utils.ts";
import {socialData} from "../../common/data/socialData.ts";

export class HeaderComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('header');

        this.addItem();
    }


    private addItem(){
        /// Title (mynkie)
        const titleContainer = document.createElement('div');

        const titleButton = createButton('title', 'mynkie');

        titleContainer.appendChild(titleButton)

        const buttonsContainer = document.createElement('div');

        // Buttons (About me & CV)
        socialData.forEach((item) => {
            const socialButton = createButton('button', item.title);

            socialButton.addEventListener('click', () => {
                window.open(item.link);
            });

            buttonsContainer.appendChild(socialButton);
        });

        /// Dark & light mode
        const darkLight = createButton('button', 'Dark/Light');


        buttonsContainer.appendChild(darkLight);

        /// Add elements to the DOM
        this.container.appendChild(titleContainer);
        this.container.appendChild(buttonsContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}