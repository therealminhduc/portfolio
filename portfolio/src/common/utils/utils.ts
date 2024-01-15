export function createButton(label: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.textContent = label;
    return button;
}

export function renderElement(element: HTMLElement, parentElement: HTMLElement): void {
    parentElement.appendChild(element);
}