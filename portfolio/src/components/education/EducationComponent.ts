import {createContainerDiv, createTextDiv, renderElement} from "../../common/utils/utils.ts";
import './EducationComponent.css';
import {educationData} from "../../common/data/educationData.ts";

export class EducationComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('education');

        // const spacer = createSpacer('0px', '0px');

        const horizontalBar = document.createElement('hr');
        horizontalBar.className = 'horizontalbar';

        // this.container.appendChild(spacer);
        this.container.appendChild(horizontalBar);

        this.addItem();
    }

    private addItem() {
        const schoolsContainer = createContainerDiv('schools');

        educationData.forEach((item) => {
            const schoolWrapper = createContainerDiv('schoolWrapper');

            const school = createTextDiv('school', item.schoolName);
            const description = createTextDiv('description', item.schoolDescription);

            schoolWrapper.appendChild(school);
            schoolWrapper.appendChild(description);

            schoolsContainer.appendChild(schoolWrapper)
        });

        this.container.appendChild(schoolsContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}