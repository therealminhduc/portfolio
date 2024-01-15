import {HeaderComponent} from "./components/header/HeaderComponent.ts";
import {FooterComponent} from "./components/footer/FooterComponent.ts";

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded!');
});


document.addEventListener('DOMContentLoaded', () => {
    const headerComponent = new HeaderComponent();
    headerComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});

document.addEventListener('DOMContentLoaded', () => {
    const footerComponent = new FooterComponent();
    footerComponent.render(document.querySelector<HTMLDivElement>('#app')!);
});