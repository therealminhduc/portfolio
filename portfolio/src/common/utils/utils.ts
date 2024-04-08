export function createContainerDiv(className: string): HTMLDivElement {
    const container = document.createElement('div');
    container.className = className;
    return container;
}

export function createTextDiv(className: string, textContent: string): HTMLDivElement {
    const textDiv = document.createElement('div');
    textDiv.className = className;
    textDiv.textContent = textContent;
    return textDiv;
}

export function createButton(className: string, label: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = className;
    button.textContent = label;
    return button;
}

export function createBentoGridItem(className: string, textContent: string, imageSource: string) {
    const gridItem = document.createElement('div');
    gridItem.className = className;
    gridItem.textContent = textContent;

    const absoluteImagePath = new URL(imageSource, import.meta.url).href;

    gridItem.style.backgroundImage = `url(${absoluteImagePath})`;
    return gridItem;
}

export function createSpacer(height: string, width: string): HTMLDivElement {
    const spacer = document.createElement('div');
    spacer.style.height = height;
    spacer.style.width = width;
    return spacer;
}

export function createModal(className: string, title: string, content: string) {
    const modalContainer = createContainerDiv('modal');
    modalContainer.className = className;
    modalContainer.style.display = 'hidden';

    const modalContent = createContainerDiv('modal-content');

    const closeButton = createButton("close", "Dismiss");
    closeButton.addEventListener('click', () => closeModal(modalContainer));

    const modalTitle = createTextDiv('modal-title', title);
    const modalBody = createTextDiv('modal-body', content);
    modalContent.classList.add("active");

    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalBody);

    modalContainer.appendChild(modalContent);

    return modalContainer;
}

export function renderElement(element: HTMLElement, parentElement: HTMLElement): void {
    parentElement.appendChild(element);
}

export function openModal(modal: HTMLElement){
    modal.style.display = 'block';
}

export function closeModal(modal: HTMLElement){
    modal.classList.remove("active");
    modal.remove();
}