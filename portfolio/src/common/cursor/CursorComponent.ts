import '../../../style.css'
import './CursorComponent.css'
import {createContainerDiv, renderElement} from "../utils/utils.ts";

export class CursorComponent {
    private readonly container: HTMLDivElement;

    constructor() {
        this.container = createContainerDiv('cursor');
    }

    public render(parentElement: HTMLElement): void {
        renderElement(this.container, parentElement);

        const cursor = document.querySelector('.cursor') as HTMLDivElement;
        document.addEventListener('mousemove',  (e) => {
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });
    }
}