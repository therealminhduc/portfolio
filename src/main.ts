import {HeaderComponent} from "./components/header/HeaderComponent.ts";
import {FooterComponent} from "./components/footer/FooterComponent.ts";
import {CursorComponent} from "./common/cursor/CursorComponent.ts";
import {ProjectsBentoComponent} from "./components/projectsBento/ProjectsBentoComponent.ts";
import {TypeWriterComponent} from "./components/typewriter/TypeWriterComponent.ts";
import {TechnoStackBentoComponent} from "./components/technoStackBento/TechnoStackBentoComponent.ts";
import {EducationComponent} from "./components/education/EducationComponent.ts";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded!');
});

document.addEventListener('DOMContentLoaded', () => {
    const cursorComponent = new CursorComponent();
    cursorComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const headerComponent = new HeaderComponent();
    headerComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const typeWriterComponent = new TypeWriterComponent();
    typeWriterComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const technoStackBentoComponent = new TechnoStackBentoComponent();
    technoStackBentoComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const bentoGridComponent = new ProjectsBentoComponent();
    bentoGridComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const educationComponent = new EducationComponent();
    educationComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const footerComponent = new FooterComponent();
    footerComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});