import {createContainerDiv, createSpacer, createTextDiv, renderElement} from "../../common/utils/utils.ts";
import './EducationComponent.css';
import {educationData} from "../../common/data/educationData.ts";

export class EducationComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('education');

        const spacer = createSpacer('100px', '0px');

        const horizontalBar = document.createElement('hr');
        horizontalBar.className = 'horizontalbar';

        this.container.appendChild(spacer);
        this.container.appendChild(horizontalBar);

        this.addItem();
    }

    private addItem() {
        const schoolsContainer = createContainerDiv('schools');

        educationData.forEach((item) => {
            const school = createTextDiv('school', item.schoolName);
            schoolsContainer.appendChild(school);
        });

        this.container.appendChild(schoolsContainer);
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}