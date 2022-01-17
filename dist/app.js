import { ImageComponent } from "./components/page/item/image.js";
import { VideoCompoenent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attatchTo(appRoot);
        const images = new ImageComponent("image title", "https://picsum.photos/600/300");
        images.attatchTo(appRoot, "beforeend");
        const video = new VideoCompoenent("Video Title", "https://www.youtube.com/watch?v=aDS2U713XYw");
        video.attatchTo(appRoot, "beforeend");
        const note = new NoteComponent("Note Title!!", "Lorem ipsum dolor sit amet.");
        note.attatchTo(appRoot, "beforeend");
        const todo = new TodoComponent("Todo!!!");
        todo.attatchTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
