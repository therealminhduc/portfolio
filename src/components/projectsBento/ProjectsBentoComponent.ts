import '../../../style.css'
import './ProjectsBentoComponent.css'
import {
    createBentoGridItem,
    createContainerDiv, createModal,
    createTextDiv,
    renderElement
} from "../../common/utils/utils.ts";
import {projectsData} from "../../common/data/projectsData.ts";

export class ProjectsBentoComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('projectsBentoContainer');

        const title = createTextDiv("projectTitle", "Projects");

        this.container.appendChild(title);
        this.addItem();
    }

    private addItem() {
        const gridItemContainer = createContainerDiv('projectsGridItemContainer');

        projectsData.forEach((item, i) => {
            // const gridItem = createBentoGridItem('gridItem', '', item.imageSource);
            const gridItem = createBentoGridItem('projectGridItem', '', item.imageSource);
            const overlay = createBentoGridItem('projectOverlay', item.title, '');

            gridItem.addEventListener('click', () => {
                const modal = createModal("technoModal", item.title, "string");
                gridItemContainer.appendChild(modal);

                modal.querySelector('.modal-content')?.classList.add('active');
            })

            gridItem.appendChild(overlay);

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