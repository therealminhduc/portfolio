export function createContainerDiv(className: string): HTMLDivElement {
    const container = document.createElement('div');
    container.className = className;
    return container;
}

export function createButton(className: string, label: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = className;
    button.textContent = label;
    return button;
}

export function renderElement(element: HTMLElement, parentElement: HTMLElement): void {
    parentElement.appendChild(element);
}