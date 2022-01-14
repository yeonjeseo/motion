import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attatchTo(appRoot);
        const images = new ImageComponent("image title", "https://picsum.photos/600/300");
        images.attatchTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
