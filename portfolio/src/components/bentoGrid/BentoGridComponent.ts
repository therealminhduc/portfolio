import '../../../style.css'
import './BentoGridComponent.css'
import {createContainerDiv, renderElement} from "../../common/utils/utils.ts";
import {data} from "./data.ts";

export class BentoGridComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('bento');

        this.addItem();
    }

    public addItem() {
        const gridItemContainer = createContainerDiv('gridItemContainer');

        data.forEach((item, i) => {
            const gridItem = document.createElement('div');
            gridItem.className = 'gridItem';
            gridItem.textContent = item.title;

            if (i === 3 || i === 6) {
                gridItem.style.gridColumn = 'span 2';
            }

            gridItemContainer.appendChild(gridItem);
        });

        this.container.appendChild(gridItemContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}