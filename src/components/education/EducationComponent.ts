import {createBentoGridItem, createContainerDiv, createTextDiv, renderElement} from "../../common/utils/utils.ts";
import './EducationComponent.css';
import {educationData} from "../../common/data/educationData.ts";

export class EducationComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('education');

        this.addItem();
    }

    private addItem() {
        const schoolsContainer = createContainerDiv('schools');
        
        educationData.forEach((item) => {
            const schoolWrapper = createContainerDiv('schoolWrapper');

            const school = createTextDiv('school', item.schoolName);
            const description = createTextDiv('description', item.years);
            const gridItem = createBentoGridItem('educationGridItem', '', item.imageSource);

            schoolWrapper.appendChild(school);
            schoolWrapper.appendChild(description);
            schoolWrapper.appendChild(gridItem);

            schoolsContainer.appendChild(schoolWrapper)
        });

        this.container.appendChild(schoolsContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}