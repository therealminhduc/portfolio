import '../../../style.css'
import './TechnoStackBentoComponent.css'
import '../../common/modal/Modal.css'
import {
    createBentoGridItem,
    createContainerDiv,
    createTextDiv,
    renderElement
} from "../../common/utils/utils.ts";
import {technoData} from "../../common/data/technoData.ts";

export class TechnoStackBentoComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('technoStackBentoContainer');

        const title = createTextDiv("technoTitle", "Technologies");

        this.container.appendChild(title);
        this.addItem();
    }

    private addItem() {
        const gridItemContainer = createContainerDiv('technoGridItemContainer');

        technoData.forEach((item) => {
            // const gridItem = createBentoGridItem('gridItem', '', item.imageSource);
            const gridItem = createBentoGridItem('technoGridItem', '', '');
            const overlay = createBentoGridItem('technoOverlay', item.title, '');

            gridItem.appendChild(overlay);

            // if (i === 3 || i === 6) {
            //     gridItem.style.gridColumn = 'span 2';
            // }

            gridItemContainer.appendChild(gridItem);
        });

        this.container.appendChild(gridItemContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}