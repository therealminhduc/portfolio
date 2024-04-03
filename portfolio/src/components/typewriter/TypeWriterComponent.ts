import '../../../style.css'
import './TypeWriterComponent.css'
import {createContainerDiv, createSpacer, createTextDiv, renderElement} from "../../common/utils/utils.ts";

export class TypeWriterComponent {
    private readonly container: HTMLDivElement;

    private readonly greetings: string[] = ["hello", "xin chào", "bonjour"];
    private currentGreetingIndex: number = 0;

    constructor() {
        this.container = createContainerDiv('typewriter');

        const introduction = createTextDiv('typewriter-text', this.greetings[this.currentGreetingIndex] + ",");
        const myName = createTextDiv('myName', "i'm minhduc.");
        const spacer = createSpacer('70px', '0px');
        const whoami1 = createTextDiv('whoami', "i'm a student in software development,");
        const whoami2 = createTextDiv('whoami', "currently R&D apprentice at Ennov.");

        this.container.appendChild(introduction);
        this.container.appendChild(myName);
        this.container.appendChild(spacer);
        this.container.appendChild(whoami1);
        this.container.appendChild(whoami2);

        this.switchGreeting();
    }

    public switchGreeting() {
        const textElement = this.container.querySelector('.typewriter-text') as HTMLDivElement;

        if (!textElement) return;

        const switchz = () => {
            setTimeout(() => {
                this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
                textElement.innerText = this.greetings[this.currentGreetingIndex] + ",";

                setTimeout(switchz, 1000);
            }, 1000);
        };

        switchz();
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);
    }
}